
import './App.css';
import { Routes, Route } from "react-router-dom";
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
    </div>
  );
}

export default App;
