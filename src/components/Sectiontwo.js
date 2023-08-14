import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import officebg from "../assets/office.png"
import sweatshop from "../assets/sweatshop.png"
import scrollbg from "../assets/frescobg/scroll1.png"
import scrollbg1 from "../assets/frescobg/scroll2.png"

const images= importAll(require.context('../assets/frescobg',true))

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
            backgroundImage: `url(${scrollbg})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            height:"400px"}}
            
            ></Container>
            <Container
            component="div"
            maxWidth='false'
            sx={{
            zIndex: '1',
            animation: `${slideLeft} 10s linear infinite `,
            backgroundImage: `url(${scrollbg1})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            height:"400px"}}
            
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
function importAll(r){
    return r.keys().map(r);
}

export default SectionTwoBg;