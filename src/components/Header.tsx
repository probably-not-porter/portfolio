import React from 'react';
import { BrowserRouter as Router, RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaComments, FaDiscord, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import {IconContext} from "react-icons";
import { createBrowserHistory } from 'history';

import './../css/header.css';


class Header extends React.Component{
    render(){
        return (
            <Router>
                <Navbar variant="dark" fixed="top" expand="lg">
                    <Navbar.Brand style={{WebkitTextStroke: "2px #bbb", color: "black", marginTop: "-20px", marginBottom: "-10px", marginLeft: "20px", marginRight: "50px",fontSize: "3rem", fontFamily: "pricedown"}} href="/">XGC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" style={{lineHeight: "50px", verticalAlign: 'middle', alignContent: "left"}}>
                                <Nav.Link className="link" href="/">Home</Nav.Link>
                                
                                <NavDropdown title="Minecraft" id="nav-dropdown">
                                    <NavDropdown.Item href="/mc-wiki">Wiki</NavDropdown.Item>
                                    <NavDropdown.Item href="/mc-map">Map</NavDropdown.Item>
                                    <NavDropdown.Item href="/mc-perks">Perk Store</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="GTA V" id="nav-dropdown">
                                    <NavDropdown.Item href="/gta-wiki">Wiki</NavDropdown.Item>
                                    <NavDropdown.Item href="/gta-forum">Forum</NavDropdown.Item>
                                    <NavDropdown.Item href="/gta-perks">Perk Store</NavDropdown.Item>
                                </NavDropdown>
                                
                                

                                <Nav.Link className="link" href="/discord">Discord</Nav.Link>

                                <Nav.Link className="link" href="">Facebook</Nav.Link>

                                <Nav.Link className="link" href="">Youtube</Nav.Link>

                                <Nav.Link className="link" href="">Instagram</Nav.Link>
                                    
                            </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </Router>
        );
    }
};
export default Header
