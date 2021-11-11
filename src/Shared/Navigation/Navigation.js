import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import Useauth from './../../Hooks/Useauth';
import Dashboard from './../../Pages/Dashboard/Dashboard';

const Navigation = () => {
  const {user,logout}=Useauth();
    return (
        <div className="navmain">
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">SUZUKI BIKE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/allbikes">all bikes</NavLink>
       
       

        {
          user?.email?
         <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <a href="#login">{user.displayName}</a>
          <button className='btn btn-success' onClick={logout}>logout</button>
         
         
         </>
          :
          <NavLink to="/login">login</NavLink>
          
        }
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navigation
