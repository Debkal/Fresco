import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import tvstatic4 from "../assets/guy-flow.gif"
import video from "./videosrc.mp4"
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import './Videoplayer.css'


function VideoPlayer() {

    return (
        <>
            <Container className='videoWrapper' fixed={true}>
                <ReactPlayer width='100%' minWidth='727px' maxWidth='1000px' height ='auto' maxHeight='800px' className ='react-player'
                url={`${video}`}
                config= {{
                    file: {
                        controls:true,
                    }
                }
                }></ReactPlayer>
            </Container>
        </>
    )
    
}
export default VideoPlayer;