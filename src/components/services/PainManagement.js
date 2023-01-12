import './Shared.css';

export default function PainManagement() {
    return (
        <div className='service'>
            <h1>Pain Management</h1>
            <img src={process.env.PUBLIC_URL + "/images/services/pain-management.jpeg"}></img>
            <p>
            ​The practice of high-quality veterinary medicine focuses on the entire patient – from medical issues that affect physical functioning, to emotional and psychological issues that affect well-being. Experiencing pain can affect the body’s physical functioning and can have a detrimental effect on a patient’s well-being and state of mind. That’s why pain management is among our primary considerations when we are treating a pet for any medical condition. 
            <br></br>
            <br></br>
            Our approach to pain management involves anticipating potentially painful procedures and taking steps to manage pain from the outset as well as continuing to manage pain throughout your pet’s treatment and recovery process. Did you know that various types of pain can look different in animals? For example, a dog with chronic arthritis may exhibit very subtle signs of pain that can go unnoticed unless you know what to look for. 
            <br></br>
            <b>Fortunately, our staff of compassionate, caring professionals is skilled in recognizing signs of pain in animals and developing an individualized plan for managing pain in our patients.</b>
            <br></br> 
            <br></br>
            From routine procedures (such as a spays or dental cleanings), to more advanced medical treatments (such as bone surgeries or cancer treatments), to chronically painful conditions (such as arthritis or back pain), we are dedicated to providing safe and effective pain management to every patient. We will also help you recognize signs of pain in your pet so that we can modify his or her pain management plan when necessary. 
            <br></br>
            <br></br>
            Recognizing and alleviating pain in our patients is at the very heart of quality, compassionate patient care.
            <br></br>
            <b>We don’t take pain management for granted and will employ all our skills to help ensure your pet’s comfort, well-being, and full recovery.</b>
            </p>
        </div>
    );
}