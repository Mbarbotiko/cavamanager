import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import moment from "moment/moment.js";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

class Dishes extends Component {
  state = {
    dishes: [],
    title: "",
    type: "",
    description: "",
    date:""
  };

  componentDidMount() {
    this.loadDishes();
  }

  loadDishes = () => {
    API.getDishes()
      .then(res =>
        this.setState({ dishes: res.data, title: "", type: "", description: "", date:"" })
      )
      .catch(err => console.log(err));
  };

  deleteDish = id => {
    API.deleteDish(id)
      .then(res => this.loadDishes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.description) {
      API.saveDish({
        title: this.state.title,
        type: this.state.type,
        description: this.state.description
      })
        .then(res => this.loadDishes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.type}
                onChange={this.handleInputChange}
                name="type"
                placeholder="Type (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              <FormBtn
                disabled={!(this.state.type && this.state.title&& this.state.description)}
                onClick={this.handleFormSubmit}
              >
                Submit New Menu Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12 sm-12">
            {this.state.dishes.length ? (
              <List>
                <Header>Appetizers</Header>
                {this.state.dishes.map(dish => (
                  <ListItem key={dish._id}>
                   {/* <Card/> */}
                    <Link to={"/dishes/" + dish._id}>
                      <strong>
                       Title:  {dish.title} Type: {dish.type} Description:{dish.description} Date Created: {moment(dish.date).format('MMM Do YYYY')}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteDish(dish._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dishes;
