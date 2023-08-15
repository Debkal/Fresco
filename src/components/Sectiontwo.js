import * as React from "react";
import Button from '@mui/material/Button';
import { Grid,Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import officebg from "../assets/office.png"
import sweatshop from "../assets/sweatshop.png"
import scrollbg from "../assets/frescobg/scroll1.png"
import scrollbg1 from "../assets/frescobg/scroll2.png"
import Imagebg from "./Imagegrid.js"
import { Row } from "reactstrap";


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
            maxHeight: '1800px',
            zIndex: '1',
            animation: `${slideLeft} 10s linear infinite `,
            }}>
            <Grid maxWidth='false' container space={0} direction='row' wrap='nowrap'
            >
                <Grid container>
                    <Innergrid></Innergrid>
                </Grid>
                <Grid container >
                    <Innergrid></Innergrid>
                </Grid>
                <Grid container >
                    <Innergrid></Innergrid>
                </Grid>
                <Grid container>
                    <Innergrid></Innergrid>
                </Grid>
                <Grid container>
                    <Innergrid></Innergrid>
                </Grid>
                <Grid container>
                    <Innergrid></Innergrid>
                </Grid>
            </Grid>
            </Container>
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
function Innergrid() {
    return (
        <>
            <Grid container direction='column' >
                <Imagebg></Imagebg>
            </Grid>
            <Grid container direction='column'>
                <Imagebg></Imagebg>
            </Grid>
            <Grid container direction='column'>
                <Imagebg></Imagebg>
            </Grid>
            <Grid container direction='column'>
                <Imagebg></Imagebg>
            </Grid>
            <Grid container direction='column'>
                <Imagebg></Imagebg>
            </Grid>

        </>
    )
}

export default SectionTwoBg;

/*component="div"
maxWidth='false'
sx={{
display:'grid',
gridTemplateColumns:'auto auto auto auto auto auto auto auto',
zIndex: '1',
animation: `${slideLeft} 10s linear infinite `,
backgroundImage: (`url(${images[0]})`,`url(${images[1]})`),
backgroundRepeat: "repeat-x",
height:"200px",
objectFit: 'cover'}} */