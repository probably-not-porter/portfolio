import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { FaComments, FaDiscord, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import {IconContext} from "react-icons"

import './../css/header.css';


class Header extends React.Component{
    render(){
        return (
            <Navbar variant="dark" fixed="top" expand="lg">
                <Navbar.Brand style={{WebkitTextStroke: "2px #bbb", color: "black", marginTop: "-20px", marginBottom: "-10px", marginLeft: "20px", marginRight: "50px",fontSize: "3rem", fontFamily: "pricedown"}} href="#home">XGC</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{lineHeight: "50px", verticalAlign: 'middle', alignContent: "left"}}>
                            <Nav.Link className="link" href="">Forum</Nav.Link>

                            <Nav.Link className="link" href="">Discord</Nav.Link>

                            <Nav.Link className="link" href="">Facebook</Nav.Link>
                            <Nav.Link className="link" href="">Youtube</Nav.Link>

                            <Nav.Link className="link" href="">Instagram</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        );
    }
};

export default Header;