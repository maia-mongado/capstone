
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from "react";
import { Link, Outlet } from "react-router-dom";

function MyNav() {
    const [show, setShow] = React.useState(false);

    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }


    return(
        <Navbar sticky="top" bg="light" expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown 
                title="Services" 
                id="basic-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown} 
                onMouseLeave={hideDropdown}>
                <NavDropdown.Item as={Link} to="/services">General</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='/services/dental-care'>Dental Care</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/radiology'>Radiology (X-Rays)</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/surgery'>Surgery</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/vaccinations'>Vaccinations</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/microchipping'>Microchipping</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/nutritional-counseling'>Nutritional Counseling</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/parasite-prevention-and-control'>Parasite Prevention and Control</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/ultrasound'>Ultrasound</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/in-house-laboratory'>In-House Laboratory</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/tonometry'>Tonometry</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/wellness-exams'>Wellness Exams</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/rabbits-and-small-mammals'>Rabbits and Small Mammals</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/puppy-and-kitten-care'>Puppy and Kitten Care</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/services/pain-management'>Pain Management</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link 
                className='external-link'
                href="https://eastsidevetclinic.securevetsource.com/site/view/88459_Home.pml?retUrl=https://www.eastsideveterinary.com/%26cms" 
                target='_blank'>Online Pharmacy</Nav.Link>
              <Nav.Link as={Link} to="/new-pet-registration">New Pet Registration</Nav.Link>
              <Nav.Link as={Link} to="/our-staff">Our Staff</Nav.Link>
              <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default function Layout() {

    return(
        <>
            <MyNav />
            <Outlet />
        </>
    )
}