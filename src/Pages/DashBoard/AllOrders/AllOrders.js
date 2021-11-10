import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './AllOrder.css'
const AllOrders = () => {
    return (
        <div>

            <Container className="py-5 px-5">
                <h1 className="text-center py-2"> All Orders</h1>
                <Row className="heading g-0">
                    <Col md={3} xs={4}><h3 className="mb-0">Name</h3></Col>
                    <Col md={3} xs={4}><h3 className="mb-0">Email</h3></Col>
                    <Col md={2} xs={4}><h3 className="mb-0">Location</h3></Col>
                    <Col md={2} xs={8}><h3 className="mb-0">Status</h3></Col>
                    <Col md={2} xs={4}><h3 className="mb-0 text-center">Action</h3></Col>

                </Row>
                <Row

                    className="user-booking-detail g-0">
                    <Col md={3} ><h5 className="mb-0 mt-2">booking.name</h5></Col>
                    <Col md={3} ><h5 className="mb-0 mt-2">booking.email</h5></Col>
                    <Col md={2} ><h5 className="mb-0 mt-2">booking.event</h5></Col>
                    <Col md={2} ><h5 className="mb-0 mt-2">booking.status </h5></Col>
                    <Col md={2} ><h5 className="mb-0 text-center"><Button variant="outline-dark" className=" ms-3" >Action</Button></h5></Col>

                </Row>
            </Container>
        </div>
    );
};

export default AllOrders;