import React from 'react';
// import { Grid } from "@material-ui/core";
import { createTheme, makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';
import ContactSection from '../Components/ContactSection';

const useStyles = makeStyles((theme) => ({
    cardHome: {
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(8.5px)',
        borderRadius: '10px',
        color: '#ffffff',
        textTransform: 'uppercase',
        letterSpacing: '0.4rem',
        width: '100%',
        transition: 'all 1s',
        '&:hover': {
            transform: 'translateY(-20px)',
        },

        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '95%'
        },
    },
    cardSeller: {
        margin: '2rem',

        [theme.breakpoints.down('sm')]: {
            margin: '2rem auto',
        },
        [theme.breakpoints.down('xs')]: {
            margin: 'auto',
        },

    },
    minicheems: {
        textAlign: "center",
        width: "100%",

        [theme.breakpoints.down('sm')]: {
            marginTop: '134px',
        },
    }
}));

function Footer() {

    return (
        <BodyContentStyled>
            <ContactSection />
            <footer>
                <p>Copyright ©KuntaKinte. All Rights Reserved</p>
            </footer>
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.div`
    footer{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #020A27;
        padding: 3rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        p{
            text-align: center;
            opacity: 0.7;
        }
    }
`;

export default Footer;
