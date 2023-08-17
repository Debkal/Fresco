import React, {useState,useEffect} from 'react';
//import { Button } from './Button';
import twitterLogo from '../assets/logo-black.png'
import telegramLogo from '../assets/Telegram_logo.png'
import fresco150 from '../assets/fresco150.png'
import discordLogo from '../assets/discord-mark-black.png'
import openseaLogo from '../assets/opensea-logo.png'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Container} from '@mui/material';
import './Navbar.css';

function HeaderNavbar() {
    /*const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => { setClick(!click); };
    const closeMobileMenu = () => { setClick(false)};

    const showButton = () => {};
    */

    return (
        <>
            <Container className='header' maxWidth="false"
            sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                position:"relative",
                padding:"2rem",
                flexShrink: "2",
                flexwrap: "wrap",
            }}
            >
                
                    <div className="title-container" >
                        Fresco Corporation
                    </div>
                    
                        <div className='navbar-container'>
                            <ul className="nav-menu">
                                <li>
                                    <Link>
                                    <div className="nav-icon">
                                        <img className="img-icon" src={twitterLogo} alt ="twitter"/>
                                    </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                    <div className ="nav-icon">
                                        <img className="img-icon" src={telegramLogo} alt="telegram"></img>
                                    </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                    <div className= "nav-icon">
                                        <img className= "img-icon" src={discordLogo} alt="discord"></img>
                                    </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                    <div className='nav-icon'>
                                        <img className= "img-icon" src={openseaLogo} alt='MarketPlace'></img>
                                    </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    
            </Container>
        </>
    )
}

export default HeaderNavbar;