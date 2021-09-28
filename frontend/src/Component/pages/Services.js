import { Container } from '@material-ui/core';
import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row,Col
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import UserCard from '../UserCard';
  import '../Cards.css';
  import CardItem from '../CardItem';
  

export default class Services extends Component {
    render() {
        return (
            
         
    //      <div className="services" style={{alignContent:'center'}}>
    //          <Container>
    //      <Row>        
    //    <Col md={3}>
    //   <Card>
    //     <CardImg top width="100%" src="/images/Driver.jpg" alt="Card image cap" />
    //     <CardBody>
    //       <CardTitle tag="h5">Card title</CardTitle>
    //       <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
    //       <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    //       {/* <Button>Button</Button> */}
    //       <Link href="/worker" className="btn btn-primary">Book Driver</Link>
    //     </CardBody>
    //   </Card>
    //   </Col>
    //   <Col md={3}>
    //   <Card>
    //     <CardImg top width="100%" src="/images/Driver.jpg" alt="Card image cap" />
    //     <CardBody>
    //       <CardTitle tag="h5">Card title</CardTitle>
    //       <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
    //       <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    //       {/* <Button>Button</Button> */}
    //       <Link href="/services" className="btn btn-primary">Book Maid</Link>
    //     </CardBody>
    //   </Card>
    //   </Col>
    //   <Col md={3}>
    //   <Card>
    //     <CardImg top width="100%" src="/images/Driver.jpg" alt="Card image cap" />
    //     <CardBody>
    //       <CardTitle tag="h5">Card title</CardTitle>
    //       <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
    //       <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    //       {/* <Button>Button</Button> */}
    //       <Link href="/" className="btn btn-primary">Book Labour</Link>
    //     </CardBody>
    //   </Card>
    //   </Col>
    //   </Row>
    //   </Container>   
    // </div>

<div className="services">
<div className='cards'>
      <h1>CHECKOUT OUR SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'> */}
            {/* <CardItem
              src='images/Driver.jpg'
              text='Our drivers across the city would love to chauffeur you from wherever you are. So, let our drivers deal with the traffic, the signals or traffic rules, while you enjoy your ride.

              '
             // label=''
              path='/about'
            />
            <CardItem
              src='images/maid.jpg'
              text='Choose qualified maids to help you in your house chores'
             // label='Luxury'
              path='/about'
            />
          </ul> */}
          <ul className='cards__items'>
            <CardItem
              src='images/mover.jpg'
              text='BOOK WORKERS HERE'
            //  label='Mystery'
              path='/labour'
            />
            <CardItem
              src='images/maid2.jpg'
              text='BOOK HOUSEHELP HERE'
            //  label='Adventure'
              path='/maid'
            />
            <CardItem
              src='images/Driver2.jpg'
              text='BOOK DRIVER HER'
              
           //  label='Adrenaline'
              path='/driver1'
            />
          </ul>
        </div>
      </div>
    </div>

  {/* <UserCard/>  */}
</div>
        )
    }
}
