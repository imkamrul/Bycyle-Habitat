import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Products = () => {
    return (

        <Container className="my-5">
            <Row>
                <Col>
                    <h4 className="fs-3">  <span className="text-warning">FEATURED</span>  PRODUCTS</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.</p>
                </Col>
            </Row>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    );
};

export default Products;