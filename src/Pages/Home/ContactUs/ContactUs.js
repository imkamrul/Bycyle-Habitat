import React from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h4 className="fs-3"><span className="text-warning">CONTACT</span> WITH US</h4>
                    <p className="fs-5">Leave us your email address and we contact you back</p>

                </Col>
            </Row>
            <Row>
                <Col md={6} className="text-start">
                    <h4>Information</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quo, provident sunt amet ipsam iusto commodi natus saepe, pariatur dolore alias repudiandae vel. Sapiente sint repudiandae sit vero libero mollitia?</p>
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