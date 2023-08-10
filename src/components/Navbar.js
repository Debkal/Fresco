import React, {useState,useEffect} from 'react';
//import { Button } from './Button';
import {ReactComponent as twitterLogo} from '../assets/twitterlogo.svg'
import logo from '../assets/logo-black.png'
import fresco96 from '../assets/fresco96.png'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    /*const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => { setClick(!click); };
    const closeMobileMenu = () => { setClick(false)};

    const showButton = () => {};
    */

    return (
        <>
            <header >
                <div className ="header-container" >
                <img className="img-icon"src={fresco96} alt="logo"></img>Fresco Corp's Pledge
                </div>
                <nav>
                    <div className='navbar-container'>
                        <Link to="/" className="navbar-logo">
                            
                        </Link>
                        <ul className="nav-menu">
                            <li>
                                <Link>
                                <div className="nav-icon">
                                    <img className="img-icon" src={logo} alt ="twitter"/>
                                </div>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                <div className ="nav-icon">
                                    <img src='' alt="telegram"></img>
                                </div>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                <div className= "nav-icon">
                                    <img src='' alt="discord"></img>
                                </div>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                <div className='nav-icon'>
                                    <img src='' alt='MarketPlace'></img>
                                </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;