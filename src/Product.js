import './App.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaShoppingCart,FaRegEye,FaRegHeart,
  FaBalanceScale} from "react-icons/fa";
import o1 from './image/o1.webp'
import o2 from './image/o2.webp'
import o3 from './image/o2.webp'
import o4 from './image/o4.webp'
import o5 from './image/o5.webp'
import o6 from './image/o6.webp'
import o7 from './image/o7.webp'
import o8 from './image/o8.webp'




function Product() {
    return(
        <>
        
        {/* =============================== our product start ======================= */}
        <div className='pd-y'>
          <Container>
            <div className='ourtop text-center pb-5'>
              <h1 className='fs-7'>Our Products</h1>
              <ul className='d-flex justify-content-center'>
                <li className='ps-3 fs-6'><a href=''>NEW ARRIVALS</a></li>
                <li className='ps-3 fs-6'><a href=''>ORGANIC & NATURAL</a></li>
                <li className='ps-3 fs-6'><a href=''>THE FARM STORY</a></li>
                <li className='ps-3 fs-6'><a href=''>PLUM CAKE</a></li>
              </ul>
            </div>
            <Row>
              <Col md={6} lg={3} className='mainimg'>
                  <img src={o1} className='border w-100 object-fit-cover'></img>
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
            
              <Col md={6} lg={3} className='mainimg'>
                  <img src={o2} className='border w-100 object-fit-cover'></img>
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
            
              <Col md={6} lg={3} className='mainimg'>
                  <img src={o3} className='border w-100 object-fit-cover'></img>
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
            
              <Col md={6} lg={3} className='mainimg'>
                  <img src={o4} className='border w-100 object-fit-cover'></img>
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
            
              <Col md={6} lg={3} className='mainimg pt-3'>
                  <img src={o5} className='border w-100 object-fit-cover'></img>
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
            
              <Col md={6} lg={3} className='mainimg pt-3'>
                  <img src={o6} className='border w-100 object-fit-cover'></img>
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
            
              <Col md={6} lg={3} className='mainimg pt-3'>
                  <img src={o7} className='border w-100 object-fit-cover'></img>
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
            
              <Col md={6} lg={3} className='mainimg pt-3'>
                  <img src={o8} className='border w-100 object-fit-cover'></img>
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
          </Container>
        </div>
{/* =========================== our product end ================================ */}

        </>
    )
}

export default Product;