
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
    </div>
  );
}

export default App;
