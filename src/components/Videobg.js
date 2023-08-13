import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import tvstatic  from "../assets/tv-static.gif"
import windowframe from "../assets/netscape.png";

function VideoBg() {

    return (
        <>
        
            <Container
            component="div"
            maxWidth='md'
            sx={{
            backgroundImage: `url(${windowframe})`,
            backgroundPosition: "center",
            height: '800px',
            border: 'black solid 1px'
            }}
            ></Container>
            
        </>

        
    )
}

export default VideoBg;