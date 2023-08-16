import React, {useState,useEffect} from 'react';
//import { Button } from './Button';
import twitterLogo from '../assets/logo-black.png'
import telegramLogo from '../assets/Telegram_logo.png'
import fresco150 from '../assets/fresco150.png'
import discordLogo from '../assets/discord-mark-black.png'
import openseaLogo from '../assets/opensea-logo.png'
import { Link } from 'react-router-dom';
import { Box,Container, Paper, Slide } from "@mui/material";
import { Typography } from '@mui/material';


function Foot(){
    return (
    <>
        <Container maxWidth="false"
        sx={{
            
            padding:'1rem',
            width:'100%',
            height:'100%',
            padding: '2rem',
            background: '#343A40',
        }}
        >
            <Typography color="white">
                Copyright © Fresco Corporation 
            </Typography>
        </Container>
    </>
    )
}

export default Foot;