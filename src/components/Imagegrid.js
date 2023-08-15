import * as React from "react";
import { styled } from "@mui/material";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import officebg from "../assets/office.png"
import sweatshop from "../assets/sweatshop.png"

const images= importAll(require.context('../assets/frescobg',true))

    
function Imagebg() {
    
    const Imagestyle = styled(Paper)({
        display:'flex',
        objectFit: 'cover',
        minHeight:'200px',
        minWidth:'200px',
        height:'100%',
        width:'100%',
        zIndex:'3',
        maxWidth:'300px',
        maxHeight: '300px',
        backgroundImage: `url(${randomNumber(images)})`,
        backgroundRepeat: 'repeat-x'
        
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
function randomNumber(array){
    const randomImage = array[Math.floor(Math.random() * array.length)];
    return randomImage;

}

export default Imagebg;