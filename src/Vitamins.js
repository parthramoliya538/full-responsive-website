import './App.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import vit from './image/vit.webp'



function Vitamins() {
    return(
        <>
        
{/* =========================== A Source of Vitamins start ================================ */}
            <div className='vitamins pd-y'>
                  <Row className='m-0 p-0'>
                    <Col>
                    <img src={vit} className='w-md-100 w-100 object-fit-cover'></img>
                    </Col>
                    <Col>
                      <div className='mb-5'>
                        <h3 className='pb-2'>A Source of Vitamins</h3>  
                        <p>Vegetables can be eaten either raw or cooked and play an important role in human nutrition, being mostly low in fat and carbohydrates, but high in vitamins, minerals and dietary fiber.</p>
                      </div>
                      
                      <div className='mb-5'>
                        <h3 className='pb-2'>Best Quality Products</h3>  
                        <p>“We eliminated any possible pollution in our soils in order to deliver the purest organic produce to our customers’ tables.“</p>
                      </div>
                      
                      <div className='mb-5'>
                        <h3 className='pb-2'>Best Quality Products</h3>
                        <p>“We eliminated any possible pollution in our soils in order to deliver the purest organic produce to our customers’ tables.“</p>  
                      </div>
                      
                    </Col>
                  </Row>
            </div>
                
{/* =========================== A Source of Vitamins end ================================ */}

        </>
    )
}

export default Vitamins;