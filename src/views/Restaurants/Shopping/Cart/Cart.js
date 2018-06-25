import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Badge, Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row } from 'reactstrap';
import { addIngredient, removeIngredient } from '../../../../actions/ingredients'
import { changeOrderBy } from '../../../../actions/shopping-list'
import { addRecipeIngredients } from '../../../../actions/recipes'
import { tooglePaymentModal } from '../../../../actions/ui'
import { getShoppingCartSorted } from '../../../../selectors/'

class ShoppingCart extends Component {

  render() {
    const { recipes, ingredients, shoppingList, paymentModal, orderBy } = this.props
    const { addIngredient, addRecipeIngredients, removeIngredient, tooglePaymentModal, changeOrderBy } = this.props
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify " ></i><strong>Shopping cart</strong>
              </CardHeader>
              <CardBody>
                <Row>
                 <Col>
                    <h1>Ingredients <Button color="warning" className="float-right" onClick={() => changeOrderBy()}>Ordering by: {orderBy}</Button>{' '}</h1>
                    <ListGroup>
                      {shoppingList.map(i => 
                        <ListGroupItem key={i.id} className="justify-content-between">
                          {i.quantity} - {i.name} 
                          <div className="float-right">
                            <Button color="danger" onClick={() => removeIngredient(i)}>Remove</Button>{' '}
                            <Button color="primary" onClick={() => addIngredient(i)}>Add</Button>
                          </div>
                        </ListGroupItem>
                        )
                      }
                    </ListGroup>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>                  
                    <Button active block color="primary" aria-pressed="true" onClick={() => tooglePaymentModal()}>PAY</Button>

                    <Modal isOpen={paymentModal} toggle={tooglePaymentModal} >
                      <ModalHeader toggle={tooglePaymentModal}>Payment Modal</ModalHeader>
                      <ModalBody>
                        <h1>FINISHED!</h1>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={tooglePaymentModal}>Close</Button>
                      </ModalFooter>
                    </Modal>
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
  shoppingList: getShoppingCartSorted(state),
  paymentModal: state.paymentModal,
  orderBy: state.orderBy
});

const mapDispatchToProps = {
  addRecipeIngredients,
  addIngredient,
  removeIngredient,
  tooglePaymentModal,
  changeOrderBy
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
