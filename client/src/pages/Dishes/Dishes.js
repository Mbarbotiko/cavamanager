import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn, DropMenu } from "../../components/Form";
import moment from "moment/moment.js";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";


class Dishes extends Component {
  state = {
    dishes: [],
    title: "",
    type: "",
    description: "",
    date: ""
  };

  componentDidMount() {
    this.loadDishes();
  }

  loadDishes = () => {
    API.getDishes()
      .then(res =>
        this.setState({ dishes: res.data, title: "", type: "", description: "", date: "" })
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

  handleDropMenuChange = event =>{
    this.setState({
      type: event.target.value
      
    });
   
  }

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
    console.log(this.state.type)
    console.log(this.handleDropMenuChange)
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Header>Submit A Menu Item</Header>
            <form id="submission-form">
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              {/* <Input
                value={this.state.type}
                onChange={this.handleInputChange}
                name="type"
                placeholder="Type (required)"
              /> */}
              <DropMenu 
              value={this.state.type}
              onChange={this.handleDropMenuChange}
              name='type'
              label={'Choose Type'}
              drop1={'Appetizer'}
              drop2={'Entree'}
              drop3={'Drinks'}
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              <FormBtn
                disabled={!(this.state.type && this.state.title && this.state.description)}
                onClick={this.handleFormSubmit}
              >
                Submit New Menu Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12 sm-12">

            <Header>Entrees</Header>
            {this.state.dishes.length ? (
              <div className='dish-cards'>
                {this.state.dishes.map(dish => (
                  <div>
                    {dish.type === 'Entree' ? (

                      <Card key={dish._id}>
                        <Link to={"/dishes/" + dish._id}>
                          <div className="card-header">
                            {dish.title}
                          </div>
                          <div className="card-body">
                            <h5 className="card-title"> {dish.type}</h5>
                            <p className="card-text">{dish.description}</p>
                            <p className="card-text">{moment(dish.date).format('MMM Do YYYY')}</p>

                          </div>

                        </Link>
                        <div className="card-footer text-muted">
                          <DeleteBtn onClick={() => this.deleteDish(dish._id)} />
                        </div>

                      </Card>

                    ) : (
                        null
                      )}
                  </div>

                ))}



                <Header>Appetizer</Header>

                {this.state.dishes.map(dish => (
                  <div>
                    {dish.type === 'Appetizer' ? (

                      <Card key={dish._id}>
                        <Link to={"/dishes/" + dish._id}>
                          <div className="card-header">
                            {dish.title}
                          </div>
                          <div className="card-body">
                            <h5 className="card-title"> {dish.type}</h5>
                            <p className="card-text">{dish.description}</p>
                            <p className="card-text">{moment(dish.date).format('MMM Do YYYY')}</p>

                          </div>
                        </Link>
                        <div className="card-footer text-muted">
                          <DeleteBtn onClick={() => this.deleteDish(dish._id)} />
                        </div>
                      </Card>

                    ) : (
                        null
                      )}
                  </div>
                ))}

                <Header>Drinks</Header>
                {this.state.dishes.map(dish => (
                  <div>
                    {dish.type === 'Drinks' ? (

                      <Card key={dish._id}>
                        <Link to={"/dishes/" + dish._id}>
                          <div className="card-header">
                            {dish.title}
                          </div>
                          <div className="card-body">
                            <h5 className="card-title"> {dish.type}</h5>
                            <p className="card-text">{dish.description}</p>
                            <p className="card-text">{moment(dish.date).format('MMM Do YYYY')}</p>

                          </div>
                        </Link>
                        <div className="card-footer text-muted">
                          <DeleteBtn onClick={() => this.deleteDish(dish._id)} />
                        </div>
                      </Card>

                    ) : (
                        null
                      )}
                  </div>
                ))}

              </div>






            ) : (
                <Header>No Results to Display</Header>
              )}
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Dishes;


                  // <Card key={dish._id}>
                  //   <Link to={"/dishes/" + dish._id}>
                  //     <div className="card-header">
                  //       {dish.title}
                  //     </div>
                  //     <div className="card-body">
                  //       <h5 className="card-title"> {dish.type}</h5>
                  //       <p className="card-text">{dish.description}</p>
                  //     </div>
                  //     {moment(dish.date).format('MMM Do YYYY')}
                  //   </Link>
                  //   <div className="card-footer text-muted">
                  //     <DeleteBtn onClick={() => this.deleteDish(dish._id)} />
                  //   </div>
                  // </Card>