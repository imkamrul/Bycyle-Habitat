import React from 'react';
import { Button, Image, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { useRouteMatch, Switch, Route } from "react-router-dom";
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import AllOrders from '../AllOrders/AllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Dashboard.css'
import useAuth from '../../hooks/useAuth';
const Dashboard = () => {
    const { user, logout } = useAuth();
    const { displayName, photoURL } = user;
    const { path, url } = useRouteMatch();
    return (
        <div className="dashboard-bg">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
            </Helmet>

            <Row className="g-0  ">
                <Col md={2} className="custom-dashboard-link" >
                    <h1 className="title-dashboard ">𝙱𝚒𝚌𝚢𝚌𝚕𝚎 <br /> 𝙷𝚊𝚋𝚒𝚝𝚊𝚝
                    </h1>
                    <hr className="custom-hr" />
                    <Nav className="flex-column pb-3">
                        <Link to="/home"> <span><i className="fas fa-house-user"></i></span> Home</Link>
                        <Link to={`${url}`}> <span><i className="fas fa-shopping-bag"></i></span> My Orders</Link>
                        <Link to={`${url}/pay`}> <span><i className="fas fa-plus"></i></span> Payment</Link>
                        <Link to={`${url}/review`}> <span><i className="fas fa-plus"></i></span> Review</Link>
                        <Link to={`${url}/allOrders`}> <span><i className="fas fa-plus"></i></span> All Orders</Link>
                        <Link to={`${url}/addProduct`}> <span><i className="fas fa-plus"></i></span>Add Product</Link>
                        <Link to={`${url}/makeAdmin`}> <span><i className="fas fa-plus"></i></span> Make Admin </Link>
                        <Link to={`${url}/manageProducts`}> <span><i className="fas fa-plus"></i></span>Manage Products</Link>
                    </Nav>
                </Col>
                <Col md={10} className="dashboard-contain-bg">

                    <Row className="g-0 dashboard-header ">
                        <Navbar bg="white" expand="md">
                            <Container>
                                <h3 className="fw-light fs-2">Dashboard</h3>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ms-auto pe-5">

                                        <span className=" pt-2 fs-5 px-2 fw-lighter "> <Image className="user-picture" src={photoURL} roundedCircle /> {displayName}</span>
                                        <Button variant="warning" onClick={logout} className="m-1 text-white">Log Out</Button>

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Row>
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

        </div >
    );
};

export default Dashboard;