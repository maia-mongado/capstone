import './Home.css'

export default function Home() {
    return (
        <div id='home'>
    
            <div id="covid-banner">
                <label><b>Please make sure to read our <a href="#covid-advisory">COVID-19 advisory</a> below.</b></label>
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
                <br></br>
                <br></br>
                This is the case with Yan's Cuisine, a Chinese restaurant located near Brown University's campus in Providence, RI. Though they have delicious food, their website is hard to navigate.
                </p>

            </div>
        </div>
    );
}