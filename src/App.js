
import './App.css';
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js"
import Home from "./components/Home.js"
import Services from "./components/Services.js"
import OurStaff from './components/OurStaff.js';
import NewPetRegistration from './components/NewPetRegistration.js';
import ContactUs from './components/ContactUs.js';

import DentalCare from './components/services/DentalCare.js';
import Radiology from './components/services/Radiology.js';
import Surgery from './components/services/Surgery.js';
import Vaccinations from './components/services/Vaccinations.js';
import Microchipping from './components/services/Microchipping.js';
import NutritionalCounseling from './components/services/NutritionalCounseling.js';
import ParasitePrevention from './components/services/ParasitePrevention.js';
import Ultrasound from './components/services/Ultrasound.js';
import InHouseLaboratory from './components/services/InHouseLaboratory.js';
import Tonometry from './components/services/Tonometry';
import WellnessExams from './components/services/WellnessExams.js';
import Rabbits from './components/services/Rabbits.js';
import PuppyAndKitten from './components/services/PuppyAndKitten.js';
import PainManagement from './components/services/PainManagement.js';


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="new-pet-registration" element={<NewPetRegistration />} />
          <Route path="our-staff" element={<OurStaff />} />
          <Route path="contact-us" element={<ContactUs />} />

          <Route path='/services/dental-care' element={<DentalCare />} />
          <Route path='/services/radiology' element={<Radiology />} />
          <Route path='/services/surgery' element={<Surgery />} />
          <Route path='/services/vaccinations' element={<Vaccinations />} />
          <Route path='/services/microchipping' element={<Microchipping />} />
          <Route path='/services/nutritional-counseling' element={<NutritionalCounseling />} />
          <Route path='/services/parasite-prevention-and-control' element={<ParasitePrevention />} />
          <Route path='/services/ultrasound' element={<Ultrasound />} />
          <Route path='/services/in-house-laboratory' element={<InHouseLaboratory />} />
          <Route path='/services/tonometry' element={<Tonometry />} />
          <Route path='/services/wellness-exams' element={<WellnessExams />} />
          <Route path='/services/rabbits-and-small-mammals' element={<Rabbits />} />
          <Route path='/services/puppy-and-kitten-care' element={<PuppyAndKitten />} />
          <Route path='/services/pain-management' element={<PainManagement />} />

        </Route>
      </Routes>
    </HashRouter>

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
                <img src={process.env.PUBLIC_URL + "/images/home/map.png"} />
                <p>265 Gano Street
                    <br></br>
                    Providence, RI  02906
                    <br></br>
                    <br></br>
                    <b>Phone:</b> 401-272-2345
                    <br></br>
                    <b>Fax:</b> 401-272-1305
                </p>
            </div>
        </div>
        
        <hr></hr>
        
        <div id="symbols">
            <div id="icons">
              <a href='https://www.facebook.com/EastSideVeterinaryClinic' target='_blank'>
                <img id="facebook" src={process.env.PUBLIC_URL +"/images/home/facebooklogo.png"} />
              </a>
              <a href='https://www.petly.com' target='_blank'>
                <img id="petly" src={process.env.PUBLIC_URL+ "/images/home/petly-bubble.png"} />
              </a>
            </div>
            <p><b>We accept:</b></p>
            <img id="credit-cards" src={process.env.PUBLIC_URL + "/images/home/credit-cards.png"} />
            <img id="insurance" src={process.env.PUBLIC_URL + "/images/home/insurance.png"} />
        </div>       
    </footer>
    </div>
  );
}

export default App;
