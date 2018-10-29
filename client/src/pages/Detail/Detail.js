import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import '../../media.css';

class Detail extends Component {
  state = {
    dish: {}
  };
  // When this component mounts, grab the dish with the _id of this.props.match.params.id
  // e.g. localhost:3000/dishes/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getDish(this.props.match.params.id)
      .then(res => this.setState({ dish: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.dish.title} 
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>{this.state.dish.type}</h1>
              <p>
                {this.state.dish.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/dishes">← Back to Dishes</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
