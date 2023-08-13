import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import officebg from "../assets/office.png"
import sweatshop from "../assets/sweatshop.png"
import fresco150 from "../assets/fresco150.png"

function SectionTwoBg(){
    const slideLeft = keyframes `
    from { background-position: 0 0;}
    to {background-position: -300px 0px;}
        }
    `;
    const slideRight = keyframes `
    from { background-position: 0 0;}
    to {background-position: 300px 0px;}
        }
    `;
    return (
        <>
        
            <Container
            component="div"
            maxWidth='false'
            sx={{
            zIndex: '1',
            animation: `${slideLeft} 10s linear infinite `,
            backgroundImage: `url(${officebg})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            height:"800px"}}
            
            ></Container>
            <Container
            component="div"
            maxWidth='false'
            sx={{
            zIndex: '1',
            animation: `${slideRight} 9s linear infinite `,
            backgroundImage: `url(${sweatshop})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            height: "80vh",
            width: "100%"}}
            ></Container>
        </>

        
    )
}

export default SectionTwoBg;