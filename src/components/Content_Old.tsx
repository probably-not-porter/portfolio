import React from 'react';
import { Navbar, Image, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import { Parallax, Background } from 'react-parallax';

import './../css/content.css';

class Content extends React.Component{
    render(){
        return (
            <div className='parallax-container'>
                <Parallax bgImage={require('./../images/image1.jpg')} strength={500}>
                    <div style={{ height: '100vh', width: '100%' }}>
                        <div className="textLayer" >Text 1 goes here</div>
                    </div>
                </Parallax>
                <br></br>
                <Parallax bgImage={require('./../images/image2.jpg')} strength={500}>
                    <div style={{ height: '100vh', width: '100%' }}>
                        <div className="textLayer" >Text 2 goes here</div>
                    </div>
                </Parallax>
                <br></br>
                <Parallax bgImage={require('./../images/image3.jpg')} strength={500}>
                    <div style={{ height: '100vh', width: '100%' }}>
                        <div className="textLayer" >Text 3 goes here</div>
                    </div>
                </Parallax>
            </div>
        );
    }
};

export default Content;