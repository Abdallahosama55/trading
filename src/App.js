import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ReactGA from 'react-ga';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import Navbar_comp from './components/Navbar/Navbar';
import Forex from './components/Forex/Forex';
import Home from './components/Home/Home';
import Cyrpto from './components/Cyrpto/Cyrpto';
import Contactus from './components/Contactus/Contactus';
import Exchange from './components/Exchange/Exchange';
import Signals from './components/Signals/Signals';
import About_us from './components/About us/About_us';
import SignalsForex from './components/SignalsForex/SignalsForex';
import PrivacyPolicy from './components/PrivaceyPolicey/PrivaceyPolicey';
function App() {
  useEffect(() => {
    ReactGA.initialize('G-PL2LJ1Z4FC');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <div className="">
      <Navbar_comp />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/About_us" element={<About_us />} />
          <Route path="/cyrpto" element={<Cyrpto />} />
          <Route path="/Exchange" element={<Exchange />} />
          <Route path="/Forex" element={<Forex />} />
          <Route path="/Signals" element={<Signals />} />
          <Route path="/SignalsForex" element={<SignalsForex />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
