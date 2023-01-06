
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
              <NavDropdown title="Services" id="basic-nav-dropdown" show={show}
                onMouseEnter={showDropdown} 
                onMouseLeave={hideDropdown}>
                <NavDropdown.Item as={Link} to="/services">General</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/ourstaff">Our Staff</Nav.Link>
              <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
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