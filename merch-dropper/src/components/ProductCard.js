import React, { Fragment } from "react";
import "../App.css";

import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
  CardDeck
} from "reactstrap";







const ProductCard = (shirt) => {

  console.log(shirt)
  return (
    <Fragment>
      <Col  xs="6" lg="4" >
      <Card className="merchCard m-1"  >
        <CardImg top width="100%" height="auto" src={shirt.url} alt="T-Shirt" />
        <CardBody>
  <CardTitle className="h5 text-center">{shirt.design}</CardTitle>
  <CardText>
            <small className="text-muted">In {shirt.color}</small>
          </CardText>
  <CardText>${shirt.price}</CardText>
  <Button onClick={() => shirt.addToCart(shirt.shirt)}>Add to Cart</Button>
        </CardBody>
      </Card>
      </Col>
    </Fragment>
  );
};

export default ProductCard;
