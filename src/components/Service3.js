import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
  
class Service3 extends Component {
  render() {
    return (
        
        <Container>
            <h2 style={{ color: '#f4d03f', marginTop: "4rem", marginBottom: "2rem" }}>FASCIA REPAIR & INSTALLATIONS</h2>


            <Row>
                <Col md={9}>
                    <div>First, what is soffit and what is fascia?</div><br/>
                    <div><strong>Soffit</strong> is the underside element of a building most commonly found under the
                        eaves
                        on the exterior of a house. The <strong>soffit</strong> extends from the side of the house to the edge of the
                        eave or
                        fascia.
                    </div>
                    
                    <p>A <strong>"fascia board"</strong> is usually made out of wood but can also be metal or other materials, it caps the end of rafters outside a building and optionally it is used to hold gutters.</p>
                    <div><strong>Why a house needs soffit or fascia?</strong></div>
                    <ul>
                        <li>The soffit and fascia protect your home from water damage while improving its appearance.</li>
                        <li>Eliminate extra costs for painting those hard-to-reach places, vinyl soffit will maintain its appearance for many years.</li>
                        <li>They control moisture and rotting problems inherent in eaves and overhangs.</li>
                        <li>Our aluminum materials (soffit and fascia) are .019 in thickness.</li>
                        <li>As with all our installations we warranty our workmanship to be free from
                            defect for a period of five years.
                        </li>
                        <li>They increase the value of your property.</li>
                    </ul>

                </Col>
                <Col md={3}>
                    <img src="/images/img1.jpg" 
                    style={{ width: "100%" }}
                    alt="before soffit installation"/>
                    <img src="/images/img1.jpg" 
                    style={{ width: "100%" }}
                    alt="before soffit installation"/>


                </Col>

            </Row>

        </Container>

    )
  }
}

export default Service3;