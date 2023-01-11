import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import { HashLink } from "react-router-hash-link";

export default function Home() {
    return (
        <div id='home'>
    
            <div id="covid-banner">
                <label><b>Please make sure to read our <HashLink to="/#covid-advisory">COVID-19 advisory</HashLink> below.</b></label>
            </div>

            <h1>Eastside Veterinary Clinic</h1>

            <div id="mission-statement">
                <p><em><b>Our mission</b> is to provide high quality affordable veterinary medical and surgical services in a compassionate, informed environment. We strive to deliver exceptional patient care and superior client satisfaction.</em></p>
            </div>

            <div id="intro-pics">
                <img src={process.env.PUBLIC_URL + "/images/home/eside1.jpeg"}></img>
                <img src={process.env.PUBLIC_URL + "/images/home/eside2.jpeg"}></img>
            </div>

            <div id="description">
                <p>​Opened in 2000, Eastside Veterinary Clinic is a full service veterinary facility, caring for animals of the Greater Providence, Rhode Island Area. We are staffed with four highly experienced veterinarians and many compassionate, skilled veterinary technicians. In addition to providing services to the public, we partner with local shelters to promote adoption and affordable spay/neuter programs. We are able to provide both routine and specialty services. Please call to learn more about our family focused  community practice.
                </p>

            </div>

            <div id='my-carousel'>
                <Carousel interval={null}>
                    <Carousel.Item>
                        {/* <img
                        className="w-100"
                        src={process.env.PUBLIC_URL + '/images/home/navy-rectangle.png'}
                        alt="First slide"
                        />
                        <Carousel.Caption> */}
                        <img
                        src={process.env.PUBLIC_URL + '/images/home/Stars.png'}
                        />
                        <p>The entire staff makes us feel like family.
                        </p>
                        <span>-Elvira</span>
                        {/* </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={process.env.PUBLIC_URL + '/images/home/Stars.png'}
                        />
                        <p>Dr Dina is so caring and thorough and very knowledgeable! Sarah greeted me and returned Honey to me with genuine care and courtesy, Kathy is a pro receptionist with calm and proficiency all the time in person or on the phone.
                        </p>
                        <span>-Eileen</span>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={process.env.PUBLIC_URL + '/images/home/Stars.png'}
                        />
                        <p>We love Dr. Murphy! She is so good with us and with our elder animals. She is the best.
                        </p>
                        <span>-Anonymous</span>
                    </Carousel.Item>
                </Carousel>
            </div>

        <div id="covid-advisory">
            <br></br>
            <h2>COVID-19 Advisory</h2>
            <h3>Beginning June 15, 2021</h3>
            <p>
                Eastside Veterinary Clinic is committed to keeping our facility open, 
                so that we may continue to provide necessary medical care for your pets.
                <br></br>
                In order to do so, we must practice an abundance of caution 
                and take every step we can to keep our community, our doctors, and our staff healthy.
                <br></br>
                If you are here for an appointment, we are asking that only <b>one (1)</b> person enter with the pet.
                <br></br>
                <br></br>
                <b>Please be sure that:</b>
            </p>
            
            <ol>
                <li>
                    You call in advance so we may prepare everything that your pet needs.
                </li>
                <li>
                    You are wearing a cloth face covering and that it remains on for your entire visit.
                </li>
                <li>
                    You keep a distance of <b>six (6)</b> feet from others, and remain seated in the designated areas
                    in both our waiting and exam rooms while we care for your pet.
                </li>
                <li>
                    Please <b>do not enter the facility if you are showing signs or symptoms of COVID-19</b>;
                    This includes coughing, fever, shortness of  breath and other flu/cold-like symptoms.
                </li>
            </ol>
            
            <p>
                <b>If you are ill, and your pet is in need of medical care, call us at 401-272-2345.</b>
                <br></br>
                If you have questions or concerns with entering our facility, please call when you arrive.
                We are still able to provide curbside service in many situations.
                <br></br>
                If you are in need of medications or supplies for your pet, we will continue to bring everything out to you!
                <br></br>
                For more info on vet clinics during this pandemic, see our <a href='#'>infographic</a>.
                <br></br>
                <br></br>
                ​We thank you for your understanding and cooperation in our joint effort to keep our community healthy.
            </p>
        </div>

            
        </div>
    );
}