import * as React from "react";
import { Grid,Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";


const images= importAll(require.context('../assets/frescoslide',true))

function Sectiontwoslide(props){
    
    const slideAround = keyframes `
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-250px * 7));
    }
    `;
    const slideAround1 = keyframes `
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
    `;
    return(
        <>
        
            <Container component="div" maxWidth="false"
            sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative',
                
            }}
            >
                <Container component="div" 
                maxWidth="false"
                sx={{
                    display: 'inline-block',
                    height: "100%",
                    width: "100%",
                    minWidth: "1500px",
                    minHeight: "300px",
                    backgroundImage:`url(${randomNumber(images)})`,
                    backgroundRepeat: 'repeat-x',
                    animation: `${slideAround} 30s linear infinite `
                }}>

                </Container>
                <Container component="div" 
                maxWidth="false"
                sx={{
                    display: 'inline-block',
                    height: "100%",
                    width: "100%",
                    minWidth: "1500px",
                    minHeight: "300px",
                    backgroundImage:`url(${randomNumber(images)})`,
                    backgroundRepeat: 'repeat-x',
                    animation: `${slideAround} 30s infinite linear `
                }}>

                </Container>
                
            </Container>
            
            <Container component="div" maxWidth="false"
            sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative',
                
            }}
            >
                <Container component="div" 
                maxWidth="false"
                sx={{
                    display: 'inline-block',
                    height: "100%",
                    width: "100%",
                    minWidth: "1500px",
                    minHeight: "300px",
                    backgroundImage:`url(${randomNumber(images)})`,
                    backgroundRepeat: 'repeat-x',
                    animation: `${slideAround1} 30s infinite linear`
                }}>

                </Container>
                <Container component="div" 
                maxWidth="false"
                sx={{
                    display: 'inline-block',
                    height: "100%",
                    width: "100%",
                    minWidth: "1500px",
                    minHeight: "300px",
                    backgroundImage:`url(${randomNumber(images)})`,
                    backgroundRepeat: 'repeat-x',
                    animation: `${slideAround1} 30s infinite linear`
                }}>

                </Container>
            </Container>
            <Container component="div" maxWidth="false"
            sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative',
                
            }}
            >
                <Container component="div" 
                maxWidth="false"
                sx={{
                    display: 'inline-block',
                    height: "100%",
                    width: "100%",
                    minWidth: "1500px",
                    minHeight: "300px",
                    backgroundImage:`url(${randomNumber(images)})`,
                    backgroundRepeat: 'repeat-x',
                    animation: `${slideAround} 30s infinite linear`
                }}>

                </Container>
                <Container component="div" 
                maxWidth="false"
                sx={{
                    display: 'inline-block',
                    height: "100%",
                    width: "100%",
                    minWidth: "1500px",
                    minHeight: "300px",
                    backgroundImage:`url(${randomNumber(images)})`,
                    backgroundRepeat: 'repeat-x',
                    animation: `${slideAround} 30s infinite linear`
                }}>

                </Container>
            </Container>
            <Container component="div" maxWidth="false"
            sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative',
                
            }}
            >
                <Container component="div" 
                maxWidth="false"
                sx={{
                    display: 'inline-block',
                    height: "100%",
                    width: "100%",
                    minWidth: "1500px",
                    minHeight: "300px",
                    backgroundImage:`url(${randomNumber(images)})`,
                    backgroundRepeat: 'repeat-x',
                    animation: `${slideAround1} 30s infinite linear`
                }}>

                </Container>
                <Container component="div" 
                maxWidth="false"
                sx={{
                    display: 'inline-block',
                    height: "100%",
                    width: "100%",
                    minWidth: "1500px",
                    minHeight: "300px",
                    backgroundImage:`url(${randomNumber(images)})`,
                    backgroundRepeat: 'repeat-x',
                    animation: `${slideAround1} 30s infinite linear`
                }}>

                </Container>
            </Container>
        
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

export default Sectiontwoslide;