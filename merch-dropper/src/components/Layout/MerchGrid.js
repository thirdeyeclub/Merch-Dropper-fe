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
  {id:1,
    color: "Burnt Orange",
    design: "Static Ant",
    url: "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/burnt.png",
    price: 29.99
  },
  {id:2,
    color: "Blue Steel",
    design: "Battle Ant",
    url: "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/bluesteel.png",
    price: 29.99
  },
  {id:3,
    color: "Gold",
    design: "Merch Dropper",
    url: "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/gold.png",
    price: 29.99
  },
  {id:4,
    color: "Oxblood",
    design: "Static Ant",
    url: "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/oxblood.png",
    price: 29.99
  },
  {id:5,
    color: "Heather Stone",
    design: "Battle Ant",
    url: "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/heatherStone.jpg",
    price: 29.99
  },
  {id:6,
    color: "Black",
    design: "Merch Dropper",
    url: "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/black.png",
    price: 29.99
  }
];

const MerchGrid = () => {
  return (
    <Container fluid="true" className="container-margin" >
      <Row>
        <Col sm="7" className="flex">
        {shirtArray.map((shirt)=>
         ( <ShirtCard url={shirt.url} color={shirt.color} design={shirt.design} price = {shirt.price}/>))}
        </Col>

        <Col ></Col>
      </Row>
    </Container>
  );
};

export default MerchGrid;
