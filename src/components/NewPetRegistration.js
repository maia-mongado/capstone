import './NewPetRegistration.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function NewPetRegistration() {
    return (
        <div id='new-pet-registration'>
            <h1>New Pet Registration</h1>

            <div id='blurb'>
                <h2>New to Eastside Veterinary Clinic? Welcome!</h2>
                <p>We look forward to your first visit with us. Help us get to know you and your pet(s) and fill out the form below prior to your first visit. Thank you.</p>
            </div>

            <Form>


            <div className='col-2'>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="password" placeholder="First" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="password" placeholder="Last" />
                </Form.Group>
            </div>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Indicate the date for your appointment.</Form.Label>
                    <Form.Control type="password" placeholder="Enter date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pet-names">
                    <Form.Label>If you have other pets who are patients here, indicate their name(s) below.</Form.Label>
                    <Form.Control type="email" placeholder="Enter names" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
}