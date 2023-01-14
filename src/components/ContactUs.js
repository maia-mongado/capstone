import './ContactUs.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function ContactUs() {
    return (
        <div id='contact-us'>
            <h1>Contact Us</h1>

            <div className='contact-us-alt-background'>
                <div className='r justify-content-between' id='normal-hours-contact'>
                    <Form id='contact-form'>
                        <p>If this is a non-urgent question, you can contact us using the form below:</p> 
                        <Form.Label className='required'>Name</Form.Label>
                        <InputGroup className='mb-3' id='contact-name'>
                            <Form.Control type="name" placeholder="First" />
                            <Form.Control type="name" placeholder="Last" />
                        </InputGroup>

                        <div className='r'>                
                            <Form.Group id='contact-number' className='mb-3'>
                                <Form.Label className='required'>Phone number</Form.Label>
                                <Form.Control type='textarea' placeholder='#' />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label className='required'>Email</Form.Label>
                                <Form.Control type='email' placeholder='ex@gmail.com' />
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    
                    <div>
                        <p>Or call, email, or visit:</p>
                        <p className='contact-address'>
                            <h3>East Side Veterinary Clinic</h3>
                            265 Gano Street
                            <br />
                            Providence, RI 02906
                            <br />
                            <br />
                            <b>Phone:</b> (401) 272-2345
                            <br />
                            <b>Fax:</b> (401) 272-1305
                            <br />
                            <b>Email:</b> eastsidevc@gmail.com
                            <br />
                            <Form.Text muted>Our hours are listed at the bottom of the page.</Form.Text>
                        </p>
                    </div>
                </div>
            </div>

            <h2 id='emergency-contact'>After Hours / Emergency Services </h2>

            <div className='r contact-row'>

                <p className='contact-address'>
                    <h3>Ocean State Veterinary Services</h3>
                    1480 South County Trail
                    <br />
                    East Greenwich, RI 02818
                    <br />
                    <b>Phone:</b> (401) 886-6787 
                </p>

                <p className='contact-address'>
                    <h3>Bay State Emergency ER</h3>
                    76 Baptist Street
                    <br />
                    Swansea, MA 02777
                    <br />
                    <b>Phone:</b> (508) 379-1233
                </p>

            </div>

            <div className='contact-us-alt-background'>

                <h2>Our Other Hospitals</h2>

                <div className='r contact-row'>

                    <p className='contact-address'>
                        <h3>​East Bay Animal Hospital</h3>
                        643 Fall River Avenue
                        <br />
                        Seekonk, MA 02771
                        <br />
                        <br />
                        <b>Phone:</b> (508) 336-3434
                        <br />
                        <b>Fax:</b> (508) 336-6045
                        <br />
                        <b>Email:</b> eastbayah@gmail.com
                        <br />
                        <b>Website:</b> <a href='https://www.eastbayanimalhospitalseekonk.com' target='_blank' rel="noopener noreferrer">www.eastbayanimalhospitalseekonk.com</a>
                    </p>

                    <p className='contact-address'>
                        <h3>Gansett Animal Hospital</h3>
                        167 Newport Ave
                        <br />
                        ​Rumford, RI 02916
                        <br />
                        <br />
                        <b>Phone:</b> (401) 434-2751
                        <br />
                        <b>Fax:</b> (401) 438-1650
                        <br />
                        <b>Email:</b> gansettah@gmail.com
                        <br />
                        <b>Website:</b> <a href='https://www.gansettanimalhospital.com' target='_blank' rel="noopener noreferrer">www.gansettanimalhospital.com</a>
                    </p>

                </div>
            </div>


        </div>
    );
}