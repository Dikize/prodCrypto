import React from 'react';
import styled from 'styled-components';
import data from '../data';
// import { Grid } from "@material-ui/core";
// import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//     cardHome: {
//         margin: '0 auto',
//         display: 'flex',
//         alignItems: 'center',
//         flexDirection: 'column',
//         background: 'rgba(255, 255, 255, 0.15)',
//         boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
//         backdropFilter: 'blur(8.5px)',
//         borderRadius: '10px',
//         color: '#ffffff',
//         textTransform: 'uppercase',
//         letterSpacing: '0.4rem',
//         width: '100%',
//         transition: 'all 1s',
//         '&:hover': {
//             transform: 'translateY(-20px)',
//         },

//         [theme.breakpoints.down('sm')]: {
//             width: '90%',
//         },
//         [theme.breakpoints.down('xs')]: {
//             width: '95%'
//         },
//     },
//     Tokenomics: {
//         marginBottom: '3rem',
//         justifyContent: 'space-evenly',
//         // [theme.breakpoints.down('sm')]: {
//         //     flexDirection: 'column-reverse',
//         // },
//     },
//     minicheems: {
//         textAlign: "center",
//         width: "100%",

//         [theme.breakpoints.down('sm')]: {
//             marginTop: '134px',
//         },
//     }
// }));

const Theme = createTheme({
    palette: {
    primary: {
        main: "#fff",
    },
    type: "dark",
    },
});

function SellerCard() {
    // const classes = useStyles();

    // const TelegramBackground = "#16BFFD";
    // const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

    return (
        <ThemeProvider theme={Theme}>
            <SellerCardStyled>
                {
                    data.map((item) =>{
                        return (
                            <div key={item.id} className="SellerCard">
                                <div className="number">
                                    <p>0 {item.id}</p>
                                </div>
                                <div className="profile">
                                    <img src={item.image} alt="" />
                                    <div className="text">
                                        <h4>{item.name}</h4>
                                        <p>{item.currency}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </SellerCardStyled>
        </ThemeProvider>

    )
}

const SellerCardStyled = styled.div`
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.03);
    transition: all .4s ease-in-out;
    &:hover{
        transform: translateY(-20px);
    }
    .SellerCard{
        display: flex;
        align-items: center;
        padding: 1.5rem 1rem;
        .number{
            padding-right: 1rem;
            font-size: 1.6rem;
            opacity: 0.5;
            p{
                font-weight: 700;
            }
        }
        .profile{
            display: flex;
            img{
                width: 70px;
                height: 70px;
                object-fit: cover;
                border-radius: 50%;
                margin-right: 1rem;
                border: 2px solid #395FF6;
            }

            .text{
                display: flex;
                flex-direction: column;
                justify-content: center;
                h4{
                    font-weight: 500;
                }
                p{
                    padding-top: .5rem;
                    opacity: 0.5;
                }
            }
        }
    }
`;

export default SellerCard;
