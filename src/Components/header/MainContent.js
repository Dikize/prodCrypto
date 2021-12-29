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
    height: 100%;
    width: 100%;
    margin: 0!important;
    .content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        width: 80%;
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
