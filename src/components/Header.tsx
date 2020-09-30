import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { FaComments, FaDiscord, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import {IconContext} from "react-icons"

import './../css/header.css';


class Header extends React.Component{
    render(){
        return (
            <Navbar variant="dark" fixed="top" expand="lg">
                <img className='header-logo' alt='test' src={require('./../images/vrp_logo_test.png')}></img>
                <Navbar.Brand style={{WebkitTextStroke: "2px #bbb", color: "black", marginTop: "-15px", marginLeft: "20px", marginRight: "50px",fontSize: "3rem", fontFamily: "pricedown"}} href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{minHeight: "50px"}}>
                    <Nav className="mr-auto" style={{minHeight: "50px", lineHeight: "50px", verticalAlign: 'middle', alignContent: "left"}}>
                        <IconContext.Provider value={{ size: "1.5rem", className: "icon icon-forum", style: { verticalAlign: 'middle', fontSize: "1rem" }  }}>
                            <Nav.Link className="link" href=""><FaComments />  Forum</Nav.Link>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "1.5rem", className: "icon icon-discord", style: { verticalAlign: 'middle', fontSize: "1rem" }  }}>
                            <Nav.Link className="link" href=""><FaDiscord />  Discord</Nav.Link>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "1.5rem", className: "icon icon-facebook", style: { verticalAlign: 'middle', fontSize: "1rem" }  }}>
                            <Nav.Link className="link" href=""><FaFacebookF />  Facebook</Nav.Link>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "1.5rem", className: "icon icon-youtube", style: { verticalAlign: 'middle', fontSize: "1rem" }  }}>
                            <Nav.Link className="link" href=""><FaYoutube />  Youtube</Nav.Link>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "1.5rem", className: "icon icon-youtube", style: { verticalAlign: 'middle', fontSize: "1rem" }  }}>
                            <Nav.Link className="link" href=""><FaInstagram />  Instagram</Nav.Link>
                        </IconContext.Provider>
                        
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        );
    }
};

export default Header;