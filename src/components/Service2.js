import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class Service2 extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h2 style={{ color: '#f4d03f', marginTop: "4rem", marginBottom: "2rem" }}>GUTTER COVERS & SCREENS</h2>
                    <p className="smaller" >Prevent clogged gutters by keeping out leaves and debris. They can be matched to the color of your roof or your existing gutters</p>


                    <Row>
                        <Col md={3}>

                            <img src="/images/img1.jpg"

                                style={{ width: "100%" }} alt="gutter covers in marietta" />

                            <img src="/images/img1.jpg"
                                style={{ width: "100%" }} alt="gutter covers in marietta" />

                            <img src="/images/img1.jpg"
                                style={{ width: "100%" }} alt="gutter covers in marietta" />
                        </Col>
                        <Col md={6}>


                                <p>Gutter covers are ideal for your home, they protect and increase its curb appeal and thus increase the overall value of your property.</p>
                                <p>Our gutter covers come in many different colors allowing us to match just about any home exterior, roof or existing gutters.</p>
                                <h3>Gutter Guard Features</h3>
                                <ul>
                                    <li>Maintain the distinctive look of your home.</li>
                                    <li>Prevent clogged gutters by keeping out leaves and debris.</li>
                                    <li>Twelve colors are available to blend in with the roof, including 16 oz. copper.</li>
                                    <li>Long lasting performance - year after year - with sturdy, durable .024 aluminum construction.</li>

                                </ul>


                                <h3>Gutter Guard Facts</h3>
                                <ul>
                                    <li>Come in five foot lengths and will install on new or existing gutters.</li>
                                    <li>May be installed under almost on any roof pitch from 4/12 to 15/12.</li>
                                    <li>They can be matched to the color of your roof or your existing gutters.</li>
                                    <li>They are secured to a hidden hanger and under the existing roof shingles with screws.</li>
                                    <li>They are fabricated from long lasting, strong .024 aluminum alloys.</li>
                                </ul>
                        </Col>
                        <Col md={3}>

                            <img src="/images/img1.jpg"

                                style={{ width: "100%" }} alt="gutter covers in marietta" />

                            <img src="/images/img1.jpg"
                                style={{ width: "100%" }} alt="gutter covers in marietta" />

                            <img src="/images/img1.jpg"
                                style={{ width: "100%" }} alt="gutter covers in marietta" />
                        </Col>

                    </Row>

                </Container>
            </div>
        )
    }
}

export default Service2;