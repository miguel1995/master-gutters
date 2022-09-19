import React, { Component } from 'react'
import { Container, Navbar, Row, Col, Nav, Carousel, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
class Home extends Component {





    render() {



        return (




            <div className="App">
                <div class="parallax"></div>

                <Row>
                    <Col md={12}>

                        <Carousel >
                            <Carousel.Item
                            >
                                <img
                                    className="d-block w-100"
                                    src="images/img1.jpg"
                                    alt="First slide"
                                    height={500}

                                />
                                <Carousel.Caption style={{


                                    top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold'
                                }}>
                                    <h1>MASTER GUTTERS</h1>
                                    <p>Call today at 770-203-5897 to request a free estimate on gutters, gutter covers, fascia or soffit replacements.</p>
                                    <Link to="/contactus">
                                        <Button variant="warning"
                                            style={{ fontWeight: 'bold' }}
                                        >

                                            Request and stimate
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images/img2.jpg"
                                    alt="Second slide"
                                    height={500}
                                />

                                <Carousel.Caption style={{


                                    top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold'
                                }}>
                                    <h1>MASTER GUTTERS</h1>
                                    <p>Call today at 770-203-5897 to request a free estimate on gutters, gutter covers, fascia or soffit replacements.</p>
                                    <Link to="/contactus">

                                        <Button variant="warning"
                                            style={{ fontWeight: 'bold' }}>
                                            Request and stimate
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="images/img1.jpg"
                                    alt="Third slide"
                                    height={500}

                                />

                                <Carousel.Caption style={{


                                    top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold'
                                }}>

                                    <h1>MASTER GUTTERS</h1>
                                    <p>Call today at 770-203-5897 to request a free estimate on gutters, gutter covers, fascia or soffit replacements.</p>
                                    <Link to="/contactus">
                                        <Button variant="warning"
                                            style={{ fontWeight: 'bold' }}>
                                            Request and stimate
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </Col>

                </Row>
                <Container className='App-content'>


                    <Row style={{ marginTop: '4rem' }}>
                        <Row>

                            <Col md={12}>
                                <img
                                    alt=""
                                    src="images/mg_white.png"
                                    width="40%"

                                    className="d-inline-block align-top"
                                />{' '}

                                <h1 style={{ color: '#f4d03f' }}>SERVICES</h1>
                                <p>PROFESSIONAL GUTTER SERVICES IN THE ATLANTA AREA</p>

                            </Col>

                        </Row>
                        <Row >

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
                                        <Link to="/seamless">
                                            <Button variant="outline-dark">learn more</Button>
                                        </Link>
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
                                        <Link to="/covers">

                                            <Button variant="outline-dark">learn more</Button>
                                        </Link>
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
                                            Whether your old soffit is rotten; whether is a small area or new installations, Master Gutters has you covered...
                                        </Card.Text>
                                        <Link to="/soffit">

                                            <Button variant="outline-dark">learn more</Button>
                                        </Link>
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
                                        <Link to="/fascia">

                                            <Button variant="outline-dark">learn more</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </Row>

                </Container>
                <Row style={{ background: '#f4d03f', border: '10rem' }}>

                    <Col md={12} style={{ marginTop: '4rem', marginBottom: '3rem' }}>

                        <h1 style={{ fontWeight: 'bold' }}>The Atlanta gutter experts</h1>
                        <p>Call today at <span style={{ fontWeight: 'bold' }}>770-203-5897</span> to request a free estimate on gutters, gutter covers, fascia or soffit replacements.</p>
                        <Link to="/contactus">
                            <Button variant="outline-dark" style={{ fontWeight: 'bold' }}>Request and stimate</Button>
                        </Link>

                    </Col>

                </Row>

                <Row style={{ border: '10rem' }}>
                    <Col md={12}>
                        <h2>Did you like our work?</h2>
                        <p> Write your opinion in the comments section and follow us on our <a href='https://www.facebook.com/gutters1961'>social networks</a>. This way you will help us to improve our services</p>
                        <Link to="/reviews">
                            <Button variant="outline-dark">comment</Button>
                        </Link>
                    </Col>

                </Row>

                <div  style={{position: 'fixed', top: '50%', right: 0}}>
                    <a href="https://wa.me/+17702035897/?text=Hello%20*Master%20Gutters*.%20I%20am%20interested%20in%20acquiring%20one%20of%20your%20services." target="_blank">
                        <img src="images/logo-wasap.png" width="50" height="50" />
                    </a>

                </div>
            </div>
        )
    }
}

export default Home;