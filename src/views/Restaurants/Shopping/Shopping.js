import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row } from 'reactstrap';
import { addIngredient, loadIngredients } from '../../../actions/ingredients'
import { addRecipeIngredients, loadRecipes } from '../../../actions/recipes'

class Shopping extends Component {

  componentDidMount() {
    this.props.loadIngredients()
    this.props.loadRecipes()
  }

  render() {
    const { recipes, ingredients, shoppingList } = this.props
    const { addIngredient, addRecipeIngredients } = this.props
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Shopping</strong>
              </CardHeader>
              <CardBody>
                <p>
                  I create a simple grapql api in graphcool service, the data you see here come from this endpoint: https://api.graph.cool/simple/v1/cjitk5fhc2evf0108j1rbwenf
                </p>
                <Row>
                  <Col>
                    <h1>Recipes</h1>
                    <h6>Here you can add to the shopping cart all the recipes's ingredients</h6>
                    <ListGroup>
                      {
                        recipes.map(r => 
                          <ListGroupItem  key={r.id} className="justify-content-between">
                            <ListGroupItemHeading>
                              {r.name}
                              <Button color="primary" className="float-right" onClick={() => addRecipeIngredients(r)}>Add</Button>
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                              {r.ingredients.map(i => i.name).join(", ")}
                            </ListGroupItemText>
                          </ListGroupItem>
                        )
                      }
                    </ListGroup>
                  </Col>
                  
                  <Col>
                    <h1>Ingredients</h1>
                    <h6>Here you can add one ingredient at time</h6>
                    <ListGroup>
                      {ingredients.map(i => 
                        <ListGroupItem key={i.id} className="justify-content-between">
                          {i.name} 
                          <Button color="primary" className="float-right" onClick={() => addIngredient(i)}>Add</Button>  
                        </ListGroupItem>
                        )
                      }
                    </ListGroup>
                  </Col>
                </Row>
                
                <hr />
                <Row>
                  <Col>
                    <Button active block color="primary" aria-pressed="true" onClick={() => this.props.history.push("/restaurants/shopping/cart")}>Process a Order - {shoppingList.length} itens in the cart</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  ingredients: state.ingredients,
  shoppingList: state.shoppingList
});

const mapDispatchToProps = {
  addRecipeIngredients,
  addIngredient,
  loadIngredients,
  loadRecipes
};

export default connect(mapStateToProps, mapDispatchToProps)(Shopping);
