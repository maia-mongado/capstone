import './Shared.css';

export default function Ultrasound() {
    return (
        <div className='service'>
            <h1>Ultrasound</h1>
            <img src={process.env.PUBLIC_URL + "/images/services/ultrasound.jpeg"}></img>
            <p>
            Although humans and animals are different in many ways, some advances in human medicine are also very useful for veterinary patients. One of these advances, diagnostic ultrasound, has proven to be a powerful tool in veterinary medicine. As a practice, one of our goals is to offer state-of-the-art medicine and diagnostic testing; so we are pleased to offer ultrasound services as a means of providing a higher level of quality care to our patients. 
            <br></br>
            <br></br>
            Ultrasonography is a type of diagnostic technique that uses ultrasound waves to produce an imaging study. This means that when we perform ultrasonography, we can see internal images of the patient’s body. Unlike some other imaging studies, like x-rays, ultrasonography does not use radiation. Instead, ultrasonography uses high-frequency sound (ultrasound) waves to create a picture of what is inside your pet’s body. <b>Ultrasonography is a completely non-invasive, painless way to diagnose and evaluate many common diseases.</b>
            <br></br>
            <br></br>
            An ultrasound machine generates ultrasound waves. The machine is connected to a small probe that is held gently against your pet’s skin. The probe sends out painless ultrasound waves that bounce off of structures (for example, organs) in your pet’s body and return to a sensor inside the ultrasound machine. The ultrasound equipment collects these reflected “echoes” and uses them to generate images that are viewable on a screen. Ultrasound waves can generate excellent images of abdominal organs, including the liver, spleen, gallbladder, and kidneys. It is also useful for assessing fetal health and monitoring pregnancy in breeding animals, and it can help us diagnose and stage (determine the severity of) some forms of cancer.
            <br></br>
            <br></br>
            ​Because ultrasound images are produced in real time, this technology can be used to evaluate the heart as it beats. This can help us detect abnormalities in the motion of heart valves, blood flow through the heart, and contractions of the heart muscle. It can also be used to assess the heart for defects. 
            <br></br>
            <b>As we strive to provide our patients with the highest quality medicine and diagnostic testing, we are pleased to offer ultrasound as one of our diagnostic capabilities.</b>
            </p>
        </div>
    );
}