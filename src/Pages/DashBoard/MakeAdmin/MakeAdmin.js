import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
const MakeAdmin = () => {
    const { user, admin } = useAuth();
    console.log(admin)
    const { register, handleSubmit, reset } = useForm();
    const [showAdminModal, setAdminModal] = useState(false);
    const [newAdmin, setNewAdmin] = useState(" ")
    const handleAdminModelClose = () => setAdminModal(false);
    const handleAdminModelShow = () => setAdminModal(true);
    const submitAddAdminFrom = email => {
        console.log(email)
        reset();
        setNewAdmin(email)
        handleAdminModelShow()
    };

    const handleMakeAdmin = () => {
        handleAdminModelClose()
        axios.put(`https://obscure-depths-70319.herokuapp.com/users/${user.email}`, newAdmin)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    alert("New Admin added")
                } else {
                    alert("You have no permission to make anyone admin")
                }
            })
    }
    return (
        <Container className="py-5">
            <h4 className="fs-3 fw-light">Make an Admin </h4>
            <Row className="g-0 d-flex justify-content-center">
                <Col md={4}>
                    <form onSubmit={handleSubmit(submitAddAdminFrom)} className="dashboard-from">

                        <input placeholder="email" type="text" {...register("email", { required: true })} />


                        <Button type="submit" variant="dark">Add Admin</Button>
                    </form>
                </Col>
            </Row>
            <Modal show={showAdminModal} onHide={handleAdminModelClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Hello {user?.displayName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to add <span className="fw-bold">{newAdmin.email}</span> in Admins  ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleAdminModelClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleMakeAdmin}> Yes </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default MakeAdmin;