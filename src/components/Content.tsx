import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel'

import './../css/content.css';

import Image1 from './../images/image1-min.png';
import Image2 from './../images/image2-min.png';
import Image3 from './../images/image3-min.png';
import Image4 from './../images/image4-min.png';
import Image5 from './../images/image5-min.png';
import Image6 from './../images/image6-min.png';
import Image7 from './../images/image7-min.png';
import Image8 from './../images/image8-min.png';
import Image9 from './../images/image9-min.png';

class Content extends React.Component{
    
    render(){
        return (
            <Carousel interval={5000} >
                <Carousel.Item style={{ height: "100vh" }}>
                    <img
                        className="d-block w-100"
                        src={Image1}
                        alt="First slide"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <img
                        className="d-block w-100"
                        src={Image2}
                        alt="Second slide"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <img
                        className="d-block w-100"
                        src={Image3}
                        alt="Third slide"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <img
                        className="d-block w-100"
                        src={Image4}
                        alt="Fourth slide"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />

                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <img
                        className="d-block w-100"
                        src={Image5}
                        alt="Fifth slide"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />

                    <Carousel.Caption>
                        <h3>Fifth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <img
                        className="d-block w-100"
                        src={Image6}
                        alt="Sixth slide"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />

                    <Carousel.Caption>
                        <h3>Sixth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <img
                        className="d-block w-100"
                        src={Image7}
                        alt="Seventh slide"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />

                    <Carousel.Caption>
                        <h3>Seventh slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <img
                        className="d-block w-100"
                        src={Image8}
                        alt="Eighth slide"
                        style={{ height: "100vh", objectFit: "cover" }}
                    />

                    <Carousel.Caption>
                        <h3>Eighth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "100vh"}}>
                    <img
                        className="d-block w-100"
                        src={Image9}
                        alt="Ninth slide"
                        style={{ height: "100vh", objectFit: "cover" }}
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