import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BiLogoInstagramAlt} from 'react-icons/bi';
import {BsFacebook } from 'react-icons/bs';
import {AiFillTwitterCircle } from 'react-icons/ai';
import{AiTwotoneStar,AiOutlineHeart}from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from'../../assets/1602-01.webp'
import {BsCart} from 'react-icons/bs';

import {LuLogOut} from 'react-icons/lu';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useContext,useState ,useEffect, Fragment} from 'react';

import { CardText, Figure } from 'react-bootstrap';

function Navbar_comp() {


  return (

    <Fragment>
                
   
    <Navbar bg="white" expand="lg">

      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" height="35" className='me-md-5 pe-md-5' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      
          <Nav className="me-auto  justify-content-between ms-md-5 ps-md-5 align-items-center"> {/* Added 'justify-content-center' class */}
            <NavLink to="/" className='me-3 link-nav'>Home</NavLink>
            <NavLink to="Forex" className='me-3 link-nav'>Forex</NavLink>
            <NavLink to="cyrpto" className='me-3 link-nav'>Crypto</NavLink>
            <NavLink to="Exchange" className='me-3 link-nav'>Exchange</NavLink>
            <NavLink to="About_us" className='me-3 link-nav'>About Us</NavLink>

            <NavLink to="Contactus" className='me-3 link-nav'>Contact</NavLink>
            
      
          </Nav>

          <Nav className="ms-auto justify-content-center"> {/* Added 'justify-content-center' class */}

          <Nav.Link href="#home" className=' rounded-4 text-white bg-dark ps-4 pe-4 shadow fw-bold  mt-1' >Register </Nav.Link>
     
        
        </Nav>
        
 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  );
}

export default Navbar_comp;