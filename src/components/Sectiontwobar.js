import * as React from "react";
import Button from '@mui/material/Button';
import { Grid,Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import officebg from "../assets/office.png"
import sweatshop from "../assets/sweatshop.png"
import Imagebg from "./Imagegrid.js"


function Mintbar(props) {
    return (
        <>
            <Container className="mintbar-container" fluid
            sx={{
                border:'1px solid black',
                padding: '3rem',
            }}> 
                <Container>Mint Info</Container>
            </Container>
        </>
    )
}
export default Mintbar;