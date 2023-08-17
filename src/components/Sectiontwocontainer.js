import * as React from "react";
import Button from '@mui/material/Button';
import { Grid,Box,Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import officebg from "../assets/office.png"
import sweatshop from "../assets/sweatshop.png"
import { Row } from "reactstrap";
import Windowmint from "./Mintwindow";
import './Sectiontwocontainer.css'

function SectiontwobgContainer(props) {
    return (
        <>
            <div className="section-two-bg">
                {props.children}</div>
        </>
    )
}

export default SectiontwobgContainer;