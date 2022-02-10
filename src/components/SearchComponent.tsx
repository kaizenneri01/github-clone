import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import '../css/SearchComponentStyles.css';
import { Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchUserRepo } from '../actions/GHActions';
import { GHState } from '../types';

export default function SearchComponent() {
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const Gh = useSelector((state: { Gh: GHState }) => state.Gh);
    const dispatch = useDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await dispatch(fetchUser(username));
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        try {
            Gh.name && dispatch(fetchUserRepo(username));
        } catch (error) {
            console.log(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Gh.name]);

    return (
        <div className={Gh.name ? 'card card__animate' : 'card'}>
            <CardContent>
                <h3 className="card__intro">Search a github username to begin!</h3>

                <form className="card__form" onSubmit={handleSubmit}>
                    <Grid container justifyContent={'center'} spacing={1}>
                        <Grid item md={8}>
                            <TextField
                                onChange={e => {
                                    setUsername(e.target.value);
                                }}
                                value={username}
                                fullWidth
                                id="github-username-input"
                                label="Search Username"
                            />
                        </Grid>
                        <Grid item md={4}>
                            <Button
                                id="submit"
                                disabled={isLoading}
                                color="info"
                                type="submit"
                                style={{ padding: '1rem' }}
                                variant="contained"
                                size="small">
                                {isLoading ? 'Loading...' : 'Search'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </div>
    );
}
