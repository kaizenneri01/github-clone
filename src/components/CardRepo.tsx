import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Grid,
    Slide
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepoReadme } from '../actions/GHActions';
import '../css/CardRepoStyles.css';
import { GHState } from '../types';

interface repoProps {
    name: string;
    description: string;
    language: string;
    html_url: string;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CardRepo: React.FC<repoProps> = ({ name, description, language, html_url }) => {
    const [modal, setModal] = useState(false);
    const Gh = useSelector((state: { Gh: GHState }) => state.Gh);
    const dispatch = useDispatch();

    return (
        <div className="RepoCard">
            <Grid container justifyContent={'center'}>
                <Dialog
                    open={modal}
                    TransitionComponent={Transition}
                    keepMounted
                    aria-describedby="alert-dialog-slide-description">
                    <DialogContent>
                        <DialogContentText>
                            <ReactMarkdown children={Gh.readme} />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setModal(!modal)}>Close</Button>
                    </DialogActions>
                </Dialog>
                <Grid item>
                    <h1>{name}</h1>
                </Grid>
                <Grid item xs={12}>
                    <p style={{ textAlign: 'center' }}>{description}</p>
                </Grid>
                <Grid item>
                    <h3>{language}</h3>
                </Grid>
                <Grid item container spacing={2}>
                    <Grid item xs={6}>
                        <Button fullWidth variant="contained" href={html_url} target="_blank">
                            View
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                setModal(true);
                                dispatch(fetchRepoReadme(Gh.login, name));
                            }}>
                            README
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default CardRepo;
