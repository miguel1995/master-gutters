import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
  Link,
  LinkContainer
} from "react-router-dom";

import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Faqs from './components/Faqs';
import {NavDropdown, Container, Navbar, Row, Col, Nav, Carousel, Button, Card } from 'react-bootstrap';
import Reviews from './components/Reviews';
import Service1 from './components/Service1';
import Service2 from './components/Service2';
import Service3 from './components/Service3';
import Service4 from './components/Service4';

function App() {
  return (
    <>
      <header >

        <Navbar bg="black" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="images/mg_black.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
              MasterGutters.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">HOME</Nav.Link>
                <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/seamless">SEAMLESS GUTTERS</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/covers">GUTTER COVERS</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/soffit">SOFFIT REPAIR</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/fascia">FASCIA REPAIR</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/faqs">FAQ'S</Nav.Link>
                <Nav.Link as={Link} to="/reviews">REVIEWS</Nav.Link>
                <Nav.Link as={Link} to="/contactus">CONTACT US</Nav.Link>

                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>




      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/seamless' element={<Service1 />} />
        <Route path='/covers' element={<Service2 />} />
        <Route path='/soffit' element={<Service3 />} />
        <Route path='/fascia' element={<Service4 />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contactus' element={<ContactUs />} />


      </Routes>

    </>


  );
}

export default App;
