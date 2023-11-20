import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ColumnaFirst.css';

const ColumnaFirst = () => {
    return (
        <div className="columna-first">
            <div className="overlay"></div>
            <Container fluid className="content">
                <Row>
                    <Col>
                        <h1 className="title">Full Dedicated To Your <span className="highlight">Dental Health</span></h1>
                        <p className="description">
                            We are committed to providing the highest quality dental care for our patients. 
                            With our state-of-the-art facilities and experienced staff, we ensure a comfortable and 
                            relaxing environment for your dental treatments. Join us today and start your journey 
                            towards a healthier, brighter smile.
                        </p>
                        <Button variant="outline-light" className="btn-read">Read More</Button>
                        <Button variant="outline-success btn-book">Book Now</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ColumnaFirst;