import './Teamus.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import p1 from "./image3/p1.jpeg";
import p2 from "./image3/p2.jpeg";
import p3 from "./image3/p3.jpeg";

import Footer from "./Footer";
import Header from "./Header";


function Team() {
    return(
        <>
<div>
     <Header/>
     
{/* ============== team start ============*/}
     <div className='topbar py-2'>
        <Container>
            <Row className='justify-content-between d-flex align-items-center'>
                <Col>
                    <p>TEAM</p>    
                </Col>
                
                <Col>
                    <ul className='topnav d-flex justify-content-end'>
                        <li className='me-2'><a href=''><Link to="/">HOME</Link></a></li>
                        <li>/ TEAM</li>
                    </ul> 
                </Col>
            </Row>
        </Container>
    </div>
{/* ============== team end ============*/}


{/* ============================ Our Team start ===================== */}
<div>
    <Container>

    <div className='ocon text-center pd-y'>
        <h1>Our Team</h1>
        <p className='pt-2 pcon w-75 m-auto '>With their unusual shapes and varied colors, winter squash — including acorn, spaghetti and butternut squash — make beautiful table decorations.</p>
    </div>

    <Row  className='pt-5'>
        
        <Col sm={12} md={4}>
            <div className='ourimg w-100'>
                <img src={p1}  className='mt-2 w-100'></img>
                <div className='ourcontent text-center'>
                    <h3 className=''>Don Clark</h3>
                    <h4 className=''>Product Consultant</h4>
                    <p className=''>Don was born Los Angeles. His family owned a small grocery store, so he has learned how to manage shop</p>
                </div>
            </div>
            
        </Col>
            
        <Col sm={12} md={4}>
            <div className='ourimg w-100'>
                <img src={p2}  className='mt-2 w-100'></img>
                <div className='ourcontent text-center'>
                    <h3 className=''>Don Clark</h3>
                    <h4 className=''>Product Consultant</h4>
                    <p className=''>Don was born Los Angeles. His family owned a small grocery store, so he has learned how to manage shop</p>
                </div>
            </div>
        </Col>
            
        <Col sm={12} md={4}>
            <div className='ourimg w-100'>
                <img src={p3}  className='mt-2 w-100'></img>
                <div className='ourcontent text-center'>
                    <h3 className=''>Don Clark</h3>
                    <h4 className=''>Product Consultant</h4>
                    <p className=''>Don was born Los Angeles. His family owned a small grocery store, so he has learned how to manage shop</p>
                </div>
            </div>
        </Col>
            
    </Row>
    
    </Container>

</div>

{/* ============================ Our Team end ===================== */}


{/* ============================ backimg start ===================== */}
<div className='backimg'></div>
{/* ============================ backimg end ===================== */}


{/* ============================ Our skills end ===================== */}

<div className='pd-y'>
    <Container>
            <h2 className='text-center'>Our skills</h2>
        <Row>
            <Col sm={12} md={6} className='pt-4 sccon'>
                <p>Coconut Oil is a great-tasting, nutritious alternative to use when cooking or baking. Coconut Oil is a naturally rich source of medium chain triglycerides (MCTs), which are quickly absorbed by the body to produce energy. MCTs are hydrolyzed more rapidly and metabolized more readily than long chain fatty acids. Our cold-pressed, organic extra virgin oil is from the Philippines and is naturally free of trans fat, 100% cholesterol free, contains no hexane and is certified non-GMO.  Vita Extra Virgin Organic Coconut Oil is highly heat stable, ideal for cooking and makes a delicious, energizing substitute for regular oils, butter or shortening in recipes. Spread on bread or mix into your favorite smoothie</p>
            </Col>
            
            <Col sm={12} md={6} className='pt-4'>
            <div>
                <p>Best Quality Products</p>
                <div className='pro1'></div>

                <p className='pt-5'>Best Quality Products</p>
                <div className='pro2'></div>

                <p className='pt-5'>Best Quality Products</p>
                <div className='pro3'></div>
            </div>
            </Col>
            
        </Row>
    </Container>
</div>
{/* ============================ Our skills end ===================== */}



     <Footer/>
</div>
        </>
    )
}

export default Team;