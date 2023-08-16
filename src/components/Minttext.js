import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import windowframe from "../assets/netscape900.png";
import windowframe1 from "../assets/netscape730.png";
import Typography from "@mui/material/Typography";

function Textmint() {
    return (
        <>
            <Paper maxWidth='sm'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                margin:'1rem',
                width: '70%',
                maxWidth: '75%',
                maxHeight: '20%',
                minWidth: '450px',
                border: '1px solid black'
            }}>
                <Typography>Mint Info</Typography>
            </Paper>
        </>
    )
}
export default Textmint;