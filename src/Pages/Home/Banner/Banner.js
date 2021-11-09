import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner-bg">
            <Container className="py-5">
                <Row className="pt-5 d-flex justify-content-end">
                    < Col className="text-white pt-5 text-start" md={6}>
                        <h1 className="fs-1 fw-bold ">BEST CYCLING EXPERIENCE</h1>

                        <p className="fw-light fs-5 mt-3">BECOME THE WORLD LEADER ON THE INTERNET FOR THE SPORT OF CYCLING</p>
                        <p> <Button variant="dark" className="fs-4 my-2"> Shop now</Button></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;