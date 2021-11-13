import React from 'react';
import { Container, Image, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../../hooks/useAuth'

const Header = () => {
    const { user, logout } = useAuth();
    const { displayName, photoURL } = user;
    const activeStyle = {
        fontWeight: "bold",
        color: "#0DCAF0"
    }
    return (
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fs-4">

                    𝙱𝚒𝚌𝚢𝚌𝚕𝚎 𝙷𝚊𝚋𝚒𝚝𝚊𝚝
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/home" className="fs-4 pt-1" activeStyle={activeStyle}>
                            Home
                        </NavLink>
                        <NavLink to="/cycles" className="fs-4 pt-1" activeStyle={activeStyle}>
                            Explore
                        </NavLink>
                        {user.email && <NavLink to="/dashboard" className="fs-4 pt-1" activeStyle={activeStyle}>
                            Dashboard
                        </NavLink>
                        }


                        {user.email ? <>    <span className=" text-light pt-2 fs-5 px-2 fw-lighter "> <Image className="user-picture" src={photoURL} roundedCircle /> {displayName}</span>
                            <Button variant="warning" onClick={logout} className="m-1 text-white">Log Out <i className="fas fa-sign-out-alt ps-2"></i></Button>
                        </>
                            :
                            <NavLink to="/login"><Button variant="outline-info mt-1">Log In <i className="fas fa-sign-in-alt ps-2"></i></Button></NavLink>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;