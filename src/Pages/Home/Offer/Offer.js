import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import cycle1 from '../../../img/cycle1.png'
import cycle2 from '../../../img/cycle2.png'
import cycle3 from '../../../img/cycle3.png'
const Offer = () => {
    return (
        <Container className="my-5">
            <Row className="pt-3">
                <Col md={4} className="d-flex  text-start align-items-center">
                    <div >
                        <h5 className="text-muted fs-4">For Summer Ride</h5>
                        <h1> <span className="text-muted">SALE UP</span> 40%</h1>
                        <p className="mb-1"> <span><i className="far fa-check-circle text-warning fs-5 me-2"></i></span> With full custom accessories</p>
                        <p className="mb-1"> <span><i className="far fa-check-circle text-warning fs-5 me-2"></i></span>  Power booster gamming GPS support</p>
                        <p className="mb-1"> <span><i className="far fa-check-circle text-warning fs-5 me-2"></i></span>  Tube less tyre for batter riding</p>
                        <p className="mb-1"> <span><i className="far fa-check-circle text-warning fs-5 me-2"></i></span>  Capable strong tire & metal body</p>
                    </div>
                </Col>
                <Col md={8} className="bg-light">
                    <Carousel variant="dark">
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100 p-5"
                                src={cycle1}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100 p-5"
                                src={cycle2}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 p-5"
                                src={cycle3}
                                alt="Third slide"

                            />

                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default Offer;