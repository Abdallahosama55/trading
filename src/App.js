import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import Navbar_comp from './components/Navbar/Navbar';
import Forex from './components/Forex/Forex';
import Home from './components/Home/Home';
import Cyrpto from './components/Cyrpto/Cyrpto'
import Contactus from './components/Contactus/Contactus';
import Exchange from './components/Exchange/Exchange';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css';
import About_us from './components/About us/About_us';



function App() {
  return (
    <div className="App">
<Router>


    <Navbar_comp/>
    
    <Routes>
    <Route path="" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="About_us" element={<About_us />} />
      <Route path="cyrpto" element={<Cyrpto/>} />
      <Route path="Exchange" element={<Exchange/>}/>
      <Route path="Forex" element={<Forex/>} />
      <Route path="Contactus" element={<Contactus/>} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    <Footer />
 

  </Router>
    </div>
  );
}

export default App;
