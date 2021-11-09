import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import users from '../../../img/5907.jpg'
import logo from '../../../img/logo.png'
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="90"
                        height="35"
                        className="d-inline-block align-top"
                    />{' '}
                    𝗧𝘄𝗼 𝗧𝗶𝗿𝗲𝘀
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/home" activeStyle={activeStyle}>
                            Home
                        </NavLink>
                        <NavLink to="/logIN" activeStyle={activeStyle}>
                            Log In
                        </NavLink>
                        <p className="my-0"> <Image className="user-picture" src={users} roundedCircle /> <span>kamrul hasan</span> </p>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;