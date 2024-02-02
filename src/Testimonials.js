import './App.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaQuoteLeft} from "react-icons/fa";
import m1 from './image/m1.webp'
import m2 from './image/m2.jpeg'
import m3 from './image/m3.jpeg'



function Testimonials() {
    return(
        <>

{/* ========= Our Clients Testimonials start ===================== */}
            <div className='monial'>

            <h1 className='text-center'>Our Clients Testimonials</h1>

                <OwlCarousel className='owl-theme pt-5' items={1} loop dots={false}>

                      <div class='item' className='text-center test3'>
                        <img src={m1} className='object-fit-cover m-auto rounded-circle'></img>
                        <i className='fs-3'><FaQuoteLeft></FaQuoteLeft></i>
                        <p>I’d like to admit that the quality of clothes is really good. I ordered different items from different manufacturers, and they are all high-class!</p>
                        <h5>Tim Diaz</h5>
                        <h6>Customer</h6>
                      </div>

                      <div class='item' className='text-center test3'>
                        <img src={m2} className='object-fit-cover m-auto rounded-circle'></img>
                        <i className='fs-3'><FaQuoteLeft></FaQuoteLeft></i>
                        <p>I’d like to admit that the quality of clothes is really good. I ordered different items from different manufacturers, and they are all high-class!</p>
                        <h5>Tim Diaz</h5>
                        <h6>Customer</h6>
                      </div>

                      <div class='item' className='text-center  test3'>
                        <img src={m3} className='object-fit-cover m-auto rounded-circle'></img>
                        <i className='fs-3'><FaQuoteLeft></FaQuoteLeft></i>
                        <p>I’d like to admit that the quality of clothes is really good. I ordered different items from different manufacturers, and they are all high-class!</p>
                        <h5>Tim Diaz</h5>
                        <h6>Customer</h6>
                      </div>

                </OwlCarousel>;
            </div>
{/*============================ Our Clients Testimonials end ======================== */}


        </>
    )
}

export default Testimonials;