import './App.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import w1 from './image/w1.webp'
import w2 from './image/w2.webp'
import w3 from './image/w3.webp'


function Welcome() {
    return(
    <>
    
    <div className='welcome pd-y'>
    <Container>
        <div>
          <h1 className='text-center wel m-sm-auto pb-3'>Welcome to our healthy farm!</h1>
        </div>
      <Row className=''>
        <Col sm={12} md={4} className='content text-center'>
          <img src={w1}></img>
          <h2 className='fs-5 pt-3'>Best Quality Products</h2>
          <p className='pt-2'>We stand for providing the most fresh organic products which will serve your health and be a source of vitamins and minerals for our clients.</p>
        </Col>
        <Col sm={12} md={4} className='content text-center'>
          <img src={w2}></img>
          <h2 className='fs-5 pt-3'>Farmer Products</h2>
          <p className='pt-2'>We work with many farms to provide you with natural products grown with love and care with no GMO or pesticides.</p>
        </Col>
        <Col sm={12} md={4} className='content text-center'>
          <img src={w3}></img>
          <h2 className='fs-5 pt-3'>Fast Delivery</h2>
          <p className='pt-2'>We want our client to receive their fresh products as soon as possible, so we process and ship the order at once.</p>
        </Col>
      </Row>
    </Container>
    </div>
    
    </>
    )
}

export default Welcome;