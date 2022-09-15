import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, Carousel, Nav, Navbar } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header >

        <Navbar bg="black" variant="dark">
          <Container>
            <Row>
              <Col md={1}>
                <img
                  src="images/mg_black.png"
                  alt="Master Gutters"
                />
              </Col>
              <Col md={5}>
                <Navbar.Brand href="#home">MasterGutters.com</Navbar.Brand>
              </Col>

              <Col md={6}>
                <Nav className="me-auto">
                  <Nav.Link className='Nav-Link' href="#home">HOME</Nav.Link>
                  <Nav.Link className='Nav-Link' href="#features">SERVICES</Nav.Link>
                  <Nav.Link className='Nav-Link' href="#pricing">FAC'S</Nav.Link>
                  <Nav.Link className='Nav-Link' href="#pricing">REVIEWS</Nav.Link>
                  <Nav.Link className='Nav-Link' href="#pricing">CONTACT US</Nav.Link>

                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar>

      </header>
      <Row>
        <Col md={12}>

          <Carousel >
            <Carousel.Item
            >
              <img
                className="d-block w-100"
                src="images/img1.jpg"
                alt="First slide"
              />
              <Carousel.Caption style={{


                top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold'
              }}>
                <h1>MASTER GUTTERS</h1>
                <p>Call today at 404-933-4577 to request a free estimate on gutters, gutter covers, fascia or soffit replacements.</p>
                <Button variant="warning"
                  style={{ fontWeight: 'bold' }}>
                  Request and stimate
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/img2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption style={{


                top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold'
              }}>
                <h1>MASTER GUTTERS</h1>
                <p>Call today at 404-933-4577 to request a free estimate on gutters, gutter covers, fascia or soffit replacements.</p>
                <Button variant="warning"
                  style={{ fontWeight: 'bold' }}>
                  Request and stimate
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/img1.jpg"
                alt="Third slide"
              />

              <Carousel.Caption style={{


                top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold'
              }}>
                <h1>MASTER GUTTERS</h1>
                <p>Call today at 404-933-4577 to request a free estimate on gutters, gutter covers, fascia or soffit replacements.</p>
                <Button variant="warning"
                  style={{ fontWeight: 'bold' }}>
                  Request and stimate
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </Col>

      </Row>
      <Container className='App-content'>


        <Row style={{ marginTop: '4rem' }}>
          <Row>

            <Col md={12}>

              <h1 style={{ color: '#f4d03f' }}>SERVICES</h1>
              <p>PROFESSIONAL GUTTER SERVIC
                ES IN THE ATLANTA AREA</p>

            </Col>

          </Row>
          <Row>

            <Col md={3} lg={3}>

              <Card border="light" style={{ width: '18rem' }}>
                <Card.Title>
                  Seamless Gutters
                </Card.Title>
                <p style={{ fontSize: '0.6rem' }}>CUSTOM CUT ON-SITE FOR AN EXACT FIT</p>


                <Card.Img variant="outline-dark" src="images/img1.jpg" />
                <Card.Body>
                  <Card.Text>
                    Master gutters are made to measure and they are cut right on your property for a perfect fit.
                  </Card.Text>

                  <Button variant="outline-dark">learn more</Button>
                </Card.Body>
              </Card>

            </Col>
            <Col md={3} lg={3}>

              <Card border="light" style={{ width: '18rem' }}>
                <Card.Title>
                  Gutter Covers
                </Card.Title>
                <p style={{ fontSize: '0.6rem' }}>TIRED OF CLEANING YOUR GUTTERS</p>


                <Card.Img variant="outline-dark" src="images/img1.jpg" />
                <Card.Body>
                  <Card.Text>
                    Protect your gutters from excessive debris and avoid frequent cleanings... Lalo's Gutters offers several options for you to choose from...
                  </Card.Text>

                  <Button variant="outline-dark">learn more</Button>
                </Card.Body>
              </Card>

            </Col>
            <Col md={3} lg={3}>

              <Card border="light" style={{ width: '18rem' }}>
                <Card.Title>
                  Soffit
                </Card.Title>
                <p style={{ fontSize: '0.6rem' }}>REPAIRS OR NEW INSTALLATIONS.</p>


                <Card.Img variant="outline-dark" src="images/img1.jpg" />
                <Card.Body>
                  <Card.Text>
                    Whether your old soffit is rotten; whether is a small area or new installations, Lalo's Gutters has you covered...
                  </Card.Text>

                  <Button variant="outline-dark">learn more</Button>
                </Card.Body>
              </Card>

            </Col>
            <Col md={3} lg={3}>

              <Card border="light" style={{ width: '18rem' }}>
                <Card.Title>
                  Fascia Boards
                </Card.Title>
                <p style={{ fontSize: '0.6rem' }}>
                  FASCIA BOARDS INSTALLED JUST RIGHT!
                </p>


                <Card.Img variant="outline-dark" src="images/img1.jpg" />
                <Card.Body>
                  <Card.Text>
                    The gutters are made to measure and they are cut right on your property for a perfect fit.
                  </Card.Text>

                  <Button variant="outline-dark">learn more</Button>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </Row>

      </Container>
      <Row style={{ background: '#f4d03f', border: '10rem' }}>

        <Col md={12} style={{ marginTop: '4rem', marginBottom: '3rem' }}>

          <h1 style={{ fontWeight: 'bold' }}>The Atlanta gutter specialist</h1>
          <p>Call today at <span style={{ fontWeight: 'bold' }}>404-933-4577</span> to request a free estimate on gutters, gutter covers, fascia or soffit replacements.</p>
          <Button variant="outline-dark" style={{ fontWeight: 'bold' }}>Request and stimate</Button>

        </Col>

      </Row>
      <Row>
        <Row><Col md={12}>TESTIMONIALS</Col></Row>
        <Row>
          <p>"Master Gutters did an amazing job installing seamless gutters. They showed up right on time and worked quickly!"</p>
        </Row>
      </Row>

    </div>
  );
}

export default App;
