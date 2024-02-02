import './App.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import c1 from './image/c1.webp'
import c2 from './image/c2.webp'
import c3 from './image/c3.webp'





function Cold() {
    return(
        <>
        
{/* =============================== Cold Cereal start ============================== */}
            <div className='pd-y'>
              <Container>
                <Row className='m-0 p-0'>
                <Col sm={12} md={4} className='mb-2 coldimg'>

                  <h2 className='pb-4'>Cold Cereal</h2>
                  <div className='coldimage'>
                      <img src={c1} className='border object-fit-cover'></img>
                  </div>
                      <div className='contentcold'>
                        <p className='con1'><a href=''>Fruit, Packaged Meals</a></p>
                        <p className='con2'><a href=''>Cascadian Farm Organic Cinnamon Crunch</a></p>
                        <p className='con3'>$16.00</p>
                      </div>
                  </Col>

                  <Col sm={12} md={4}  className='mb-2 coldimg'>

                    <h2 className='pb-4'>Organic Oils</h2>
                    <div className='coldimage'>
                      <img src={c2} className='border object-fit-cover'></img>
                    </div>
                        <div className='contentcold mb-3'>
                          <p className='con1'><a href=''>Fruit, Organic, Packaged Meals</a></p>
                          <p className='con2'><a href=''>Crisco Organic Refined Coconut Oil</a></p>
                          <p className='con3'>$23.00</p>
                        </div>
                  </Col>

                  <Col sm={12} md={4} className='mb-2 coldimg'>

                    <h2 className='pb-4'>Flours & Meals</h2>
                      <div className='coldimage'>
                        <img src={c3} className='border object-fit-cover'></img>
                      </div>
                        <div className='contentcold mb-3'>
                          <p className='con1'><a href=''>Baking, Organic</a></p>
                          <p className='con2'><a href=''>Bob’s Red Mill</a></p>
                          <p className='con3'>$26.35</p>
                        </div>
                  </Col>
                </Row>
              </Container>
            </div>
{/* =============================== Cold Cereal start ============================== */}


        </>
    )
}

export default Cold;