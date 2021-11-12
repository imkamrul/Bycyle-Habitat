import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import blog1 from '../../../img/blog1.png'
import blog2 from '../../../img/blog2.png'
import blog3 from '../../../img/blog3.png'

const Blogs = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h4 className="fs-3 my-3">FROM  <span className="text-warning">BLOGS</span></h4>

                </Col>
            </Row>
            <Row className="my-4 text-start">
                <Col md={4} className="mb-2">
                    <Image src={blog1} rounded fluid />
                    <h4 className="mt-3">Bike Overnights: Riding with Intention</h4>
                    <p className="fw-light">Kamrul Hasan | jan 17 - 2021 | 12 comments</p>
                    <p>“Cycling is a personal journey,” Jess says. “I’m testing my strength and my limits. But it’s also important to understand the spiritual connection between myself and the land that I’m traveling through. I want to feel grounded with my journey while I’m there.”</p>
                    <Button variant="outline-dark" className="my-2">View More</Button>
                </Col>
                <Col md={4} className="mb-2">

                    <h4 className="mt-3"> Lopez Island Bike Overnight</h4>
                    <p className="fw-light">Mehedi Ahmed | feb 27 - 2021 | 19 comments</p>
                    <p>On Bike Your Park Day this year, a group of entirely trans, women, intersex, and nonbinary riders traversed from Seattle to Lopez Island for a weekend of beginner bike camping. Marley Blonsky of All Bodies on Bikes organized and led the event while Adventure Cycling’s fledgling Bike Overnights program assisted .</p>
                    <Button variant="outline-dark" className="my-2">View More</Button>
                    <Image src={blog2} rounded fluid />
                </Col>
                <Col md={4} className="mb-2">
                    <Image src={blog3} rounded fluid />
                    <h4 className="mt-3">Henry Gold: Bike Tour Neoteric Adventure</h4>
                    <p className="fw-light">Rakib Hossain | oct 30 - 2021 | 90 comments</p>
                    <p>A documentary filmmaker, bikes-not-cars evangelist, and founder of Canada-based, Africa-focused Canadian Physicians for Aid and Relief — a nongovernmental organization (NGO) that worked all over Africa — Gold’s harebrained idea was to organize .</p>
                    <Button variant="outline-dark" className="my-2">View More</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;