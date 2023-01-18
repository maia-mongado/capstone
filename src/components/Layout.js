
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from "react";
import { Link, Outlet } from "react-router-dom";

import {FaCcMastercard, FaCcVisa, FaCcAmex, FaCcDiscover } from 'react-icons/fa';

function MyNav() {
    const [show, setShow] = React.useState(false);

    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }


    return(
        <Navbar sticky="top" bg="dark" expand="sm">
        <Container id='navbar-container'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand as={Link} to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/home/image.png"}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown 
                title="Services" 
                id="basic-nav-dropdown"
                // show={show}
                // onMouseEnter={showDropdown} 
                // onMouseLeave={hideDropdown}
                >
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

function MyFooter() {
  return (
    <footer>
        <div id="footer-info">
            <div id="hours">
                <h3>Hours</h3>
                <table>
                    <tr>
                        <td><b>Sunday:</b></td>
                        <th class="space"></th>
                        <td>closed</td>
                    </tr>
                    <tr class="blank_row">
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td><b>Monday to Thursday:</b></td>
                        <th class="space"></th>
                        <td>7:30 am - 12:00 pm</td>
                    </tr>
                    <tr>
                        <td></td>
                        <th class="space"></th>
                        <td>1:30 pm - 6:30 pm</td>
                    </tr>
                    <tr class="blank_row">
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td><b>Friday:</b></td>
                        <th class="space"></th>
                        <td>7:30 am - 12:00 pm</td>
                    </tr>
                    <tr>
                        <td></td>
                        <th class="space"></th>
                        <td>1:30 pm - 7:00 pm</td>
                    </tr>
                    <tr class="blank_row">
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td><b>Saturday:</b></td>
                        <th class="space"></th>
                        <td>7:30 am - 12:00 pm</td>
                    </tr>
                    <tr>
                        <td></td>
                        <th class="space"></th>
                        <td>1:00 pm - 4:00 pm</td>
                    </tr>
                </table>
            </div>
            <div id="location">
                <h3>Location</h3>
                <img src={process.env.PUBLIC_URL + "/images/home/map.png"} alt='map' />
                <p>265 Gano Street
                    <br></br>
                    Providence, RI  02906
                    <br></br>
                    <br></br>
                    <b>Phone:</b> (401) 272-2345
                    <br></br>
                    <b>Fax:</b> (401) 272-1305
                </p>
            </div>
        </div>
    
    <hr></hr>
    
        <div id="symbols">
            <div id="icons">
                <a href='https://www.facebook.com/EastSideVeterinaryClinic' target='_blank' rel="noopener noreferrer">
                    <img id="facebook" src={process.env.PUBLIC_URL +"/images/home/facebooklogo.png"} alt='facebook' />
                </a>
                <a href='https://www.petly.com' target='_blank' rel="noopener noreferrer">
                    <img id="petly" src={process.env.PUBLIC_URL+ "/images/home/petly-bubble.png"} alt='petly' />
                </a>
            </div>
            <p><b>We accept:</b></p>
            <div id='credit-cards'>
                <FaCcMastercard />
                <FaCcVisa />
                <FaCcAmex />
                <FaCcDiscover />
            </div>
            <div id='insurance'>
                <img id="care-credit" src={process.env.PUBLIC_URL+ "/images/home/carecredit.png"} alt='care-credit' />
                <img id="trupanion" src={process.env.PUBLIC_URL+ "/images/home/trupanion.png"} alt='trupanion' />
            </div>
        </div>       
    </footer>

  )
}

export default function Layout() {

    return(
        <>
            <MyNav />
            <Outlet />
            <MyFooter />
        </>
    )
}