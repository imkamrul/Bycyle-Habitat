import React, { useState } from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import googleLogo from '../../img/gogle.png'
import './LogIn.css'
import { useForm } from "react-hook-form";
const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const handleLogIn = data => console.log(data);
    const handleRegister = data => console.log(data);
    const [page, setPage] = useState(true);
    const handlePage = d => {
        setPage(d)
    }
    console.log(page)
    return (
        <div className="logIn-page-bg">
            <Header />
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={8}>
                        <Row className="mt-5">
                            <Col md={6}>
                                <p onClick={() => handlePage(!page)}> <span className="account-create-text" >{page ? `Didn't have an account ? Create Now` : `Do you have already  an account ? Log in Now`} <br /><Button variant="dark">{page ? "Sign Up " : "Log in"}</Button></span> </p>
                            </Col>

                            <Col md={6}>
                                <h4 className="fw-light">Wecome to Company Name</h4>
                                {page ? <form onSubmit={handleSubmit(handleLogIn)} className="from-input-customize">
                                    <input as={Col} placeholder="Email" type="email"{...register("email", { required: true })} />
                                    <input as={Col} placeholder="Password" type="password" {...register("password", { required: true })} />
                                    <p className="my-4">   <input type="submit" value="Log in" /></p>
                                </form> :
                                    <form onSubmit={handleSubmit(handleRegister)} className="from-input-customize">
                                        <input as={Col} placeholder="Full name" type="text"{...register("name", { required: true })} />
                                        <input as={Col} placeholder="Email" type="email"{...register("email", { required: true })} />
                                        <input as={Col} placeholder="Photo url only" type="text"{...register("img", { required: true })} />
                                        <input as={Col} placeholder="Password" type="password" {...register("password", { required: true })} />
                                        <p className="my-4">   <input type="submit" value="Register" /></p>
                                    </form>}
                                <p>------------------OR------------------</p>
                                <Row className="d-flex justify-content-center"><Col md={8}><p className="google-sign-in-customize">  <Image src={googleLogo} roundedCircle style={{ height: "25px" }} /> <span className="fs-5 ">Sign in with google</span> </p></Col></Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LogIn;