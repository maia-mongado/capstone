import './Shared.css';

export default function Surgery() {
    return (
        <div className='service'>
            <h1>Surgery</h1>
            <img src={process.env.PUBLIC_URL + "/images/services/surgery.jpeg"}></img>
            <p>
            ​In our continuing efforts to offer the highest quality veterinary medicine, we are pleased to provide a wide range of surgical services for our patients. From routine surgical procedures, such as spaying and neutering, to more complex surgeries, we look forward to the opportunity to care for your pet’s surgical needs. 
            <br></br>
            <br></br>
            <b>Our staff is highly skilled in performing veterinary surgeries and will make every effort to ensure that your pet receives the very best care.</b>
            <br></br>
            Our focus on patient safety, pain management, and employing the most current surgical practices is designed to exceed your expectations and put your concerns to rest. 
            ​<br></br>
            <br></br>
            ​Our staff of compassionate, caring professionals will monitor your pet before, during, and after surgery and will take exceptional care to ensure a safe and complete recovery for your pet. We will also address any questions or concerns you may have about surgery, including concerns about anesthesia, pain management, or postoperative care.
            <br></br>
            When your pet is ready to go home, we will review your postoperative care and medication instructions. If any questions arise after your pet returns home or at any other time during the postoperative period, call us. We welcome your questions and will do all we can to help your pet recover fully. Help is only a phone call away. 
            <br></br>
            <br></br>
            ​Surgery can be a source of anxiety and stress for many pet owners. Maybe you worry about whether your pet will be well cared for, or perhaps you have concerns about adequate precautions and monitoring. 
            <br></br>
            Let us address your concerns. <b>Whether your pet needs minor surgery or a complex procedure, call us.</b> Let’s discuss how our surgical services can benefit your pet.
            </p>
        </div>
    );
}