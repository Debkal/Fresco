import * as React from "react";
import Button from '@mui/material/Button';
import { Grid,Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import officebg from "../assets/office.png"
import sweatshop from "../assets/sweatshop.png"
import Imagebg from "./Imagegrid.js"
import Typography from "@mui/material/Typography";


function Mintbar(props) {
    return (
        <>
            <Container className="mintbar-container" fluid
            sx={{
                color: "white",
                padding: '2rem',
            }}> 
                <Container>
                    <Typography variant='h2'>
                        Mint Info
                        
                    </Typography>
                </Container>
            </Container>
        </>
    )
}
export default Mintbar;