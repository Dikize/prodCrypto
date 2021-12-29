import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
// import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import CtaButton from '../CtaButton';
import Navigation from './Navbar';
import SmallHeading from '../SmallHeading';
import blockchain from '../../img/bchain.png';


const useStyles = makeStyles((theme) => ({
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
            <div className={`${classes.form} content`}>
                <div className="left">
                    {/* <SmallHeading title={'Toutes les devises numériques au même endroit'} identifier={'Before'} /> */}
                    <h1 className={classes.headerTitle}>
                        <span className='GradientText'>Impressionnant NFTS</span> 
                    </h1>
                    <p className={classes.hedearParaf}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Vero id unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem. 
                    </p>
                    <div className="btns-con">
                        <button>
                            <CtaButton className="btn-item" name={'découvrir plus'} />
                        </button>
                        {/* <button>
                            <CtaButton className="btn-item" name={'obtenir de l\'aide'} />
                        </button> */}
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
    height: 100%;
    width: 100%;
    margin: 0!important;

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
                font-size: xx-large;
                padding: 1.8rem 0;
            }
            p {
                font-size: medium;
            }
            .btns-con{
                display: flex;
                justify-content: space-evenly;
                margin-top: 1rem;
                button {
                    background: none;
                    border: none;
                }
            }
        }

        .right{
            display: flex;
            align-content: space-evenly;
            flex-direction: column;
            justify-content: center;

            img{
                width: 100%;
            }
        }
    }
    @media (max-width: 920px) {

        .content{
            .left{
                h1{ padding: 0 0 0.5rem; }
            }
        }
    };
    @media (max-width: 720px) {
        .eZxlrv {height: 407px;}
        .content{
            .left, .right{
                margin-top: 1rem;
                justify-content: normal;
            }
        }
    };
`;
export default MainContent;
