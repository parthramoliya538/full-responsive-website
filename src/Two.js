import './App.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from './image/img2.jpeg'
import img3 from './image/img3.jpeg'



function Two() {
    return(
        <>
        <div className='twoimg'>
            <Container>
              <Row className='tttimg'>
                <Col sm={12} md={6} className='mb-2 text-center timg'>
                  <img src={img2} className='w-100 h-80 ttimg object-fit-cover'></img>
                </Col>
                <Col sm={12} md={6} className='text-center timg'>
                  <img src={img3} className='w-100 h-80 ttimg object-fit-cover'></img>
                </Col>
              </Row>
            </Container>
        </div>
        </>
    )
}

export default Two;