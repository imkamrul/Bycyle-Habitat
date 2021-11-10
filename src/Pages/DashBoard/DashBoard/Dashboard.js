import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import AllOrders from '../AllOrders/AllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
const Dashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
            </Helmet>
            <Header />

            <Container>
                <Row className="py-4" >
                    <Col md={4}>

                        <Image src="" style={{ height: "48px", width: "128px" }} />
                    </Col>
                    <Col md={8}>
                        <h1 className="fs-2 fw-light">Manage Bookings, Add Service, Admin</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="custom-my-booking-link panel-bg ps-4">
                        <Link to="/home"> <span><i className="fas fa-house-user"></i></span> Home</Link>
                        <br />
                        <Link to={`${url}`}> <span><i className="fas fa-shopping-bag"></i></span> My Orders</Link>
                        <br />
                        <Link to={`${url}/pay`}> <span><i className="fas fa-plus"></i></span> Payment</Link>
                        <br />
                        <Link to={`${url}/review`}> <span><i className="fas fa-plus"></i></span> Review</Link>
                        <br />
                        <Link to={`${url}/allOrders`}> <span><i className="fas fa-plus"></i></span> All Orders</Link>
                        <br />
                        <Link to={`${url}/addProduct`}> <span><i className="fas fa-plus"></i></span>Add Product</Link>
                        <br />
                        <Link to={`${url}/makeAdmin`}> <span><i className="fas fa-plus"></i></span> Make Admin </Link>
                        <br />
                        <Link to={`${url}/manageProducts`}> <span><i className="fas fa-plus"></i></span>Manage Products</Link>
                        <br />

                    </Col>
                    <Col md={9}>
                        <Switch>
                            <Route exact path={path}>
                                <MyOrders />
                            </Route>
                            <Route path={`${path}/pay`}>
                                <Pay />
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review />
                            </Route>
                            <Route path={`${path}/allOrders`}>
                                <AllOrders />
                            </Route>
                            <Route path={`${path}/addProduct`}>
                                <AddProduct />
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin />
                            </Route>
                            <Route path={`${path}/manageProducts`}>
                                <ManageProduct />
                            </Route>

                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;