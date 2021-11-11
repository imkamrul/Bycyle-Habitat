import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';

const ManageProduct = () => {
    const [allProducts, setAllProducts] = useState({});

    useEffect(() => {
        axios.get('https://obscure-depths-70319.herokuapp.com/products')
            .then(res => setAllProducts(res.data))
    }, [])
    const handleDeleteProduct = id => {
        const sure = window.confirm("are you sure to delete this ?");
        if (sure) {
            axios.delete(`http://0/productDelete/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("deleted successful");
                        const updatepProducts = allProducts.filter(product => product._id !== id);
                        setAllProducts(updatepProducts)
                    }
                })
        }
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
                        <h5 className="my-2 text-center"><Button variant="outline-dark" className=" ms-3" >Update</Button></h5>
                    </Col>
                    <Col md={2} xs={6}>
                        <h5 className="my-2 text-center"><Button variant="danger" className=" ms-3" onClick={() => handleDeleteProduct(product._id)}>Delete <i className="fas fa-trash"  ></i></Button></h5>
                    </Col>

                </Row>)
                    : <p> No data</p>
                }
            </Container>
        </div>
    );
};

export default ManageProduct;