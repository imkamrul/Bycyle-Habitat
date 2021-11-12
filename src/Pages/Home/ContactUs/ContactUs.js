import React from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col className="my-3">
                    <h4 className="fs-3"><span className="text-warning">CONTACT</span> WITH US</h4>


                </Col>
            </Row>
            <Row>
                <Col md={6} className="text-start">
                    <h4>Information</h4>
                    <p>20 years ago, Mr. Chiang Kuang Tsan was the coach of Taiwan National Team. From his own experience, he thought there should be a new development in the bicycle industry. So in 1990 he decided to build up his own brand - CKT (Carbon Knowledge Team). Our Company always focuses on engineering and technology. And in recent years, CKT has devoted itself to products development, which emphasizes stronger materials, greater functions and better uses.</p>
                </Col>
                <Col md={6} className="text-start">
                    <Form>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control placeholder="Full name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Email" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control placeholder="Subject" />
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col>
                                <Form.Control as="textarea" placeholder="Your message" />
                            </Col>

                        </Row>
                        <Button variant="dark" className="my-3">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;