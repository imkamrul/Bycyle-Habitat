import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Servicing = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h4 className="fs-3 my-3">  <span className="text-warning">WHY</span> CHOOSE US</h4>

                </Col>
            </Row>

            <Row xs={1} md={3} className="g-4 text-start mt-4">


                <Col >
                    <Card className="border-0 shadow-lg mb-2">
                        <Card.Body>
                            <i className="fas fa-tools fs-1 mb-2"></i>
                            <Card.Title>Strong Service</Card.Title>
                            <Card.Text>
                                This strong service will include brake & gear adjustment, general lubrication and a tyre inflation check. A full bycycle service is only needed if your bycycle hasn't been out.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 shadow-lg mb-2">
                        <Card.Body>
                            <i className="fas fa-redo fs-1 mb-2"></i>
                            <Card.Title>Money back guarantee</Card.Title>
                            <Card.Text>
                                A money-back guarantee, also known as a satisfaction guarantee, is essentially a simple guarantee that, if a buyer is not satisfied with a product or service, a refund will be made.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 shadow-lg mb-2">
                        <Card.Body>
                            <i className="far fa-life-ring fs-1 mb-2"></i>
                            <Card.Title>Support provide</Card.Title>
                            <Card.Text>
                                Sales support systems were developed to assist the sales force in improving productivity. This improvement in productivity was through continuous.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 shadow-lg mb-2">
                        <Card.Body>
                            <i className="fas fa-home fs-1 mb-2"></i>
                            <Card.Title>Home Service</Card.Title>
                            <Card.Text>
                                FIX MY CYCLE is a smart alternative to the traditional bicycle workshop. If you have purchased a bike from one of the many internet retailers or perhaps.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 shadow-lg mb-2">
                        <Card.Body>
                            <i className="fas fa-hammer fs-1 mb-2"></i>
                            <Card.Title>Accessories available</Card.Title>
                            <Card.Text>
                                Cycle accessories from the primary perspective of improving rider safety, accessories can also improve a rider’s comfort, make riding more convenient
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 shadow-lg mb-2">
                        <Card.Body>
                            <i className="fas fa-map-marked-alt fs-1 mb-2"></i>
                            <Card.Title>GPS tracker</Card.Title>
                            <Card.Text>
                                Most trackers consist of an accessory, which is attached to the cycle, and a phone app. With the app, the owner is able to trace the cycle - even using it to alert the police.
                            </Card.Text>

                        </Card.Body>
                    </Card>





                </Col>
            </Row>

        </Container >
    );
};

export default Servicing;