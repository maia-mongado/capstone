import './Shared.css';

export default function Radiology() {
    return (
        <div className='service'>
            <h1>Radiology (X-Rays)</h1>
            <img src={process.env.PUBLIC_URL + "/images/services/radiology.jpeg"}></img>
            <p>
            Radiography is a valuable diagnostic tool in veterinary medicine. As we continually strive to offer the highest quality medicine and diagnostic testing, we are pleased to offer radiology services as a means of providing excellent care to our patients. 
            <br></br>
            A radiograph (sometimes called an x-ray) is a type of photograph that can look inside the body and reveal information that may not be discernable from the outside. Radiography can be used to evaluate almost any organ in the body, including the heart, lungs, and abdominal organs, as well as the bones.
            <br></br>
            <br></br>
            ​<b>​Radiography is painless, safe, and completely non-invasive, and it uses only very low doses of radiation.</b> Because the level of radiation exposure needed to perform radiography is very low, even pregnant females and very young pets can undergo radiography. 
            <br></br>
            <br></br>
            Radiographs can be used to evaluate bones as well as the size, shape, and position of many of the body’s organs. The size of organs is important because some medical conditions—such as kidney, heart, or liver disease—can alter the size of these organs. The shape and position of organs can be altered or distorted by certain medical conditions, including intestinal blockage or cancer. Tumors, depending on their size and location, can also sometimes be detected using radiography. Radiography can also be used to diagnose bladder stones, broken bones, chronic arthritis, certain spinal cord diseases, and a variety of other conditions.
​            <br></br>
            <br></br>
            Radiographs are an important tool that can help us make a correct diagnosis for your pet. <b>Our radiology service is staffed by caring, skilled professionals who will provide state-of-the-art care with compassion and expertise.</b>
            </p>
        </div>
    );
}