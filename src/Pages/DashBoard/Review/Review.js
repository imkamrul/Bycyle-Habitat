import React, { useState } from 'react';
import { Container, Col, Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Row } from 'react-bootstrap';
import axios from 'axios';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [showReviewModal, setReviewModal] = useState(false);
    const [newReview, setNewReview] = useState({})
    const handleReviewModelClose = () => setReviewModal(false);
    const handleReviewModelShow = () => setReviewModal(true);
    const handelAddReview = data => {
        console.log(data)
        reset();
        setNewReview(data)
        handleReviewModelShow()
    };
    const handleReviewsToServer = () => {
        handleReviewModelClose()
        console.log(newReview)
        axios.post('https://obscure-depths-70319.herokuapp.com/reviews', newReview)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Congrats Your review has been added successfully.")
                }
            })
    }
    return (
        <Container className="py-5">
            <h4 className="fs-3 fw-light">Add a Review </h4>
            <Row className="g-0 d-flex justify-content-center">
                <Col md={4}>
                    <form onSubmit={handleSubmit(handelAddReview)} className="dashboard-from">

                        <input placeholder="Full Name" type="text" {...register("name", { required: true })} />
                        <input placeholder="Photo" type="text"{...register("img", { required: true })} />
                        <input placeholder="Rating" type="number"{...register("rating", { required: true, min: "0", max: "5" })} />

                        <textarea placeholder="Description" type="text" {...register("description", { required: true })} />

                        <Button type="submit" variant="dark">Add Review</Button>
                    </form>
                </Col>
            </Row>
            <Modal show={showReviewModal} onHide={handleReviewModelClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Hello {user?.displayName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to add <span className="fw-bold">{newReview?.name}</span> in Reviews  ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleReviewModelClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleReviewsToServer}> Yes </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Review;