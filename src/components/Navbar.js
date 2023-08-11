import React, {useState,useEffect} from 'react';
//import { Button } from './Button';
import twitterLogo from '../assets/logo-black.png'
import telegramLogo from '../assets/Telegram_logo.png'
import fresco150 from '../assets/fresco150.png'
import discordLogo from '../assets/discord-mark-black.png'
import openseaLogo from '../assets/opensea-logo.png'
import { Link } from 'react-router-dom';
import {Container, Nav, Navbar,NavbarBrand,NavItem,NavLink} from 'reactstrap';
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
            <header >
                <Container className ="header-container" fluid>
                    <Container className="title-container">
                        <img className="fresco-head" src={fresco150} alt="logo"></img>Fresco Corp's Pledge
                    </Container>
                    <Nav className="ms-auto">
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
                    </Nav>
                </Container>
            </header>
        </>
    )
}

export default HeaderNavbar;