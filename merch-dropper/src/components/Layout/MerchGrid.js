import React, { Fragment } from "react";
import ShirtCard from "./ShirtCard/ShirtCard";
import "../../App.css";
import {
  Card,
  CardBody,
  Button,
  Container,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
  CardDeck
} from "reactstrap";

const shirtArray = [
  {
    color: "Burnt Orange",
    design: "Static Ant",
    url: "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/burnt.png"
  },
  {
    color: "Blue Steel",
    design: "Battle Ant",
    url: "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/bluesteel.png"
  },
  {
    color: "Gold",
    design: "Merch Dropper",
    url: "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/gold.png"
  },
  {
    color: "Oxblood",
    design: "Static Ant",
    url: "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/oxblood.png"
  },
  {
    color: "Heather Stone",
    design: "Battle Ant",
    url: "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/heatherStone.jpg"
  },
  {
    color: "Black",
    design: "Merch Dropper",
    url: "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/black.png"
  }
];

const MerchGrid = () => {
  return (
    <Container fluid="true" className="container-margin" >
      <Row>
        <Col sm="7" className="flex">
        {shirtArray.map((shirt)=>
         ( <ShirtCard url={shirt.url} color={shirt.color} design={shirt.design}/>))}
        </Col>

        <Col ></Col>
      </Row>
    </Container>
  );
};

export default MerchGrid;
