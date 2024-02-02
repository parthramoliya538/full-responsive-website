import './Shop.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {FaShoppingCart,FaRegEye,FaRegHeart,
    FaBalanceScale} from "react-icons/fa";
import sl1 from "./image5/sl1.png";
import sl2 from "./image5/sl2.png";
import sl3 from "./image5/sl3.png";
import s1 from './image5/s1.webp'
import s2 from './image5/s2.webp'
import s3 from './image5/s3.webp'
import s4 from './image5/s4.webp'
import s5 from './image5/s5.webp'
import s6 from './image5/s6.webp'
import s7 from './image5/s7.webp'
import s8 from './image5/s8.webp'


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
                    <p>SHOP</p>    
                </Col>
                
                <Col>
                    <ul className='topnav d-flex justify-content-end'>
                        <li className='me-2'><a href=''><Link to="/">HOME</Link></a></li>
                        <li>/ SHOP</li>
                    </ul> 
                </Col>
            </Row>
        </Container>
    </div>
{/* ============== team end ============*/}


{/* ========================= start ========================== */}

<div className='pd-y'>
    <Container>
        <Row>
            <Col sm={12} md={3} className='shopleft border-secondary'>
                
                {/* ============ search ======= */}
                <div className='searchgo justify-content-start'>
                    <input type='text'  placeholder='Search...' className='w-100 text-center search py-2 me-1'></input>
                    <button  type="button" className='btn1 w-100 mt-2'>Go!</button>
                    <hr className='mt-5'></hr>
                </div>

                {/* ============ check =========== */}

                <div className='check pt-3'> 
                    <h4>Filter</h4>
                    <ul>
                        <li><a>Baking</a></li>
                        <li><a>Fruit</a></li>
                        <li><a>Organic</a></li>
                        <li><a>Packaged Meals</a></li>
                        <li><a>Vegetable</a></li>
                    </ul>
                    <hr className='mt-5'></hr>
                </div>

                {/* =========== product ============  */}

                <div className=' justify-content-start'>

                    <h4  className='pt-2 pb-5'>Products</h4>

                    <div className='d-flex'>
                        <div className='w-50 pe-2 m-auto'>
                            <img src={sl1} className='w-100 border'></img>
                        </div>
                        <div className='procon1'>
                            <p  className='pt-2'>Fruit, Organic, Packaged Meals</p>
                            <h6 className='pt-2'>Crisco Organic Refined Coconut Oil</h6>
                            <h5 className='pt-2'>$23.00</h5>
                        </div>
                    </div>
                    
                    <div className='d-flex'>
                        <div className='w-50 pe-2 m-auto'>
                            <img src={sl2} className='w-100 border'></img>
                        </div>
                        <div className='procon1'>
                            <p  className='pt-2'>Fruit, Organic, Packaged Meals</p>
                            <h6 className='pt-2'>Crisco Organic Refined Coconut Oil</h6>
                            <h5 className='pt-2'> $2.05</h5>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div className='w-50 pe-2 m-auto'>
                            <img src={sl3} className='w-100 border'></img>
                        </div>
                        <div className='procon1'>
                            <p  className='pt-2'>Baking, Fruit, Organic, Packaged Meals</p>
                            <h6 className='pt-2'>Organic Cauliflower</h6>
                            <h5 className='pt-2'>$6.30</h5>
                        </div>
                    </div>
                </div>
            </Col>

{/* =========================== Shop right start ==================== */}



        <Col sm={12} md={9} className=''>
            <Row>

                <h3 className='my-3'>Shop</h3>

                <div className='select my-5 pt-3'>
                    <select class="form-select" className='px-2 py-1' aria-label="Default select example">
                      <option selected>Default sorting</option>
                      <option value="1">Sort by popularity</option>
                      <option value="2">Sort by average rating</option>
                      <option value="2">Sort by latest</option>
                      <option value="2">Sort by prise : low to high</option>
                      <option value="3">Sort by prise : high to low</option>
                    </select>
                </div>

                <Col sm={12} md={6} lg={4} className='mainimg pt-3'>
                  <img src={s1} className='border w-100 object-fit-cover'></img>
                    <div className='contentour text-center mb-3 mt-2'>
                      <p className='con1'>Fruit, Vegetable</p>
                      <p className='con2'>Great Value Organic Whole...</p>
                      <p className='con3'>$6.30</p>
                    </div>
                    <div className='subproduct'>
                      <button type="button" class="btn7 py-2 px-5 fs-6 border-0"><FaShoppingCart className='pb-1 pe-1'></FaShoppingCart>SELECT OPTIONS</button>
                      <div className='subpro'>
                        <a href=''><FaRegEye></FaRegEye></a>
                        <a href=''><FaRegHeart></FaRegHeart></a>
                        <a href=''><FaBalanceScale></FaBalanceScale></a>
                      </div>
                    </div>
              </Col>
            
              <Col sm={12} md={6} lg={4} className='mainimg pt-3'>
                  <img src={s2} className='border w-100 object-fit-cover'></img>
                    <div className='contentour text-center mb-3 mt-2'>
                      <p className='con1'>Fruit, Vegetable</p>
                      <p className='con2'>Great Value Organic Whole...</p>
                      <p className='con3'>$6.30</p>
                    </div>
                    <div className='subproduct'>
                      <button type="button" class="btn7 py-2 px-5 fs-6 border-0"><FaShoppingCart className='pb-1 pe-1'></FaShoppingCart>SELECT OPTIONS</button>
                      <div className='subpro'>
                        <a href=''><FaRegEye></FaRegEye></a>
                        <a href=''><FaRegHeart></FaRegHeart></a>
                        <a href=''><FaBalanceScale></FaBalanceScale></a>
                      </div>
                    </div>
              </Col>
            
              <Col sm={12} md={6} lg={4} className='mainimg pt-3'>
                  <img src={s3} className='border w-100 object-fit-cover'></img>
                    <div className='contentour text-center mb-3 mt-2'>
                      <p className='con1'>Fruit, Organic, Packaged Meals, Vegetable</p>
                      <p className='con2'>Organic Parsley</p>
                      <p className='con3'>$1.80</p>
                    </div>
                    <div className='subproduct'>
                      <button type="button" class="btn7 py-2 px-5 fs-6 border-0"><FaShoppingCart className='pb-1 pe-1'></FaShoppingCart>SELECT OPTIONS</button>
                      <div className='subpro'>
                        <a href=''><FaRegEye></FaRegEye></a>
                        <a href=''><FaRegHeart></FaRegHeart></a>
                        <a href=''><FaBalanceScale></FaBalanceScale></a>
                      </div>
                    </div>
              </Col>
            
              <Col sm={12} md={6} lg={4} className='mainimg pt-3'>
                  <img src={s4} className='border w-100 object-fit-cover'></img>
                    <div className='contentour text-center mb-3 mt-2'>
                      <p className='con1'>Fruit, Organic, Vegetable</p>
                      <p className='con2'>Organic Beetroot</p>
                      <p className='con3'>$3.99 $2.05</p>
                    </div>
                    <div className='subproduct'>
                      <button type="button" class="btn7 py-2 px-5 fs-6 border-0"><FaShoppingCart className='pb-1 pe-1'></FaShoppingCart>SELECT OPTIONS</button>
                      <div className='subpro'>
                        <a href=''><FaRegEye></FaRegEye></a>
                        <a href=''><FaRegHeart></FaRegHeart></a>
                        <a href=''><FaBalanceScale></FaBalanceScale></a>
                      </div>
                    </div>
              </Col>
            
              <Col sm={12} md={6} lg={4} className='mainimg pt-3'>
                  <img src={s5} className='border w-100 object-fit-cover'></img>
                    <div className='contentour text-center mb-3 mt-2'>
                      <p className='con1'>Fruit, Packaged Meals</p>
                      <p className='con2'>Simply Tostitos Blue Corn...</p>
                      <p className='con3'>$8.00 – $29.00</p>
                    </div>
                    <div className='subproduct'>
                      <button type="button" class="btn7 py-2 px-5 fs-6 border-0"><FaShoppingCart className='pb-1 pe-1'></FaShoppingCart>SELECT OPTIONS</button>
                      <div className='subpro'>
                        <a href=''><FaRegEye></FaRegEye></a>
                        <a href=''><FaRegHeart></FaRegHeart></a>
                        <a href=''><FaBalanceScale></FaBalanceScale></a>
                      </div>
                    </div>
              </Col>
            
              <Col sm={12} md={6} lg={4} className='mainimg pt-3'>
                  <img src={s6} className='border w-100 object-fit-cover'></img>
                    <div className='contentour text-center mb-3 mt-2'>
                      <p className='con1'>Fruit, Organic, Packaged Meals</p>
                      <p className='con2'>Crisco Organic Refined Coconut...</p>
                      <p className='con3'>$23.00</p>
                    </div>
                    <div className='subproduct'>
                      <button type="button" class="btn7 py-2 px-5 fs-6 border-0"><FaShoppingCart className='pb-1 pe-1'></FaShoppingCart>SELECT OPTIONS</button>
                      <div className='subpro'>
                        <a href=''><FaRegEye></FaRegEye></a>
                        <a href=''><FaRegHeart></FaRegHeart></a>
                        <a href=''><FaBalanceScale></FaBalanceScale></a>
                      </div>
                    </div>
              </Col>
            
              <Col sm={12} md={6} lg={4} className='mainimg pt-3'>
                  <img src={s7} className='border w-100 object-fit-cover'></img>
                   <div className='contentour text-center mb-3 mt-2'>
                      <p className='con1'>Baking, Packaged Meals</p>
                      <p className='con2'>Happy Baby Organics Strawberry...</p>
                      <p className='con3'>$8.00</p>
                    </div>
                    <div className='subproduct'>
                      <button type="button" class="btn7 py-2 px-5 fs-6 border-0"><FaShoppingCart className='pb-1 pe-1'></FaShoppingCart>SELECT OPTIONS</button>
                      <div className='subpro'>
                        <a href=''><FaRegEye></FaRegEye></a>
                        <a href=''><FaRegHeart></FaRegHeart></a>
                        <a href=''><FaBalanceScale></FaBalanceScale></a>
                      </div>
                    </div>
              </Col>
            
              <Col sm={12} md={6} lg={4} className='mainimg pt-3'>
                  <img src={s8} className='border w-100 object-fit-cover'></img>
                    <div className='contentour text-center mb-3 mt-2'>
                      <p className='con1'>Baking, Fruit, Organic, Vegetable</p>
                      <p className='con2'>Organic Mushrooms, 250g</p>
                      <p className='con3'>$2.50</p>
                    </div>
                    <div className='subproduct'>
                      <button type="button" class="btn7 py-2 px-5 fs-6 border-0"><FaShoppingCart className='pb-1 pe-1'></FaShoppingCart>SELECT OPTIONS</button>
                      <div className='subpro'>
                        <a href=''><FaRegEye></FaRegEye></a>
                        <a href=''><FaRegHeart></FaRegHeart></a>
                        <a href=''><FaBalanceScale></FaBalanceScale></a>
                      </div>
                    </div>
              </Col>
                
            </Row>
        </Col>
        
        </Row>
        

    </Container>
</div>

{/* ========================= end ========================== */}





     <Footer/>
</div>
        </>
    )
}

export default Blog;