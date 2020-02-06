import React, { Fragment } from "react";
import ProductCard from "./ProductCard";
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import "../App.css";
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

export const productArray = [
  {
    id: 1,
    color: "Burnt Orange",
    design: "Static Ant",
    url:
      "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/burnt.png",
    price: 29.99
  },
  {
    id: 2,
    color: "Blue Steel",
    design: "Battle Ant",
    url:
      "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/bluesteel.png",
    price: 29.99
  },
  {
    id: 3,
    color: "Gold",
    design: "Merch Dropper",
    url:
      "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/gold.png",
    price: 29.99
  },
  {
    id: 4,
    color: "Oxblood",
    design: "Static Ant",
    url:
      "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/oxblood.png",
    price: 29.99
  },
  {
    id: 5,
    color: "Heather Stone",
    design: "Battle Ant",
    url:
      "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/heatherStone.jpg",
    price: 29.99
  },
  {
    id: 6,
    color: "Black",
    design: "Merch Dropper",
    url:
      "https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/black.png",
    price: 29.99
  }
];

const ProductDisplay = ({product, addToCart}) => {
  return (
    <Container fluid="true" className="container-margin">
      <Row>
        <Col sm="7" className="flex">
          {productArray.map((product) => (
            <ProductCard
              url={product.url}
              color={product.color}
              design={product.design}
              price={product.price}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </Col>

        <Col></Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  console.log('state in products', state.CartReducer.cart)
  return {
      cart: state.CartReducer.cart
  }
}

export default connect(mapStateToProps, { addToCart })(ProductDisplay);

