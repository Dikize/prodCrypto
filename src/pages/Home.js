import React from 'react';
import { Grid } from "@material-ui/core";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import Footer from '../Components/Footer';
import DemonstrationSection from '../Components/DemonstrationSection';
import MainTitle from '../Components/MainTitle';
import SellerCard from '../Components/SellerCard';

const useStyles = makeStyles((theme) => ({
    cardSeller: {
        margin: '2rem',

        [theme.breakpoints.down('sm')]: {
            margin: '2rem auto',
        },
        [theme.breakpoints.down('xs')]: {
            margin: 'auto',
        },
    },
    titleHome: {
        textAlign: 'center',
    }
}));

const Theme = createTheme({
    palette: {
    primary: {
        main: "#fff",
    },
    type: "dark",
    },
});

function Home() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={Theme}>
            <InnerLayout>
                <MainTitle title={'Meilleures ventes ce mois-ci'} subtitle={'Tous les entrepreneurs'} className={classes.titleHome}/>
                
                <Grid container xs={12}>
                {/* <Grid item xs={12} md={6} className="sellercards"> */}
                    <Grid item xs={11} sm={7} md={5} className={classes.cardSeller}>
                        <SellerCard />
                    </Grid>

                    <Grid item xs={11} sm={7} md={5} className={classes.cardSeller}>
                        <SellerCard />
                    </Grid>

                    <Grid item xs={11} sm={7} md={5} className={classes.cardSeller}>
                        <SellerCard />
                    </Grid>

                    <Grid item xs={11} sm={7} md={5} className={classes.cardSeller}>
                        <SellerCard />
                    </Grid>
                </Grid>

                <DemonstrationSection />
            </InnerLayout>
            <Footer />
        </ThemeProvider>
    )
}

export default Home;
