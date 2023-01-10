
import './App.css';
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js"
import Home from "./components/Home.js"
import Services from "./components/Services.js"
import OurStaff from './components/OurStaff.js';
import NewPetRegistration from './components/NewPetRegistration.js';
import ContactUs from './components/ContactUs.js';


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
                <img id="facebook" src={process.env.PUBLIC_URL +"/images/home/facebooklogo.png"} />
                <img id="petly" src={process.env.PUBLIC_URL+ "/images/home/petly-bubble.png"} />
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
