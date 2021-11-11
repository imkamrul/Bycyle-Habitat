import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Image, Modal, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ManageProduct = () => {
    const { user } = useAuth();
    const [selectedProduct, setSelectedProduct] = useState([])
    const [allProducts, setAllProducts] = useState({});

    useEffect(() => {
        axios.get('https://obscure-depths-70319.herokuapp.com/products')
            .then(res => setAllProducts(res.data))
    }, [])
    const handleDeleteProduct = id => {
        const sure = window.confirm("are you sure to delete this ?");
        if (sure) {
            axios.delete(`https://obscure-depths-70319.herokuapp.com/productDelete/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("deleted successful");
                        const updatepProducts = allProducts.filter(product => product._id !== id);
                        setAllProducts(updatepProducts)
                    }
                })
        }
    }
    const getProductUpdate = id => {
        axios.get(`https://obscure-depths-70319.herokuapp.com/singleProduct/${id}`)
            .then(res => {
                setSelectedProduct(res.data)
                handleupdatingMOdalShow();
            })
    }

    const handleOnBlurProductForm = e => {
        const field = e.target.name;
        const value = e.target.value;
        const data = { ...selectedProduct };
        data[field] = value;
        setSelectedProduct(data);
    }

    const [showupdatingMOdal, setShowupdatingMOdal] = useState(false);
    const handleupdatingMOdalClose = () => setShowupdatingMOdal(false);
    const handleupdatingMOdalShow = () => setShowupdatingMOdal(true);
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        handleupdatingMOdalClose();
        axios.put(`https://obscure-depths-70319.herokuapp.com/products/${selectedProduct._id}`, selectedProduct)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    alert("Product updated successfully")
                    axios.get('https://obscure-depths-70319.herokuapp.com/products')
                        .then(res => setAllProducts(res.data))


                }
            })


    }
    return (
        <div>
            <Container className="py-5">

                <h4>All products</h4>
                <Row className="heading g-0 py-3 mx-5">

                    <Col md={3} xs={6}><h3 className="mb-0 fs-5 text-start ps-3">Name</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 fs-5">Image</h3></Col>
                    <Col md={2} xs={6}><h3 className="mb-0 fs-5">Price</h3></Col>
                    <Col md={3} xs={6}><h3 className="mb-0 fs-5">Description</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 text-center fs-5">Update</h3></Col>
                    <Col md={2} xs={6}><h3 className="mb-0 text-center fs-5">Delete</h3></Col>
                </Row>
                {allProducts.length ? allProducts.map(product => <Row
                    key={product._id}
                    className="user-booking-detail g-0 mx-5">
                    <Col md={3} xs={12}><h5 className="mb-0 mt-2 fs-6 text-start ps-3">{product.name}</h5></Col>
                    <Col md={1} xs={12}> <Image src={product.img} rounded fluid style={{ height: "50px" }} /></Col>
                    <Col md={2} xs={6}><h5 className="mb-0 mt-2 fs-6 ">{product.price} Tk</h5></Col>
                    <Col md={3} xs={6}><h5 className="mb-0 mt-2 fs-6 ">{product.description.slice(0, 50)} </h5></Col>
                    <Col md={1} xs={6}>
                        <h5 className="my-2 text-center" onClick={() => getProductUpdate(product._id)}><Button variant="outline-dark" className=" ms-3" >Update</Button></h5>
                    </Col>
                    <Col md={2} xs={6}>
                        <h5 className="my-2 text-center"><Button variant="danger" className=" ms-3" onClick={() => handleDeleteProduct(product._id)}>Delete <i className="fas fa-trash"  ></i></Button></h5>
                    </Col>

                </Row>)
                    : <p> No data</p>
                }
            </Container>
            <Modal show={showupdatingMOdal} onHide={handleupdatingMOdalClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Hello {user.displayName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdateSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" className="mb-3" >
                                <Form.Control
                                    size="lg"

                                    type="text"
                                    defaultValue={selectedProduct.name}
                                    name="name"
                                    onBlur={handleOnBlurProductForm}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3" >
                                <Form.Control
                                    size="lg"

                                    type="text"
                                    defaultValue={selectedProduct.img}
                                    name="img"
                                    onBlur={handleOnBlurProductForm}

                                />
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3" >
                                <Form.Control
                                    size="lg"

                                    type="number"
                                    defaultValue={selectedProduct.price}
                                    min="0"
                                    max="9999999"
                                    name="price"
                                    onBlur={handleOnBlurProductForm}

                                />
                            </Form.Group>


                        </Row>


                        <Form.Group className="mb-3" as={Col} md="12" controlId="exampleForm.ControlTextarea1">

                            <Form.Control as="textarea"
                                rows={3}
                                defaultValue={selectedProduct.description}
                                name="description"
                                onBlur={handleOnBlurProductForm}

                            />
                        </Form.Group>
                        <p className="text-center my-3"> <Button type="submit" variant="danger" className="banner-btn"> Update Product</Button></p>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleupdatingMOdalClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ManageProduct;