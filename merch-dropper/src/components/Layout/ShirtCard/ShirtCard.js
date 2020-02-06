import React, { Fragment } from "react";
import "../../../App.css";

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
import styled from "styled-components";






const ShirtCard = (shirt) => {

  console.log(shirt)
  return (
    <Fragment>
      <Col  xs="6" lg="4" >
      <Card className="merchCard m-1"  >
        <CardImg top width="100%" height="auto" src={shirt.url} alt="T-Shirt" />
        <CardBody>
  <CardTitle className="h5 text-center">{shirt.design}</CardTitle>
          <CardText>$29.99</CardText>
        </CardBody>
      </Card>
      </Col>
    </Fragment>
  );
};

export default ShirtCard;
