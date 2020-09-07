import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import {IconContext} from "react-icons"

import './../css/header.css';

class Header extends React.Component{
    render(){
        return (
            <Navbar variant="dark" fixed="top" expand="lg">
                <Navbar.Brand href="#home">XRP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Forum</Nav.Link>
                        <Nav.Link href="#discord">Discord</Nav.Link>
                    </Nav>
                    <Form inline>
                        <IconContext.Provider value={{ className: 'social' }}>
                            <div id="fb-button" >
                                <FaFacebook />
                            </div>
                            <div id="yt-button" >
                                <FaYoutube />
                            </div>
                        </IconContext.Provider>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default Header;