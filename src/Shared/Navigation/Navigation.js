import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/review">review</NavLink>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
        </div>
    )
}

export default Navigation
