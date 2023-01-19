import './NewPetRegistration.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function NewPetRegistration() {
    return (
        <div id='new-pet-registration'>
            <h1>New Pet Registration</h1>

            <div id='blurb'>
                <h3>New to Eastside Veterinary Clinic? Welcome!</h3>
                <p>We look forward to your first visit with us. Help us get to know you and your pet(s) and fill out the form below prior to your first visit. Thank you.</p>
            </div>



            
            <div className='alt-background'>
                <Form>
                    <h2>Personal Info</h2>
                    <Form.Text muted>* indicates a required field.</Form.Text>  
                    <div className='r r-space'>
                        <div className='c'>
                        <Form.Label className='required'>Name</Form.Label>
                        <InputGroup className='mb-3' controlId='name'>
                            <Form.Control type="name" placeholder="First" />
                            <Form.Control type="name" placeholder="Last" />
                        </InputGroup>
                        </div>

                        <Form.Group className='mb-3'>
                            <Form.Label className='required'>Email</Form.Label>
                            <Form.Control type='email' placeholder='ex@gmail.com' />
                        </Form.Group>

                        <div className='r'>
                            <Form.Group className='mb-3'>
                                <Form.Label className='required'>Phone number</Form.Label>
                                <Form.Control type='textarea' placeholder='#' />
                            </Form.Group>

                            <Form.Select className='mb-3' id='mobile'>
                                <option>Mobile</option>
                                <option value="1">Home</option>
                                <option value="2">Work</option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className='r'>
                        <div className='c' id='address'>
                            <Form.Label className='required'>Address</Form.Label>
                            <Form.Group className='mb-3 r'>
                                <Form.Control type="text" placeholder="Street" id='street' />
                                <Form.Control type="text" placeholder="City"
                                id='city' />
                                <Form.Control type="text" placeholder="State" 
                                id='state'/>
                                <Form.Control type="text" placeholder="Zipcode"
                                id='zipcode' />
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3" id="pobox">
                            <Form.Control type="text" placeholder="Apt. #, etc. (opt)" />
                        </Form.Group>

                    </div>

                    <Form.Group className="mb-3" controlId="license">
                        <Form.Label className='required'>Driver's license number</Form.Label>
                        <Form.Control type="text" placeholder="#" />
                        <Form.Text muted>This is for identity checking purposes.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label className='required'>Indicate the date for your appointment.</Form.Label>
                        <Form.Control type="name" placeholder="mm/dd/yyyy" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="pet-names">
                        <Form.Label>If you have other pets who are patients here, indicate their name(s) below.</Form.Label>
                        <Form.Control type="name" />
                    </Form.Group>

                    <h4>Alternate Contact</h4>

                    <div className='r r-space'>
                        <div className='c'>
                            <Form.Label>Name</Form.Label>
                            <InputGroup className='mb-3' controlId='name'>
                                <Form.Control type="name" placeholder="First" />
                                <Form.Control type="name" placeholder="Last" />
                            </InputGroup>
                        </div>

                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='ex@gmail.com' />
                        </Form.Group>

                        <div className='r'>
                            <Form.Group className='mb-3'>
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type='textarea' placeholder='#' />
                            </Form.Group>

                            <Form.Select className='mb-3' id='mobile'>
                                <option>Mobile</option>
                                <option value="1">Home</option>
                                <option value="2">Work</option>
                            </Form.Select>
                        </div>

                    </div>
                </Form>
            </div>

            <div id='normal-background'>

                <Form>

                    <h2 id='pet-info-header'>Pet Info</h2>

                    <div className='r r-space'>
                        <Form.Group className='mb-3'>
                            <Form.Label className='required'>Pet Name</Form.Label>
                            <Form.Control type='text' />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='required'>Sex</Form.Label>
                            <Form.Select>
                                    <option>Male neutered</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female spayed</option>
                                    <option value="3">Female</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className='required'>Date of Birth</Form.Label>
                            <Form.Control type="name" placeholder="mm/dd/yyyy" />
                    </Form.Group>
                    </div>

                    <div className='r r-space'>
                        <Form.Group className='mb-3'>
                            <Form.Label className='required'>Species</Form.Label>
                            <Form.Select>
                                    <option>Dog</option>
                                    <option value="1">Cat</option>
                                    <option value="2">Other</option>
                            </Form.Select>

                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>If other species, specify:</Form.Label>
                            <Form.Control type='text' ></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className='required'>Breed</Form.Label>
                            <Form.Control type="name"  />
                    </Form.Group>

                    <Form.Group className="mb-3">
                            <Form.Label className='required'>Color / Markings</Form.Label>
                            <Form.Control type="name"  />
                    </Form.Group>
                    </div>

                    <Form.Group className="mb-3">
                            <Form.Label className='required'>Reason for Visit</Form.Label>
                            <Form.Control className='textbox' as="textarea" rows={2}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='required'>Current Diet</Form.Label>
                        <Form.Control className='textbox' as="textarea" rows={2} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Medical History</Form.Label>
                        <Form.Control className='textbox' as="textarea" rows={2} />
                        <Form.Text muted>Please bring your pet's medical record and history with you at the time of the appointment.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Current Medications</Form.Label>
                        <Form.Control className='textbox' as="textarea" rows={2} />
                    </Form.Group>

                    <p>Please check any symptoms you have noticed about your pet:</p>
                    <div className='r'>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Behavior problems" />
                            <Form.Check type="checkbox" label="Bleeding gums" />
                            <Form.Check type="checkbox" label="Breathing problems" />
                            <Form.Check type="checkbox" label="Coughing" />
                            <Form.Check type="checkbox" label="Diarrhea" />
                            <Form.Check type="checkbox" label="Eye bulging or bloodshot" />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                            <Form.Check type="checkbox" label="Gagging" />
                            <Form.Check type="checkbox" label="Lack of appetite" />
                            <Form.Check type="checkbox" label="Loss of balance" />
                            <Form.Check type="checkbox" label="Scooting" />
                            <Form.Check type="checkbox" label="Scratching" />
                            <Form.Check type="checkbox" label="Seems depressed" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Shaking head" />
                            <Form.Check type="checkbox" label="Sneezing" />
                            <Form.Check type="checkbox" label="Thirst and/or urination increased" />
                            <Form.Check type="checkbox" label="Vomiting" />
                            <Form.Check type="checkbox" label="Weakness" />
                            <Form.Check type="checkbox" label="Other" />
                        </Form.Group>

                    </div>


                    <Form.Group className="mb-3">
                        <Form.Label>If other, please explain:</Form.Label>
                        <Form.Control className='textbox' as="textarea" rows={2} />
                    </Form.Group>

                </Form>
            </div>

            <div className='alt-background'>
                <Form>

                <h2>Authorization</h2>
                <p>I hereby authorize the veterinarian to examine, prescribe for, or treat the above described pet. I assume responsibility for all charges incurred in the care of this animal. If also understand that these charges will be paid at the time of release and that a deposit may be required for surgical treatment.</p>

                <div className='r r-space'>
                    <div className='c'>
                        <Form.Label className='required'>Name</Form.Label>
                        <InputGroup className='mb-3' controlId='name'>
                            <Form.Control type="name" placeholder="First" />
                            <Form.Control type="name" placeholder="Last" />
                        </InputGroup>
                    </div>

                    <Form.Group className="mb-3">
                        <Form.Label className='required'>Date</Form.Label>
                        <Form.Control type="name" placeholder="mm/dd/yyyy" />
                    </Form.Group>
                </div>

                <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
            

        </div>
    );
}