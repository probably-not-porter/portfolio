import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import ProgressiveImage from "react-progressive-image-loading";

import './../css/content.css';

// IMAGES //
// lazy load thumbnails
import Image1Min from './../images/image1-min.jpg';
import Image2Min from './../images/image2-min.jpg';
import Image3Min from './../images/image3-min.jpg';
import Image4Min from './../images/image4-min.jpg';
import Image5Min from './../images/image5-min.jpg';
import Image6Min from './../images/image6-min.jpg';
import Image7Min from './../images/image7-min.jpg';
import Image8Min from './../images/image8-min.jpg';
import Image9Min from './../images/image9-min.jpg';

// full sized images (compressed)

// gta

import Image1 from './../images/image1.png';
import Image2 from './../images/image2.png';
import Image3 from './../images/image3.png';
import Image4 from './../images/image4.png';
import Image5 from './../images/image5.png';
import Image6 from './../images/image6.png';
import Image7 from './../images/image7.png';
import Image8 from './../images/image8.png';
import Image9 from './../images/image9.png';

//minecraft

import Image10 from './../images/image10.png';
import Image11 from './../images/image11.png';
import Image12 from './../images/image12.png';

class Content extends React.Component{
    
    render(){
        return (
            <Carousel interval={5000} pause={false} >

                <Carousel.Item style={{ height: "100vh" }}>
                    <ProgressiveImage
                        preview={Image8Min}
                        src={Image8}
                        render={(src, style) => <img alt="slide1" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>GTA V RP Server <Badge variant="secondary">New</Badge></h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image10}
                        src={Image10}
                        render={(src, style) => <img alt="slide2" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>Minecraft Server <Badge variant="secondary">New</Badge></h3>
                        <p><span data-playercounter-ip="51.81.80.168:25565">0</span> player(s) currently online!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image7Min}
                        src={Image7}
                        render={(src, style) => <img alt="slide3" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>Active Discord Community</h3>
                        <Button style={{marginBottom: "20px"}} variant="light">Join our Discord</Button>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image11}
                        src={Image11}
                        render={(src, style) => <img alt="slide4" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>GTA RP Forum</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image3Min}
                        src={Image3}
                        render={(src, style) => <img alt="slide5" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>Free to play</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image12}
                        src={Image12}
                        render={(src, style) => <img alt="slide6" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>Donate to our Project</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
};

export default Content;