import './App.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return(
        <>
    
{/* ==================== footer starrt=======================*/}
            <footer className='ftr'>
                <Container>
                  <Row className='foot'>

                    <Col xs={6} md={3} >
                      <h4>Categories</h4>
                      <p className='pt-2'><a href=''>New Products</a></p>
                      <p className='pt-2'><a href=''>Our Stores</a></p>
                      <p className='pt-2'><a href=''>Top sellers</a></p>
                      <p className='pt-2'><a href=''>Your Health</a></p>
                    </Col>


                    <Col xs={6} md={3}>
                      <h4>Information</h4>
                      <p className='pt-2'><a href=''>Home</a></p>
                      <p className='pt-2'><a href=''>About</a></p>
                      <p className='pt-2'><a href=''>Blog</a></p>
                      <p className='pt-2'><a href=''>Shop</a></p>
                      <p className='pt-2'><a href=''>Contacts</a></p>
                    </Col>


                    <Col sm={12} md={3}>
                      <h4>My account</h4>
                      <p className='pt-2'><a href=''>Checkout</a></p>
                      <p className='pt-2'><a href=''>Compare</a></p>
                      <p className='pt-2'><a href=''>My account</a></p>
                      <p className='pt-2'><a href=''>Wishlist</a></p>
                    </Col>


                    <Col sm={12} md={3}>
                      <h4>Store Information</h4>
                      <p className='pt-2'><a href=''>Address: 4578 Marmora Road, Glasgow</a></p>
                      <p className='pt-2'><a href=''>Phones: +3(800) 2345-6789 , +3(800) 2345-6790</a></p>
                      <p className='pt-2'><a href=''>Hours: 7 Days a week from 9:00 am to 7:00 pm</a></p>
                      <p className='pt-2'><a href=''>E-mail: info@demolink.org</a></p>
                    </Col>

                  </Row>
                </Container>
            </footer>
{/* ==================== footer end =======================*/}

        </>
    )
}

export default Footer;