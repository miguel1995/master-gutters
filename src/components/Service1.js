import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap';

class Service1 extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h2 style={{ color: '#f4d03f', marginTop: "4rem", marginBottom: "2rem" }}>ATLANTA SEAMLESS GUTTERS</h2>
                    <p className="smaller" >Seamless gutters done right by Master Gutters. Serving the Atlanta metropolitan area.</p>
                    <Row>
                        <Col md={6}>
                            <img style={{ float: "left", width: "100%" }} src="/images/service_seamless.jpg" alt="seamless gutters" />
                        </Col>

                        <Col md={6}>
                            <p>The easiest way to forget about gutter problems such as creasing, clogging and rust is by installing <strong>seamless aluminum gutters</strong>, they last a long time and are visually appealing, a factor that cannot only increase your home’s curb appeal but its market price as well. They are also perfect for both commercial and residential buildings.</p>
                            <p>We have a large list of satisfied customers under our belt and we guarantee your satisfaction.</p>


                            <p>Call us now at <strong>770-203-5897</strong> for a <strong>FREE Estimate</strong> on seamless gutters, installation and replacement services.</p>
                            <h3>What are seamless gutters?</h3>
                            <p>From endcap to endcap or corner is one section of gutter vs. gutters which come in 10’ sections and must be pieced together. Gutters are run out of an extruding machine in one continuous length, on site, to any length necessary for a particular building.</p>
                            <h3>Why do I need gutters?</h3>
                            <p>A properly installed set of gutters can protect your foundation, decrease maintenance and painting by controlling runoff and preventing splash back on your building. Safety can also be a concern if you have water dripping onto steps and walkways.</p>
                            <p>We do several things to insure you get the best seamless gutter system you can buy; we use a concealed hanger that is attached to your fascia with a screw, no nails to loosen or leak. We also make sure when it's needed to install flashing at the edge of your roof so water does not leak behind the gutters. These are two of the most common complaints we hear.</p>
                            <p>We use our gutter machines to manufacture the gutters on site to fit your home or business. We will design a system to suit your particular situation. A variety of accessories are incorporated into our custom installations to meet each customers unique requirements. Flip up downspout extensions, flat hose extensions, high volume downspouts, etc...</p>
                            <p><strong>Give us a call at 770-203-5897 for more information and a free estimate for your seamless gutters!</strong></p>
                        </Col>
                    </Row>

                </Container>
            </div>


        )
    }
}

export default Service1;