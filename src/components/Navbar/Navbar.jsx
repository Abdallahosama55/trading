import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query'; // Import useMediaQuery hook
import logo from '../../assets/AHA Logo Full Black PNG (1).png';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../Redux/LanguageSlice';
import Form from 'react-bootstrap/Form';

function Navbar_comp() {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)'); // Check if screen size is mobile

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };
  const isEnglish = useSelector((state) => state.language.isEnglish);
  const dispatch = useDispatch();
console.log("here language" ,isEnglish)
  const toggleLanguage = () => {
    dispatch(setLanguage(!isEnglish));
  };

  return (
    <Navbar bg="light" expand="lg" expanded={expanded} dir={isEnglish?'ltr':'rtl'} className=' bg-light'>
      <Container className=' bg-light'>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" height="50" className="me-md-5 pe-md-5" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleNavbarToggle} />
        <Navbar.Collapse>
          <Nav className=" text-black me-auto justify-content-between ms-md-5 ps-md-5 align-items-center" dir={isEnglish?'ltr':'rtl'}>
            <NavLink to="/" className="me-3 link-nav  text-dark" onClick={handleLinkClick}>
              {isEnglish?"Home":"الرئيسية"}
            </NavLink>
            
{!isMobile && ( // Render NavDropdown only if not on mobile
              <NavDropdown title={isEnglish?"Forex":"التداول "} id="basic-nav-dropdown" className="me-3 link-nav  text-dark" onClick={handleLinkClick}>
                <NavDropdown.Item as={NavLink} to="/Forex">
                  {isEnglish?"Forex":"  التداول"}
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/SignalsForex">
                {isEnglish?"Signals":" اشارات VIP "}
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {isMobile && ( // Render NavDropdown only if not on mobile
            <>
            <NavLink to="/Forex" className="me-3 link-nav text-dark" onClick={handleLinkClick}>
              {isEnglish ? "Forex" : "التداول  "}
            </NavLink>
            <NavLink to="/SignalsForex" className="me-3 link-nav text-dark" onClick={handleLinkClick}>
              {isEnglish ? "Signals " : "  اشارات VIP"}
            </NavLink>
          </>
          )}
        
            {!isMobile && ( // Render NavDropdown only if not on mobile
              <NavDropdown title={isEnglish?"Crypto":"العملات الرقمية"} id="basic-nav-dropdown" className="me-3 link-nav  text-dark" onClick={handleLinkClick}>
                <NavDropdown.Item as={NavLink} to="/cyrpto">
                  {isEnglish?"Crypto Card":"كارت العملات الرقمية"}
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Exchange">
                {isEnglish?"Crypto Services":"  خدمات العملات الرقمية"}
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {isMobile && ( // Render NavDropdown only if not on mobile
            <>
            <NavLink to="/cyrpto" className="me-3 link-nav text-dark" onClick={handleLinkClick}>
              {isEnglish ? "Crypto Card" : "كارت العملات الرقمية"}
            </NavLink>
            <NavLink to="/Exchange" className="me-3 link-nav text-dark" onClick={handleLinkClick}>
              {isEnglish ? "Crypto Services" : "خدمات العملات الرقمية"}
            </NavLink>
          </>
          )}

          <NavLink to="/Signals" className="me-3 link-nav text-dark" onClick={handleLinkClick}>
  {isEnglish ? "VVIP Signals" : "إشارات VVIP"}
</NavLink>
<NavLink to="/About_us" className="me-3 link-nav text-dark" onClick={handleLinkClick}>
  {isEnglish ? "About Us" : "معلومات عنا"}
</NavLink>
<NavLink to="/Contactus" className="me-3 link-nav text-dark" onClick={handleLinkClick}>
  {isEnglish ? "Contact" : "اتصل بنا"}
</NavLink>

          </Nav>

          <Nav className="ms-auto gap-4  justify-content-center align-items-center d-flex">


       
            <Nav.Link
              href="https://www.vantagemarkets.com/open-live-account/?affid=MTgwMTMxNw%3D%3D"
              className="rounded-4 text-white bg-dark ps-4 pe-4 shadow fw-bold mt-1"
              onClick={handleLinkClick}
            >
            {isEnglish ? "Register" : "التسجيل "}
              
            </Nav.Link> 
            
            <Form className=' ' dir="rtl">
            <Form.Check // prettier-ignore
              type="switch"
              className='  '
       
              onClick={toggleLanguage}
              id="custom-switch"
              label=   {isEnglish ? 'Ar' : 'En'}
             
            />
         
          </Form>
   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_comp;
