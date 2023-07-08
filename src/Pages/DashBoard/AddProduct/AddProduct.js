import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

import { BASE_URL } from "../../../utils/BaseUrl";
import "./AddProduct.css";
const AddProduct = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [showProductModal, setProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState({});
  const handleProductModelClose = () => setProductModal(false);
  const handleProductModelShow = () => setProductModal(true);
  const handelAddProduct = (data) => {
    reset();
    setNewProduct(data);
    handleProductModelShow();
  };
  const handleProductToServer = () => {
    handleProductModelClose();

    axios.post(`${BASE_URL}/products`, newProduct).then((res) => {
      if (res.data.insertedId) {
        alert("Congrats Your Product has been added successfully.");
      }
    });
  };

  return (
    <Container className="py-5">
      <h4 className="fs-3 fw-light">Add a Product </h4>
      <Row className="g-0 d-flex justify-content-center">
        <Col md={4}>
          <form
            onSubmit={handleSubmit(handelAddProduct)}
            className="dashboard-from ms-3"
          >
            <input
              placeholder="Product Name"
              type="text"
              {...register("name", { required: true })}
            />
            <input
              placeholder="Price"
              type="number"
              {...register("price", {
                required: true,
                min: "0",
                max: "999999",
              })}
            />
            <input
              placeholder="IMG Url Only"
              type="text"
              {...register("img", { required: true })}
            />
            <textarea
              placeholder="Description"
              type="text"
              {...register("description", { required: true })}
            />

            <Button type="submit" variant="dark">
              Add Product
            </Button>
          </form>
        </Col>
      </Row>
      <Modal
        show={showProductModal}
        onHide={handleProductModelClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hello {user?.displayName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to add <span className="fw-bold">{newProduct?.name}</span>{" "}
          in products ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleProductModelClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleProductToServer}>
            {" "}
            Yes{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AddProduct;
