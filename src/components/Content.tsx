import React from 'react';
import { Navbar, Image, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import { Parallax, Background } from 'react-parallax';

import './../css/content.css';

class Content extends React.Component{
    render(){
        return (
            <div className='parallax-container'>
                <Parallax bgImage={require('./../images/image.jpg')} strength={500}>
                    <div style={{ height: 800, width: '100%' }}>
                        <div className="textLayer" >HTML inside the parallax</div>
                    </div>
                </Parallax>
                <Parallax bgImage={require('./../images/image.jpg')} strength={500}>
                    <div style={{ height: 800, width: '100%' }}>
                        <div className="textLayer" >HTML inside the parallax</div>
                    </div>
                </Parallax>
                <Parallax bgImage={require('./../images/image.jpg')} strength={500}>
                    <div style={{ height: 800, width: '100%' }}>
                        <div className="textLayer" >HTML inside the parallax</div>
                    </div>
                </Parallax>
            </div>
        );
    }
};

export default Content;