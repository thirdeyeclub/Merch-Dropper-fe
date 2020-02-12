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
    CardSubtitle,
    Jumbotron,
    Container,
    Media
  } from 'reactstrap';

  const Homepage = () => {
      return (
        <div className="homepage">
            {/* <Col sm={{ size: 4, order: 1, offset: 0 }} className="mt-5  homeSection">
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
            </Col> */}

            <Jumbotron style={{ backgroundImage: `url('https://i.ibb.co/SKTW5GZ/Adobe-Stock-316954524-Preview1-1.png')`, backgroundSize: 'cover', width: '100vw' }}>
                <Container>
                    <Row>
                        <Col sm={{ size: 'auto'}} style={{width: '25vw', height: '60vh'}}>
                            <h1 className="display-3" style={{textAlign:'center', color: 'white', fontWeight: 'bold'}}>CUSTOM</h1>
                            <h2 className="display-4" style={{textAlign:'center', color: 'white', fontWeight: 'bold'}}>T-SHIRTS</h2>
                            <h1 style={{textAlign:'center', color: 'white', fontWeight: 'bold'}}>AND MORE</h1>
                            <div className="line2" />
                            <p style={{textAlign:'center', color: 'white', fontWeight: 'bold'}}>Need merch? We've got your back.</p>
                            <p style={{textAlign:'center', color: 'white', margin: '5% 0'}}>
                                Full service merchandising solutions from Merch Dropper and Scalable Press, no matter the size.
                            </p>
                            <p style={{textAlign: 'center'}}>
                                <Button color="primary">Let's Go!</Button>
                                <br />
                                <Button outline color="light" style={{margin: '5% 0'}}>Learn More</Button>
                            </p>
                        </Col>
                        <Col sm={{ size: 'auto'}} style={{width: '25vw', height: '60vh', margin: '0 5vw'}}>
                            <Media object src="https://i.ibb.co/wQWhj2C/Group-6.png" style={{width: '15vw'}} />
                            <Media object src="https://i.ibb.co/7XQ70x1/Group-5.png" style={{width: '15vw'}} />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    
                </Row>
            </Container>

        </div>
      )
  }

  export default Homepage;