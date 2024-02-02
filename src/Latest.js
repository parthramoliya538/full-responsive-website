import './App.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import b1 from './image/b1.jpeg'
import b2 from './image/b2.jpeg'
import b3 from './image/b3.jpeg'




function Latest() {
    return(
        <>

{/* =========================== Latest from the Blog start ================================ */}
            <div className='pd-y blog'>
              <Container>
                <Row>
                  <h1 className='pb-5 text-center'>Latest from the Blog</h1>
                  <Col sm={12} md={4} className=''>
                    <img src={b1} className='w-100 object-fit-cover'></img>
                    <div className='blogcon text-center'>
                      <h4 className='fs-5 mt-2'><a href=''>Health Benefits of a Raw Food</a></h4>
                      <p className='fs-6'><a href=''>adminSeptember 23, 2023</a></p>
                    </div>
                  </Col>

                  <Col sm={12} md={4} className=''>
                    <img src={b2} className='w-100 object-fit-cover'></img>
                    <div className='blogcon text-center'>
                      <h4 className='fs-5 mt-2'><a href=''>The Anytime Snack Pack </a></h4>
                      <p className='fs-6'><a href=''>adminSeptember 23, 2023</a></p>
                    </div>
                  </Col>

                  <Col sm={12} md={4}>
                    <img src={b3} className='w-100 object-fit-cover'></img>
                    <div className='blogcon text-center'>
                    <h4 className='fs-5 mt-2'><a href=''>6 After-School Snacks</a></h4>
                    <p className='fs-6'><a href=''>adminSeptember 23, 2023</a></p>
                    </div>
                  </Col>

                </Row>
              </Container>
            </div>
{/* =========================== Latest from the Blog end ================================ */}

        </>
    )
}

export default Latest;