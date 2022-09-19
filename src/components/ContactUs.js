import React, { Component } from 'react'
import { Container, Form, Button, Alert, Col, Row } from 'react-bootstrap';
import { FaMailBulk, FaFacebook, FaPhone } from "react-icons/fa";


class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      zipCode: "",
      email: "",
      telephone: "",
      bestTime: "",
      comment: ""
    };



    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZipCode = this.handleZipCode.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleTelephone = this.handleTelephone.bind(this);
    this.handleBestTime = this.handleBestTime.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleFirstName(event) {
    this.setState({ firstName: event.target.value })
  }
  handleLastName(event) {
    this.setState({ lastName: event.target.value })
  }
  handleCity(event) {
    this.setState({ city: event.target.value })
  }
  handleState(event) {
    this.setState({ state: event.target.value })
  }
  handleZipCode(event) {
    this.setState({ zipCode: event.target.value })
  }
  handleEmail(event) {
    this.setState({ email: event.target.value })
  }
  handleTelephone(event) {
    this.setState({ telephone: event.target.value })
  }
  handleBestTime(event) {
    this.setState({ bestTime: event.target.value })
  }
  handleComment(event) {
    this.setState({ comment: event.target.value })
  }


  handleSubmit() {
    console.log("firstName: " + this.state.firstName);
    console.log("lastName: " + this.state.lastName);
    console.log("city: " + this.state.city);
    console.log("state: " + this.state.state);
    console.log("zipCode: " + this.state.zipCode);
    console.log("email: " + this.state.email);
    console.log("telephone: " + this.state.telephone);
    console.log("bestTime: " + this.state.bestTime);
    console.log("comment: " + this.state.comment);

    const data = {


      firstName: this.state.firstName,
      lastName: this.state.lastName,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      email: this.state.email,
      telephone: this.state.telephone,
      bestTime: this.state.bestTime,
      comment: this.state.comment

    }

    fetch("https://formsubmit.co/ajax/mastergutters1961@hotmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert("Message sent");

      })
      .catch(error => {
        console.log(error);
        alert("Error. Try Again");

      });


  }

  render() {
    return (
      <div>
        <Container>

          <Row>
            <Col md={4}>
              <h4 style={{ color: '#f4d03f', marginTop: "4rem", marginBottom: "2rem" }}>REQUEST ESTIMATE</h4>


              <p>We will be happy to provide you with the best service. Call us, write us via whatapp, follow us on social networks or if you prefer, fill out the following form and we will respond as soon as possible</p>
              


              <p> <FaPhone></FaPhone> 770-203-5897</p>
              <p><FaFacebook></FaFacebook> <a href="https://www.facebook.com/gutters1961">www.facebook.com/gutters1961</a></p>
              <p><FaMailBulk></FaMailBulk> mastergutters1961@hotmail.com</p>


              <a href="https://wa.me/+17702035897/?text=Hello%20*Master%20Gutters*.%20I%20am%20interested%20in%20acquiring%20one%20of%20your%20services." target="_blank">
                <img src="images/logo-wasap.png" width="50" height="50"/>
              </a>
            
            </Col>
            <Col md={8}>


              <div style={{ backgroundColor: "#e9ecef", padding: "1rem", marginTop: "3rem" }}>
                <Form  >
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={this.handleFirstName} />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={this.handleLastName} />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={this.handleCity} />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={this.handleState} />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={this.handleZipCode} />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={this.handleEmail} />

                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={this.handleTelephone} />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Best Time To Call</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={this.handleBestTime} />

                  </Form.Group>


                  <Form.Group className="mb-3" controlId="formBasicComment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control type="textarea" as="textarea" placeholder="" onChange={this.handleComment} />
                  </Form.Group>


                  <br />


                </Form>
                <Button variant="warning" type="submit" onClick={this.handleSubmit}>
                  Submit
                </Button>






              </div>

            </Col>


          </Row>





        </Container>


      </div>
    )
  }
}

export default ContactUs;
