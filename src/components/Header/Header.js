import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Header = ({ title, userName }) => {
    return (
        <Container>
            <Navbar variant="light" bg="light" className="pl-0">
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link target="_blank" href="https://bitso.com/" >Bitso</Nav.Link>
                    <Nav.Link target="_blank" href="https://www.binance.com/es">Binance</Nav.Link>
                    <Nav.Link target="_blank" href="https://www.coinbase.com/es/">Coinbase</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Bienvenido: <a href="#login">{userName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header;