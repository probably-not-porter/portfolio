import React from 'react';
import { Navbar, Image, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import { Parallax, Background } from 'react-parallax';

import './../css/content.css';

class Content extends React.Component{
    render(){
        return (
            <div className='parallax-container'>
                <Parallax
                    blur={3}
                    bgImage={require('./../images/image.jpg')}
                    bgImageAlt="the cat"
                    strength={500}
                    className='layer1'
                >
                    Put some text content here - even an empty div with fixed dimensions to have a height
                    for the parallax.
                    <div style={{ height: '200px' }} />
                </Parallax>
                <Parallax
                    blur={3}
                    bgImage={require('./../images/image.jpg')}
                    bgImageAlt="the cat"
                    strength={500}
                    className='layer2'
                >
                    Put some text content here - even an empty div with fixed dimensions to have a height
                    for the parallax.
                    <div style={{ height: '200px' }} />
                </Parallax>
            </div>
        );
    }
};

export default Content;