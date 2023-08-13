import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import tvstatic  from "../assets/tv-static.gif"
import tvstatic2 from "../assets/tv-static1.gif"
import tvstatic3 from "../assets/static-glitch.gif"
import tvstatic4 from "../assets/guy-flow.gif"
import tvstatic5 from "../assets/blur-static.gif"

function SectionOneBg(){
    
    return (
        <>
        
            <Container
            component="div"
            maxWidth='false'
            sx={{
            backgroundImage: `url(${tvstatic})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            backgroundSize: "cover",
            marginBottom: "3rem",
            height:"90vh",
            border: 'black solid 1px'
            }}
            ></Container>
            
        </>

        
    )
}


export default SectionOneBg;


