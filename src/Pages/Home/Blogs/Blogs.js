import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import blog1 from '../../../img/blog1.png'
import blog2 from '../../../img/blog2.png'
import blog3 from '../../../img/blog3.png'

const Blogs = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h4 className="fs-3">  <span className="text-warning">FROM</span>  BLOGS</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </Col>
            </Row>
            <Row className="my-4 text-start">
                <Col md={4} className="mb-2">
                    <Image src={blog1} rounded fluid />
                    <h4 className="mt-3">Claritas Est Etiam Processus Dynamicus</h4>
                    <p className="fw-light">Rakib Hossain | jan 17 - 2021 | 12 comments</p>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound...</p>
                    <Button variant="outline-dark" className="my-2">View More</Button>
                </Col>
                <Col md={4} className="mb-2">

                    <h4 className="mt-3">Claritas Est Etiam Processus Dynamicus</h4>
                    <p className="fw-light">Rakib Hossain | jan 17 - 2021 | 12 comments</p>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound...</p>
                    <Button variant="outline-dark" className="my-2">View More</Button>
                    <Image src={blog2} rounded fluid />
                </Col>
                <Col md={4} className="mb-2">
                    <Image src={blog3} rounded fluid />
                    <h4 className="mt-3">Claritas Est Etiam Processus Dynamicus</h4>
                    <p className="fw-light">Rakib Hossain | jan 17 - 2021 | 12 comments</p>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound...</p>
                    <Button variant="outline-dark" className="my-2">View More</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;