import Container from 'react-bootstrap/Container';
import logo from '../images/companylogo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/App.css'
import React from 'react'
import {HashLink} from 'react-router-hash-link'
import '../css/App.css';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='navbar' sticky="top" >
        <Container>
          <Navbar.Brand href="#home"><img
            src={logo}
            height='50'
            width='70'
            alt='brand logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" ms-auto navbarlist">
              <Nav.Link ><HashLink to='#about' className='links'>ABOUT</HashLink></Nav.Link>
               <Nav.Link><HashLink to='#home' className='links'>HOME</HashLink></Nav.Link>
              <Nav.Link ><HashLink to='#career' className='links'>CAREER</HashLink></Nav.Link>
              <Nav.Link ><HashLink to='#contactus' className='links'>CONTACT US</HashLink></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar