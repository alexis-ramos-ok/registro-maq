import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Actualiza el estado del ancho de la ventana cuando se redimensiona
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {width <= 900 ? (
                <>
                    <Button variant="primary" onClick={handleShow} className="menu-button">
                        <FontAwesomeIcon icon={faBars} />
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-column">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#services">Services</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#appointment">Appointment</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <Nav.Link href="#whatsapp">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                    <span className="whatsapp-number">+1234567890</span>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
            ) : (
                <Navbar bg="transparent" variant="dark">
                    <Nav className="mr-auto nav-container">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#appointment">Appointment</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#whatsapp">
                            <FontAwesomeIcon icon={faWhatsapp} />
                            <span className="whatsapp-number">+1234567890</span>
                        </Nav.Link>
                    </Nav>
                </Navbar>
            )}
        </>
    );
}

export default NavBar;
