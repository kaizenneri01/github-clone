import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import '../css/InfoCard.css';
import { GHState } from '../types';

const InfoCard = () => {
    const Gh = useSelector((state: { Gh: GHState }) => state.Gh);

    return (
        <div className={Gh.name ? 'InfoCard InfoCard__animate' : 'InfoCard'}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
                <Grid item>
                    <img src={Gh.avatar_url} className="InfoCard__img" alt="avatar" />
                </Grid>
                <Grid item style={{ marginRight: '.5rem', textAlign: 'center' }}>
                    <h2>{Gh.name}</h2>
                    <p>
                        <a
                            style={{
                                textDecoration: 'none',
                                color: 'steelblue',
                                textAlign: 'center'
                            }}
                            href={Gh.blog}>
                            {Gh.blog}
                        </a>
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <h3 style={{ textAlign: 'center' }}>{Gh.bio}</h3>
                </Grid>
            </Grid>
        </div>
    );
};

export default InfoCard;
