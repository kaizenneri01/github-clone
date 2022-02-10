import SearchComponent from './components/SearchComponent';
import Layout from './components/Layout';
import { Grid } from '@mui/material';
import InfoCard from './components/InfoCard';
import CardRepo from './components/CardRepo';
import { GHState } from './types';
import { useSelector } from 'react-redux';

function App() {
    const Gh = useSelector((state: { Gh: GHState }) => state.Gh);

    return (
        <div>
            <Layout>
                <Grid container style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                    <SearchComponent />
                    {/* Info of the search query */}
                    {Gh.name && (
                        <Grid item container spacing={2}>
                            <Grid item xs={12} style={{ marginBottom: '2rem' }}>
                                <InfoCard />
                            </Grid>
                            {Gh.repos.map(i => (
                                <Grid key={i.id} item md={6} lg={4} xs={12}>
                                    <CardRepo
                                        html_url={i.html_url}
                                        name={i.name}
                                        description={i.description}
                                        language={i.language}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Grid>
            </Layout>
        </div>
    );
}

export default App;
