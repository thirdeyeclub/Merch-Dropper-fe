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







const ProductCard = ({product, addToCart}) => {

  console.log(product)
  return (
    <Fragment>
      <Col  xs="6" lg="4" >
      <Card className="merchCard m-1"  >
        <CardImg top width="100%" height="auto" src={product.url} alt="T-shirt" />
        <CardBody>
  <CardTitle className="h5 text-center">{product.design}</CardTitle>
  <CardText>
            <small className="text-muted">In {product.color}</small>
          </CardText>
  <CardText>${product.price}</CardText>
  <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        </CardBody>
      </Card>
      </Col>
    </Fragment>
  );
};





export default ProductCard;
