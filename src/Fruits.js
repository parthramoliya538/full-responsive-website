import './App.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fruits from './image/fruits.jpeg'




function Fruits() {
    return(
        <>
        
{/* =========================== Fruits and Vegetables start ================================ */}
            <div className='fruit'>
              <Row className='m-0 p-0  position-relative'>
                <Col>
                  <div className='fruitimg'>
                    <img src={fruits} className='w-100 object-fit-cover'></img>
                  </div>
                  <div className='fruitcon w-100 text-center'>
                    <h1 className=''>Fruits and Vegetables</h1>
                    <h2 className='fs-sm-6 fs-md-5 fs-3'>Fresh and Delicious All Year Round!</h2>
                    <button type="button" className="btn1 py-2 px-4 fs-6 border-0 ">SHOP NOW</button>
                  </div>
                </Col>
              </Row>
            </div>
{/* =========================== Fruits and Vegetables end ================================ */}

        </>
    )
}

export default Fruits;