import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import windowframe from "../assets/netscape900.png";
import windowframe1 from "../assets/netscape730.png";
import VideoPlayer from './Videoplayer';
import ReactPlayer from 'react-player';

function VideoBg() {
    const boxStyle = {
        '@media (min-width:600px)':{
            width: '80%'
        }
    }
    return (
        <>
        
            <Box 
            maxWidth='md'
            sx={{
            top: {
                xs:'35%',
                sm:'30%',
                md:'20%',
            },
            display:'flex',
            justifyContent: 'center',
            marginTop: '2.5rem',
            position: 'absolute',
            backgroundImage: `url(${windowframe1})`,
            backgroundSize: 'contain',
            minHeight: {
                xs:'378px',
                sm:'550px',
                md:'795px',
            },
            maxHeight:'795px',
            maxWidth:'730px',
            objectFit: 'cover',
            height: {
                xs:'10% !important',
                sm:'70%'
            },
            width: {
                xs:'90%',
                sm:'100%',
                md:'80%',
            },
            border: 'black solid 1px',
            borderRadius: '.2em',
            zIndex: '2',
            overflow: 'visible',
            
            }}
            >
                <VideoPlayer></VideoPlayer>
            </Box>
            
        </>

        
    )
}

export default VideoBg;