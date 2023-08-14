import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import windowframe from "../assets/netscape900.png";
import windowframe1 from "../assets/netscape730.png";
import VideoPlayer from './Videoplayer';
import ReactPlayer from 'react-player';

function VideoBg() {

    return (
        <>
        
            <Box 
            maxWidth='md'
            sx={{
            display:'flex',
            justifyContent: 'center',
            marginTop: '2.5rem',
            position: 'absolute',
            backgroundImage: `url(${windowframe1})`,
            minHeight:'730px',
            maxHeight:'795px',
            maxWidth:'730px',
            height: '100%',
            width: '100%',
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