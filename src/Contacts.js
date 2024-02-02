import './Contacts.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { IoLocationOutline,IoMailOutline,IoCallOutline } from "react-icons/io5";
import b1 from "./image4/b1.jpeg"


import Footer from "./Footer";
import Header from "./Header";

    const obj = {
        name :" SEND MESSAGE"
    }

function Contacts() {
    return(
        <>
<div>
     <Header/>
     
{/* ============== team start ============*/}
     <div className='topbar py-2'>
        <Container>
            <Row className='justify-content-between d-flex align-items-center'>
                <Col>
                    <p>Contacts</p>    
                </Col>
                
                <Col>
                    <ul className='topnav d-flex justify-content-end'>
                        <li className='me-2'><a href=''><Link to="/">HOME</Link></a></li>
                        <li>/ Contacts</li>
                    </ul> 
                </Col>
            </Row>
        </Container>
    </div>
{/* ============== team end ============*/}

{/* ========================= map start ================== */}

    <div>
        <Row className='m-0 p-0'>
            <Col>
                <div class="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d158920.89541606675!2d-0.11642900000000002!3d51.510666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1704279235407!5m2!1sen!2sus" className='w-100 h-100' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Col>
        </Row>
    </div>

{/* ========================= end start ================== */}


{/* ==================== contact start ===================== */}
<div className='contact pd-y'>
    <Container>
        <Row className='text-center text-sm-start'>
            <Col sm={12} md={4} className='d-sm-flex  maincontact'>
                <div className='cnti my-4 my-md-0'>
                    <i><IoCallOutline></IoCallOutline></i>
                </div>
                <div className='cnt1 ps-3 mt-sm-4 mt-md-0'> 
                    <h6>Phone:</h6>
                    <ul className=''>
                        <li className='pe-1'>(719) 445-2808</li>
                    </ul>
                </div>
            </Col>
            
            <Col sm={12} md={4} className=' d-sm-flex maincontact'>
                <div className='cnti my-4 my-md-0'>
                    <i><IoLocationOutline></IoLocationOutline></i>
                </div>
                <div  className='cnt2 ps-3 mt-sm-4 mt-md-0'> 
                    <h6>Address:</h6>
                    <ul>
                        <li>4578 Marmora Road, Glasgow</li>
                    </ul>
                </div>
            </Col>
            
            <Col sm={12} md={4} className='d-sm-flex maincontact'>
                <div className='cnti my-4 my-md-0'>
                    <i><IoMailOutline></IoMailOutline></i>
                </div>
                <div className='cnt1 ps-3 mt-sm-4 mt-md-0'> 
                    <h6>E-mail:</h6>
                    <ul>
                        <li>info@demolink.org</li>
                    </ul>
                </div>
            </Col>
        </Row>
    </Container>
</div>

{/* ==================== contact end ===================== */}


{/* ==================== form start ===================== */}

<div>
    <Container>
        <Row>
            <Col md={12} lg={6}>
                <div className='mt-3'>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Your Name  "></input>
                </div>
                
                <div className='mt-3'>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Your Website "></input>
                </div>

                <div className='mt-3'>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Your Company "></input>
                </div>

                <div className='mt-3'>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Your Comment "></input>
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className='mt-3'>
                <textarea class="form-control" placeholder="Your Comment" id="floatingTextarea2"></textarea>
                </div>
            </Col>
            <div className='mt-3'>
                    <button type="button" class="btn8 py-2 px-5 fs-6 border-0">SEND MESSAGE
                    </button>
            </div>
            
        </Row>
    </Container>
</div>

{/* ==================== form end ===================== */}







     <Footer/>
</div>
        </>
    )
}

export default Contacts;