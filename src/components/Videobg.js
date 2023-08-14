import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import tvstatic  from "../assets/tv-static.gif"
import windowframe from "../assets/netscape900.png";
import VideoPlayer from './Videoplayer';
import video from "./videosrc.mp4"
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
            backgroundImage: `url(${windowframe})`,
            minHeight:'700px',
            maxHeight:'795px',
            height: '100%',
            width: '100%',
            border: 'black solid 1px',
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