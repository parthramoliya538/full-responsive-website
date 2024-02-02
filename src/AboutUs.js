
import './About.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";




function AboutUs() {
    return(
        <>
{/* ====================== topbar start ===================== */}

<div className='topbar py-2'>
        <Container>
            <Row className='justify-content-between d-flex align-items-center'>
                <Col>
                    <p>ABOUT</p>    
                </Col>
                
                <Col>
                    <ul className='topnav d-flex justify-content-end'>
                        <li className='me-2'><a href=''><Link to="/">HOME</Link></a></li>
                        <li>/ ABOUT</li>
                    </ul> 
                </Col>
            </Row>
        </Container>
</div>

{/* ====================== topbar end ===================== */}



        <div className='Aboutus pd-y'>
            <Container>
                <div className='conus text-center w-75 m-auto'>
                    <h1>About Us</h1>
                    <h4>5 Reasons to Love Butternut Squash</h4>
                    <p className='fs-6 pt-2'>Look beyond butternut squash’s intimidating hard skin, and you’ll find a bright orange flesh, buttery texture and slightly sweet, nutty flavor — with so many meal possibilities! Why should you make butternut squash your go-to ingredient for fall and winter meals?</p>
                </div>
            </Container>
        </div>
        
{/*================== threenum start ==================  */}
        <div className='py-4 threenum'>
            <Container>
                <Row className='text-center'>
                    <Col sm={12} md={4} className='mb-sm-5  mb-md-auto'>
                       <h1>225</h1>
                       <p>Brands</p> 
                    </Col>

                    <Col sm={12} md={4} className='mb-sm-5  mb-md-auto'>
                       <h1>14</h1>
                       <p>Stores</p> 
                    </Col>
                    
                    <Col sm={12} md={4} className='mb-sm-5  mb-md-auto'>
                       <h1>632</h1>
                       <p>Happy Clients</p> 
                    </Col>
                </Row>
            </Container>
        </div>
{/*================== threenum end==================  */}

{/* ================== img start ========================== */}
<div className='a1'></div>
{/* ================== img end ========================== */}


{/* ================== Shipping start ========================== */}
<div className='pd-y free'>
    <Container>
        <Row className='text-center'>
            <Col sm={12} md={4} className='mb-sm-3 text-center'>
                <h4>Free Shipping</h4>
                <p className='pt-2'>we work with proven designers and manufacturers, that’s why we can guarantee 100% quality of all items.</p>
            </Col>
            
            <Col sm={12} md={4} className='mb-sm-3 text-center'>
                <h4>Free Shipping</h4>
                <p className='pt-2'>we work with proven designers and manufacturers, that’s why we can guarantee 100% quality of all items.</p>
            </Col>
            
            <Col sm={12} md={4} className='mb-sm-3 text-center'>
                <h4>Free Shipping</h4>
                <p className='pt-2'>we work with proven designers and manufacturers, that’s why we can guarantee 100% quality of all items.</p>
            </Col>
            
        </Row>
    </Container>
</div>
{/* ================== Shipping end ========================== */}


{/* ================== What We Can Do start ========================== */}

<div className='wecan m-auto pd-y'>
        <h2 className='text-center'>What We Can Do</h2>
        <p className='text-center pt-4'>Check out the recent additions to our autumn collection and be fashionable!</p>

        <div>
            <p className='pt-3'>Best Quality Products</p>
            <div className='pro1'></div>
            
            <p className='pt-4'>Best Quality Products</p>
            <div className='pro2'></div>
            
            <p className='pt-4'>Best Quality Products</p>
            <div className='pro3'></div>
        </div>

</div>

{/* ================== What We Can Do end ========================== */}


{/* ==================  The Founder start ========================== */}
<div className='founder'>
        <div className='foun text-center'>
            <h1 className='pb-3'>The Founder</h1>
            <p className='m-auto w-50'>Look beyond butternut squash’s intimidating hard skin, and you’ll find a bright orange flesh, buttery texture and slightly sweet, nutty flavor — with so many meal possibilities! Why should you make butternut squash your go-to ingredient for fall and winter meals?</p>
        </div>
</div>

{/* ================== The Founder end ========================== */}




        </>
    )
}

export default AboutUs;
