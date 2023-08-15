import * as React from "react";
import Button from '@mui/material/Button';
import { Grid,Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import officebg from "../assets/office.png"
import sweatshop from "../assets/sweatshop.png"
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
    const slide = keyframes `
    0%    {transform: translate(-15%)}
    100% {transform: translate( 15%)}
    }`
    const slide1 = keyframes `
    0% {transform: translate(15%)}
    100% {transform: translate(-15%)}` 
    const slideAround = keyframes `
    0% {
        grid-template-columns: 70% 1fr;
        grid-template-rows: var(--rect) 1fr;
      }
      25% {
        grid-template-columns: 20% 1fr;
        grid-template-rows: 100% 1fr;
      }
      50% {
        grid-template-columns: 50% 1fr;
        grid-template-rows: var(--rect) 1fr;
      }
      75% {
        grid-template-columns: var(--rect) 1fr;
        grid-template-rows: 70% 1fr;
      }
       100% {
        grid-template-columns: 100% 1fr;
        grid-template-rows: 100% 1fr;
      }
    }
    `;


    return (
        <>
            <Container
            component="div"
            maxWidth='false'
            >
            <Grid maxWidth='false' container space={0} direction='column' wrap='nowrap'
            overflow='hidden' animations={true}
            sx={{
                
                justifyContent: 'center',
                alignContent: 'center',
                maxHeight: '1800px',
                zIndex: '1',
                backgroundRepeat: 'repeat-x',
                
                }}
            >
                <Grid container sx={{
                    animation: `${slide} 7s infinite alternate linear  `
                }}
                >
                    <Innergrid></Innergrid>
                </Grid>
                <Grid container sx={{
                    animation: `${slide1} 10s infinite alternate linear `
                }}>
                    <Innergrid></Innergrid>
                </Grid>
                <Grid container sx={{
                    animation: `${slide} 7s infinite alternate linear  `
                }}>
                    <Innergrid></Innergrid>
                </Grid>
                <Grid container sx={{
                    animation: `${slide1} 10s infinite alternate linear  `
                }}>
                    <Innergrid></Innergrid>
                </Grid>
                <Grid container sx={{
                    animation: `${slide} 7s infinite alternate linear  `
                }}>
                    <Innergrid></Innergrid>
                </Grid>
                
            </Grid>
            </Container>
        </>

        
    )
}
function Innergrid() {
    return (
        <>
            <Grid container height='300px' width='300px' objectFit='cover' direction='row' wrap='nowrap' 
            overflow='hidden'>
                <Imagebg></Imagebg>
            </Grid>
            <Grid container height='300px' width='300px' objectFit='cover' direction='row' wrap='nowrap'>
                <Imagebg></Imagebg>
            </Grid>
            <Grid container height='300px' width='300px' objectFit='cover' direction='row' wrap='nowrap'>
                <Imagebg></Imagebg>
            </Grid>
            <Grid container height='300px' width='300px' objectFit='cover' direction='row' wrap='nowrap'>
                <Imagebg></Imagebg>
            </Grid>
            <Grid container height='300px' width='300px' objectFit='cover' direction='row' wrap='nowrap'>
                <Imagebg></Imagebg>
            </Grid>
            <Grid container height='300px' width='300px' objectFit='cover' direction='row' wrap='nowrap'>
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