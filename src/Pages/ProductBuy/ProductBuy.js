import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Modal, Row, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useHistory, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useForm } from "react-hook-form";
import './ProductBuy.css'
const ProductBuy = () => {
    const { user, admin } = useAuth();
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState([]);
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const [showProductBuyModal, setShowProductBuyModal] = useState(false);
    const [BuyingProduct, setBuyingProduct] = useState([]);
    const handleProductBuyModalClose = () => setShowProductBuyModal(false);
    const handleProductBuyModalShow = () => setShowProductBuyModal(true);
    const onSubmit = data => {
        const orderData = new Date();
        data.status = "pending"
        data.img = selectedProduct.img;
        data.orderData = orderData.toLocaleDateString();
        setBuyingProduct(data)
        reset();
        handleProductBuyModalShow();
    };
    useEffect(() => {
        axios.get(`https://obscure-depths-70319.herokuapp.com/selectedProduct/${id}`)
            .then(res => setSelectedProduct(res.data))
    }, [id])
    const handleReviewsToServer = () => {
        handleProductBuyModalClose()

        axios.post('https://obscure-depths-70319.herokuapp.com/orders', BuyingProduct)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Congrats Your order has been added successfully.")
                    if (!admin) {
                        history.push('/dashboard')
                    } else (
                        history.push('/home')
                    )

                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>Cycle Buying</title>
            </Helmet>

            <Header />
            product by {id}

            <Container>
                <Row className="my-5">
                    <Col md={6}>
                        <Image src={selectedProduct.img} rounded fluid />
                    </Col>
                    <Col md={6} className="d-flex align-items-center">
                        <div className="text-start">
                            <h4 className="fs-2 text-muted">{selectedProduct.name} </h4>
                            <h4>BDT {selectedProduct.price} Tk</h4>
                            <p className="fs-5">{selectedProduct.description} </p>
                        </div>
                    </Col>
                </Row>
                {
                    (selectedProduct.name && user.displayName) ? <Row className="d-flex justify-content-center">
                        <Col md={4} className="my-5 product-buy-form">
                            <h4 className="text-muted">Wanna buy this product ?</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" defaultValue={user.displayName} {...register("name")} />
                                <input type="email" defaultValue={user.email} {...register("email")} />
                                <input type="number" placeholder="Mobile number" {...register("mobile", { required: true, maxLength: "11", minLength: "11" })} />
                                <textarea placeholder="Address" type="text" {...register("address", { required: true })} />
                                <input type="text" defaultValue={selectedProduct.name} {...register("productName")} />
                                <input type="number" defaultValue={selectedProduct.price} {...register("price")} />


                                <input type="submit" />
                            </form>
                        </Col>
                    </Row>
                        : <p>Your form is loading</p>
                }
            </Container>
            <Modal
                show={showProductBuyModal}
                onHide={handleProductBuyModalClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Hello {user.displayName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className=" g-0">

                        <Col md={12} className="d-flex align-items-center">
                            <div className="text-start">
                                <h4 className="fs-2 fw-light">Name : {BuyingProduct.productName} </h4>
                                <p className="fs-5 fw-light mb-0"> Price : BDT {selectedProduct.price} Tk</p>
                                <p className="fs-5 fw-light mb-0"> Mobile : {BuyingProduct.mobile}</p>
                                <p className="fs-5 fw-light"> Address : {BuyingProduct.address}</p>

                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleProductBuyModalClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleReviewsToServer}>Buy Product</Button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </div>
    );
};

export default ProductBuy;