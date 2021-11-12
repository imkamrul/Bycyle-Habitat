import React, { useState } from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import googleLogo from '../../img/gogle.png'
import './LogIn.css'
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
const LogIn = () => {
    const { loginUser, signInWithGoogle, registerUser } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const location = useLocation();
    const history = useHistory();
    // handle email pass log in 
    const handleLogIn = data => {
        loginUser(data.email, data.password, location, history);
        reset();
    };
    const handleRegister = data => {
        reset();
        registerUser(data.email, data.password, data.name, history, data.img, location);
    };
    const [page, setPage] = useState(true);
    // log in page & register page toggle 
    const handlePage = d => {
        setPage(d)
    }
    // google log in 
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="log-in-page-banner">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Log in</title>
            </Helmet>
            <Header />
            <Container>
                <Row className="d-flex justify-content-center text-white">
                    <Col md={8} >
                        <Row className="mt-5 d-flex justify-content-end">
                            <Col md={6}>
                                <h4 className="fw-light mb-3">Welcome to  <span className="fw-bold">𝙱𝚒𝚌𝚢𝚌𝚕𝚎 𝙷𝚊𝚋𝚒𝚝𝚊𝚝</span></h4>
                                {page ? <> <form onSubmit={handleSubmit(handleLogIn)} className="from-input-customize">
                                    <input as={Col} placeholder="Email" type="email"{...register("email", { required: true })} />
                                    <input as={Col} placeholder="Password" type="password" {...register("password", { required: true })} />
                                    <p className="my-4">   <input type="submit" value="Log in" /></p>
                                </form>
                                    <hr />
                                    <Row className="d-flex justify-content-center"><Col md={8}><p className="google-sign-in-customize" onClick={handleGoogleSignIn}>  <Image src={googleLogo} roundedCircle style={{ height: "25px" }} /> <span className="fs-5 ">Sign in with google</span> </p></Col></Row>
                                </> :
                                    <form onSubmit={handleSubmit(handleRegister)} className="from-input-customize">
                                        <input as={Col} placeholder="Full name" type="text"{...register("name", { required: true })} />
                                        <input as={Col} placeholder="Email" type="email"{...register("email", { required: true })} />
                                        <input as={Col} placeholder="Photo url only" type="text"{...register("img", { required: true })} />
                                        <input as={Col} placeholder="Password" type="password" {...register("password", { required: true })} />
                                        <p className="my-4">   <input type="submit" value="Register" /></p>
                                    </form>}
                                <p > {page ? `Didn't have an account ? Create Now` : `Do you have already  an account ? Log in Now`} <br /><Button variant="outline-info" className="my-3" onClick={() => handlePage(!page)} >{page ? "Sign Up " : "Log in"}</Button> </p>
                            </Col>

                        </Row>
                    </Col>

                </Row>
            </Container >
        </div >
    );
};
export default LogIn;