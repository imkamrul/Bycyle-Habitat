import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

import { BASE_URL } from "../../utils/BaseUrl";
import "./ProductBuy.css";
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
  const onSubmit = (data) => {
    const orderData = new Date();
    data.status = "pending";
    data.img = selectedProduct.img;
    data.orderData = orderData.toLocaleDateString();
    setBuyingProduct(data);
    reset();
    handleProductBuyModalShow();
  };
  useEffect(() => {
    axios
      .get(`${BASE_URL}/selectedProduct/${id}`)
      .then((res) => setSelectedProduct(res.data));
  }, [id]);
  const handleReviewsToServer = async() => {
    handleProductBuyModalClose();
   try {
    const response = await fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify(BuyingProduct)
      });
      const data = await response.json();
      console.log("tst",data)
      history.push(data)
      window.location.replace(data);
   } catch (error) {
    alert("try again");
   }

  };
  return (
    <div>
      <Helmet>
        <title>Purchase</title>
      </Helmet>

      <Header />

      {selectedProduct.name && (
        <Container>
          <Row className="my-5">
            <Col
              md={8}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="">
                <Row className="product-background">
                  <Col md={6}>
                    <Image src={selectedProduct.img} fluid />
                    <p className="fs-2 text-start">{selectedProduct.name} </p>
                  </Col>
                  <Col md={6} className="text-start">
                    <p className="fs-5">
                      Price : BDT{" "}
                      <span className="fw-bold">{selectedProduct.price}</span>{" "}
                      Tk
                    </p>
                    <p className="fs-5">
                      Details : {selectedProduct.description}{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            {selectedProduct.name && user.displayName ? (
              <Col md={4} className="product-buy-form">
                <h4 className="mb-3 text-start">
                  Fill the form for confirm order
                </h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    defaultValue={user.displayName}
                    {...register("name")}
                  />
                  <input
                    type="email"
                    defaultValue={user.email}
                    readOnly
                    {...register("email")}
                  />
                  <input
                    type="number"
                    placeholder="Mobile number"
                    {...register("mobile", {
                      required: true,
                      maxLength: "11",
                      minLength: "11",
                    })}
                  />
                  <textarea
                    placeholder="Address"
                    type="text"
                    {...register("address", { required: true })}
                  />
                  <input
                    type="text"
                    defaultValue={selectedProduct.name}
                    readOnly
                    {...register("productName")}
                  />
                  <input
                    type="number"
                    defaultValue={selectedProduct.price}
                    readOnly
                    {...register("price")}
                  />

                  <Button variant="dark" type="submit" className="my-3">
                    Place Order
                  </Button>
                </form>
              </Col>
            ) : (
              <p>Your form is loading</p>
            )}
          </Row>
        </Container>
      )}
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
                <h4 className="fs-2 fw-light">
                  Name : {BuyingProduct.productName}{" "}
                </h4>
                <p className="fs-5 fw-light mb-0">
                  {" "}
                  Price : BDT {selectedProduct.price} Tk
                </p>
                <p className="fs-5 fw-light mb-0">
                  {" "}
                  Mobile : {BuyingProduct.mobile}
                </p>
                <p className="fs-5 fw-light">
                  {" "}
                  Address : {BuyingProduct.address}
                </p>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleProductBuyModalClose}>
            No
          </Button>
          <Button variant="danger" onClick={handleReviewsToServer}>
            Buy Product
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
};

export default ProductBuy;
