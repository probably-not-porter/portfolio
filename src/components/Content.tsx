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
import Image1 from './../images/image1.png';
import Image2 from './../images/image2.png';
import Image3 from './../images/image3.png';
import Image4 from './../images/image4.png';
import Image5 from './../images/image5.png';
import Image6 from './../images/image6.png';
import Image7 from './../images/image7.png';
import Image8 from './../images/image8.png';
import Image9 from './../images/image9.png';

class Content extends React.Component{
    
    render(){
        return (
            <Carousel interval={5000} pause={false} >
                <Carousel.Item style={{ height: "100vh" }}>
                    <ProgressiveImage
                        preview={Image1Min}
                        src={Image1}
                        render={(src, style) => <img alt="slide image 1" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>New Slide <Badge variant="secondary">New</Badge></h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image2Min}
                        src={Image2}
                        render={(src, style) => <img alt="slide image 2" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>Discord Example Slide</h3>
                        <Button style={{marginBottom: "20px"}} variant="light">Join our Discord</Button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image3Min}
                        src={Image3}
                        render={(src, style) => <img alt="slide image 3" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image4Min}
                        src={Image4}
                        render={(src, style) => <img alt="slide image 4" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image5Min}
                        src={Image5}
                        render={(src, style) => <img alt="slide image 5" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>Fifth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image6Min}
                        src={Image6}
                        render={(src, style) => <img alt="slide image 6" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>Sixth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image7Min}
                        src={Image7}
                        render={(src, style) => <img alt="slide image 7" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>Multiple Button Slide</h3>
                        <Button style={{marginBottom: "20px"}} variant="outline-light">Button 1</Button>{'   '}
                        <Button style={{marginBottom: "20px"}} variant="outline-light">Button 2</Button>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image8Min}
                        src={Image8}
                        render={(src, style) => <img alt="slide image 8" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>Eighth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <ProgressiveImage
                        preview={Image9Min}
                        src={Image9}
                        render={(src, style) => <img alt="slide image 9" src={src} style={{ height: "100vh", objectFit: "cover" }} />}
                    />
                    <Carousel.Caption>
                        <h3>Ninth lide label</h3>
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