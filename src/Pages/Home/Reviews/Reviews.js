import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Reviews = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h4 className="fs-3">  <span className="text-warning">REVIEWS</span> FROM CLIENT</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;