import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';
import business from '../../img/marketing.mp4';
import circles from '../../img/circles.svg';
import {InnerLayout} from '../../Layouts'
import MainContent from './MainContent';
const useStyles = makeStyles((theme) => ({
    contentHeader: {
        // margin: '2rem',

        [theme.breakpoints.down('md')]: {
            height: '665px'
        },
        [theme.breakpoints.down('sm')]: {
            // margin: '2rem auto',
        },
        [theme.breakpoints.down('xs')]: {
            // margin: 'auto',
        },
    }
}));

function MainArea() {
    const classes = useStyles();
    return (
        <MainAreaStyled className={classes.contentHeader}>
            <video src={business} muted playsInline autoPlay loop></video>
            {<img src={circles} alt="" className="overlay" />}
            <InnerLayout>
                <MainContent />
            </InnerLayout>
        </MainAreaStyled>
    )
}

const MainAreaStyled = styled.header`
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    @media (max-width: 1091px) {
        height: '665px';
    };
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        right: -400px;
        top: -300px;
        
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
    }
`;

export default MainArea;
