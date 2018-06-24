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
                <i className="fa fa-align-justify"></i><strong>Restaurants</strong>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Hello, Restaurants!</h1>
                  <p className="lead">
                  <Badge className="mr-1" color="danger" pill>Skip the Dishes</Badge> 
                  now bring to you a new awesome feature. 
                  We are excited to announce the <Badge className="mr-1" color="primary" pill>Skip the Supermarket</Badge> just for you guys.
                  </p>
                  <hr className="my-2" />
                  <p>Restaurants can now purchase all the recipes' ingredients offered in <Badge className="mr-1" color="danger" pill>Skip the Dishes</Badge> with just a few clicks. </p>
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
