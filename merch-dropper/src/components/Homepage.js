import React from 'react';
import '../App.css';
import {
    Button,
    Row,
    Col,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle
  } from 'reactstrap';

  const Homepage = () => {
      return (
        <div className="homepage">
            <Col sm={{ size: 4, order: 1, offset: 0 }} className="mt-5  homeSection">
                <h1>Merch</h1>
                <p>Lorem ipsum Merch Dropper...</p>
                <h5>Full service custom merchandising</h5>
                <Button color="primary" href="/" className="designBtn">Let's go!</Button>{' '}
            </Col>
            <Col sm={{ size: 'auto', order: 2, offset: 0 }} className="mt-5">
                <div className="imgPlaceholder"></div>
                <div className="imgPlaceholder mt-4 mb-4"></div>
                <div className="imgPlaceholder"></div>
            </Col>
            <Col sm={{size: 'auto', order: 3, offset: 0 }} className="mt-5">
                <div className="imgPlaceholderLrg"></div>
            </Col>
            <Col sm={{size: 'auto', order: 4}}>
                <Row>
                    <Col sm={{size: 3}}>
                        <Card className="mt-5">
                            <CardImg top width="100%" src="https://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png" alt="Card image alt" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title.</CardText>
                            <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={{size: 3}}>
                        <Card className="mt-5">
                            <CardImg top width="100%" src="https://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png" alt="Card image alt" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title.</CardText>
                            <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={{size: 3}}>
                        <Card className="mt-5">
                            <CardImg top width="100%" src="https://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png" alt="Card image alt" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title.</CardText>
                            <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={{size: 3}}>
                        <Card className="mt-5">
                            <CardImg top width="100%" src="https://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png" alt="Card image alt" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title.</CardText>
                            <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </div>
      )
  }

  export default Homepage;