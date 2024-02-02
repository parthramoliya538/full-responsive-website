import './Blog.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import b1 from "./image4/b1.jpeg"
import b2 from "./image4/b2.jpeg"
import b3 from "./image4/b3.jpeg"
import b4 from "./image4/b4.jpeg"
import b5 from "./image4/b5.jpeg"
import b6 from "./image4/b6.jpeg"

import Footer from "./Footer";
import Header from "./Header";


function Blog() {
    return(
        <>
<div>
     <Header/>
     
{/* ============== team start ============*/}
     <div className='topbar py-2'>
        <Container>
            <Row className='justify-content-between d-flex align-items-center'>
                <Col>
                    <p>BLOG</p>    
                </Col>
                
                <Col>
                    <ul className='topnav d-flex justify-content-end'>
                        <li className='me-2'><a href=''><Link to="/">HOME</Link></a></li>
                        <li>/ BLOG</li>
                    </ul> 
                </Col>
            </Row>
        </Container>
    </div>
{/* ============== team end ============*/}


{/* ===================== Health Benefits of a Raw Food start ================= */}
<div className='pd-y blog'>
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <div className='blogcon'>
                        <img src={b1} className='w-100 h-75 pt-4'></img>
                        <h3 className='pt-3'>Health Benefits of a Raw Food</h3>
                        <p className='pt-1'>Each month our buyers introduce new products to our stores, and each month we fall for new favorites. From fast and easy meal solutions to seasonal superstars hello, pumpkin spice...</p>
                    </div>
                </Col>
                
                <Col sm={12} md={6}>
                    <div className='blogcon'>
                        <img src={b2} className='w-100 h-75 pt-4'></img>
                        <h3 className='pt-3'>Health Benefits of a Raw Food</h3>
                        <p className='pt-1'>Each month our buyers introduce new products to our stores, and each month we fall for new favorites. From fast and easy meal solutions to seasonal superstars hello, pumpkin spice...</p>
                    </div>
                </Col>
                
                <Col sm={12} md={6}>
                    <div className='blogcon'>
                        <img src={b3} className='w-100 h-75 pt-4'></img>
                        <h3 className='pt-3'>Health Benefits of a Raw Food</h3>
                        <p className='pt-1'>Each month our buyers introduce new products to our stores, and each month we fall for new favorites. From fast and easy meal solutions to seasonal superstars hello, pumpkin spice...</p>
                    </div>
                </Col>
                
                <Col sm={12} md={6}>
                    <div className='blogcon'>
                        <img src={b4} className='w-100 h-75 pt-4'></img>
                        <h3 className='pt-3'>Health Benefits of a Raw Food</h3>
                        <p className='pt-1'>Each month our buyers introduce new products to our stores, and each month we fall for new favorites. From fast and easy meal solutions to seasonal superstars hello, pumpkin spice...</p>
                    </div>
                </Col>
                
                <Col sm={12} md={6}>
                    <div className='blogcon'>
                        <img src={b5} className='w-100 h-75 pt-4'></img>
                        <h3 className='pt-3'>Health Benefits of a Raw Food</h3>
                        <p className='pt-1'>Each month our buyers introduce new products to our stores, and each month we fall for new favorites. From fast and easy meal solutions to seasonal superstars hello, pumpkin spice...</p>
                    </div>
                </Col>
                
                <Col sm={12} md={6}>
                    <div className='blogcon'>
                        <img src={b6} className='w-100 h-75 pt-4'></img>
                        <h3 className='pt-3'>Health Benefits of a Raw Food</h3>
                        <p className='pt-1'>Each month our buyers introduce new products to our stores, and each month we fall for new favorites. From fast and easy meal solutions to seasonal superstars hello, pumpkin spice...</p>
                    </div>
                </Col>
                
            </Row>
        </Container>
</div>


{/* ===================== Health Benefits of a Raw Food end ================= */}





     <Footer/>
</div>
        </>
    )
}

export default Blog;