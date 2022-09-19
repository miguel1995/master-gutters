import React, { Component } from 'react'
import { collection, getDocs, addDoc } from "firebase/firestore";
import db from '../firebase';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Rating from './Raiting';


class Reviews extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            comment: "",
            score: 0,
            comentarios: [
                {
                }
            ]
        };


        this.handleNombre = this.handleNombre.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleScore = this.handleScore.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    componentDidMount() {
        getComentarios().then((data) => {


            this.setState({ comentarios: data })

        })
    }


    handleNombre(event) {

        this.setState({ nombre: event.target.value });
    }

    handleComment(event) {

        this.setState({ comment: event.target.value });

    }

    handleScore(value) {

        this.setState({ score: value });

    }

    handleSubmit() {
        addComentario({
            comentario: this.state.comment,
            score: this.state.score,
            nombre: this.state.nombre,
            fecha: Date.now()

        });
    }

    render() {


        return (
            <div>



                <Container>
                    <h2 style={{
                        color: '#f4d03f',
                        marginTop: "4rem",
                        marginBottom: "2rem",
                        textAlign: "center"
                    }}>COMMENTS</h2>

                    <Row>
                        <Col md={5}>
                            <p>What's your opinion?</p>
                            <div style={{ backgroundColor: "#e9ecef", padding: "1rem" }}>
                                <Form >
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="" onChange={this.handleNombre} />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicComment">
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control type="textarea" as="textarea" placeholder="" onChange={this.handleComment} />
                                    </Form.Group>




                                    <Form.Group className="mb-3" controlId="formBasicScore">
                                        <Form.Label>How do you rate us?</Form.Label>
                                    </Form.Group>

                                    <Rating onScore={this.handleScore} />

                                    <br />
                                   
                                    
                                </Form>
                                <Button variant="warning" type="submit" onClick={this.handleSubmit}>
                                        Submit
                                    </Button>
                                
                           

                           


                            </div>

                        </Col>
                        <Col md={7}>
                            {this.state.comentarios.map(function (d, idx) {
                                return (
                                    <div key={idx}>


                                        <Card key={idx}>
                                            <Card.Header>
                                                <Rating initial={d["score"]}
                                                />


                                            </Card.Header>
                                            <Card.Body>
                                                <blockquote className="blockquote mb-0">
                                                    <p>
                                                        {' '}
                                                        {d["comentario"]}{' '}
                                                    </p>
                                                    <footer className="blockquote-footer">
                                                        <cite title="Source Title">{d["nombre"]}</cite>
                                                    </footer>
                                                </blockquote>
                                            </Card.Body>
                                        </Card>

                                        <br />


                                    </div>


                                )
                            })}
                        </Col>

                    </Row>

                </Container>

            </div>
        )
    }
}

async function getComentarios() {

    const querySnapshot = await getDocs(collection(db, "comentarios"));

    let comentarios = []


    querySnapshot.forEach((doc) => {
        comentarios.push({
            nombre: doc.data()['nombre'],
            comentario: doc.data()['comentario'],
            score: doc.data()['score']

        })
    });



/*
    const q = query(collection(db, "comentarios"));
const unsubscribe = await onSnapshot(q, (querySnapshot) => {
  querySnapshot.forEach((doc) => {


    comentarios.push({
        nombre: doc.data()['nombre'],
        comentario: doc.data()['comentario'],
        score: doc.data()['score']

    })


  });

  console.log(">> snapshot");
  console.log(comentarios);


});*/



    return comentarios;
}

async function addComentario(newComment) {
    try {
        const docRef = await addDoc(collection(db, "comentarios"), newComment);
        console.log("Document written with ID: ", docRef.id);
        alert("Comment sent");


    } catch (e) {

        console.error("Error adding document: ", e);
        alert("Error. Try Again");

    }

}


export default Reviews;
