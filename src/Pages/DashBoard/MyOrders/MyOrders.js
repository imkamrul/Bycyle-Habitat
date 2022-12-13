import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const [deleteOrder, SetDeleteOrder] = useState([]);
  const history = useHistory();
  const [showOrderDeleteModel, setShowOrderDeleteModel] = useState(false);

  const handleOrderDeleteModelClose = () => setShowOrderDeleteModel(false);
  const handleOrderDeleteModelShow = (data) => {
    SetDeleteOrder(data);
    setShowOrderDeleteModel(true);
  };
  const getData = async () => {
    try {
      const result = await axios.get(
        `https://www.api.kamrul.pro/myOrders?search=${user.email}`
      );

      setMyOrders(result.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getData();
  }, [user]);
  const total = myOrders.reduce(
    (previous, product) => previous + parseInt(product.price),
    0
  );
  const deleteMyOrder = (id) => {
    handleOrderDeleteModelClose();
    axios.delete(`https://www.api.kamrul.pro/orderDelete/${id}`).then((res) => {
      if (res.data.deletedCount) {
        alert("deleted successful");
        const updateMyOrder = myOrders.filter((order) => order._id !== id);
        setMyOrders(updateMyOrder);
      }
    });
  };
  const paymentPage = () => {
    history.push("dashboard/pay");
  };
  return (
    <Container className="pt-5">
      <Row className="d-flex  justify-content-center g-0">
        <Col md={10}>
          <Row className="text-start g-0">
            <h4 className="my-3">My Orders ({myOrders.length})</h4>
            <Col md={8} className="bg-white">
              <Row className="g-0 pt-4">
                {myOrders.length ? (
                  myOrders.map((order) => (
                    <Col key={order._id} xs={12} className="mb-2">
                      <Card className="product-background">
                        <Row className="g-0">
                          <Col md={6}>
                            <Card.Img
                              variant="top"
                              src={order.img}
                              style={{ height: "225px" }}
                            />
                            <Card.Title className="py-2 ps-3">
                              {order.productName}
                            </Card.Title>
                          </Col>
                          <Col md={6}>
                            <Card.Body>
                              <Card.Header>Name: {order.name}</Card.Header>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  Mobile : {order.mobile} <br />
                                  Address: {order.address}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  Price: {order.price} Tk
                                  <br /> Status: {order.status}
                                  <br />
                                  Order Date : {order.orderData}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <span className="">
                                    <Button
                                      variant="danger"
                                      className="my-1"
                                      onClick={() =>
                                        handleOrderDeleteModelShow(order)
                                      }
                                    >
                                      Cancel It
                                    </Button>
                                  </span>
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <p className="text-center fs-5">You haven't ordered yet</p>
                )}
              </Row>

              <Modal
                show={showOrderDeleteModel}
                onHide={handleOrderDeleteModelClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title className="text-warning">Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Deleting{" "}
                  <span className="fw-bold">{deleteOrder.productName}</span>{" "}
                  from orders. Are you sure?
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={handleOrderDeleteModelClose}
                  >
                    No
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteMyOrder(deleteOrder._id)}
                  >
                    Yes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col md={4} className="border-top  border-success ps-5">
              <h5 className="fs-3 fw-light text-center"> Summary</h5>
              <p className="mb-0">SubTotal : {total} Tk</p>
              <hr className="my-2" />
              <p className="mb-0">Shipping charge : 00 </p>
              <hr className="my-2" />
              <p className="mb-0">Discount : 00</p>
              <hr className="my-2" />
              <p className="mb-0">Total : $ {total.toFixed(2)}</p>
              <hr className="my-2" />
              <div className="text-end">
                <Button variant="success" onClick={paymentPage}>
                  Payment
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyOrders;
