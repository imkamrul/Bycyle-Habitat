import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import PageNotFoundIMg from '../../img/pageNot.png'
import './PageNotFound.css'
const PageNotFound = () => {
    return (
        <div>
            <Container>
                <Row>

                    <Col className="d-flex justify-content-center">
                        <Image className="floating" src={PageNotFoundIMg} rounded fluid style={{ height: "400px" }} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PageNotFound;