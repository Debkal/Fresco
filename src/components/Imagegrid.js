import * as React from "react";
import { styled } from "@mui/material";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import officebg from "../assets/office.png"
import sweatshop from "../assets/sweatshop.png"
import scrollbg from "../assets/frescobg/scroll1.png"
import scrollbg1 from "../assets/frescobg/scroll2.png"
const images= importAll(require.context('../assets/frescobg',true))

    
function Imagebg() {
    
    const Imagestyle = styled(Paper)({
        objectFit: 'cover',
        minHeight:'200px',
        minWidth:'200px',
        zIndex:'3',
        maxWidth:'200px',
        maxHeight: '200px',
        backgroundImage: `url(${images[1]})`
    })
    
    return (
        <>
            <Imagestyle></Imagestyle>
        </>
    )
}

function importAll(r){
    return r.keys().map(r);
}
function randomNumber(){

}

export default Imagebg;