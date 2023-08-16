import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import windowframe from "../assets/netscape900.png";
import windowframe1 from "../assets/netscape730.png";

function Windowmint(){
    return (
        <>
            <Box
            maxWidth='md'
            sx={{
                display: 'flex',
                background: 'black',
                zIndex: '4',
                maxWidth: '900px',
                maxHeight: '900px',
                height: '100%',
                width: '100%',
                whiteSpace: 'nowrap',
                position: 'absolute',
            
            }}
            >

            </Box>
        </>
    )
}
export default Windowmint;