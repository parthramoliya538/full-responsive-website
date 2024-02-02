import './App.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





function Subscribe() {
    return(
        <>
    
{/* ==================== submit start ============ */}
            <div className='submit pd-y'>
                    <Row className='text-center m-0 p-0 '>
                      <h1 className='text-center'>Subscribe Newsletter</h1>
                      
                      <Col className='d-flex justify-content-center mt-4'>
                      <div sm={12} md={6} className=' me-2'>
                        <input type='text' placeholder='Enter Your Email' className='text-center px-5 py-2'></input>
                      </div>
                        
                      <div sm={12} md={6} className=''>
                        <button type="button" className="btn1 py-2 px-4 fs-6 border-0 ">SUBSCRIBE</button>
                      </div>
                
                      </Col>
                      
                    </Row>
            </div>
{/* ==================== submit end==================*/}


        </>
    )
}

export default Subscribe;