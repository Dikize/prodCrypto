import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
// import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import CtaButton from '../CtaButton';
import Navigation from './Navbar';
import SmallHeading from '../SmallHeading';
import blockchain from '../../img/bchain.png';

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
    // headerTitle: {
    //     [theme.breakpoints.down('xs')]: {
    //         width: '95%'
    //     },
    // },
    hedearParaf: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
}));

function MainContent() {
    const classes = useStyles();
    return (
        <MainContentStyled >
            <Navigation />
            <div className="content">
                <div className="left">
                    <SmallHeading title={'Toutes les devises numériques au même endroit'} identifier={'Before'} />
                    <h1 className={classes.headerTitle}>
                        <span className='GradientText'>Impressionnant NFTS</span> 
                    </h1>
                    <p className={classes.hedearParaf}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Vero id unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem. 
                        Cumque obcaecati sint officiis quis laboriosam vitae, error molestiae temporibus 
                        voluptatum consectetur, 
                        quibusdam magni, delectus a autem soluta optio laborum!
                    </p>
                    <div className="btns-con">
                        <CtaButton name={'découvrir plus'} />
                        <CtaButton name={'obtenir de l\'aide'} />
                    </div>
                </div>
                <div className="right">
                    <img src={blockchain} alt="" />
                </div>
            </div>
        </MainContentStyled >
    )
}


const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    .content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        width: 100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.8rem 0;
            }
            .btns-con{
                margin-top: 3rem;
            }
        }

        .right{
            img{
                position: absolute;
                right: -11%;
                bottom: -1%;
                width: 60%;
            }
        }
    }
`;
export default MainContent;
