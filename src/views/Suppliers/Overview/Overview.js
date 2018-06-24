import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

class Overview extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Overview</strong>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Welcome, Suppliers!</h1>
                  <p className="lead">
                  <Badge className="mr-1" color="danger" pill>Skip the Dishes</Badge> is so happy to bring you inside the skip.
                  We now can connect you to restaurants where they can buy direct from you the ingridients for theirs recipes.
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default Overview;
