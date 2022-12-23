import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

// Show count of how many snacks and drinks are there in inventory. 

function Home({ snacks, drinks}) {
  return (
    <div>
      <section className="col-md">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Inventory
          </CardTitle>
          <CardText className="text-center">
            Snacks: {snacks.length}
          </CardText>
          <CardText className="text-center">
            Drinks: {drinks.length}
          </CardText>
        </CardBody>
      </Card>
    </section>
    </div>
  );
}

export default Home;
