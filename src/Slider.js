import './App.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './image/img1.jpeg'

function Slider() {
    return(
        <>

    <div className='slider position-relative' >
        <img src={img1} class="img-fluid w-100 object-fit-cover"></img>
        <Container>
          <div className='content '>
            <h1 className='mb-3 fw-bold'>Green Leaves <br></br>Up To 20% Off</h1>
            <h2 className='mb-4'>Always Fresh, Crispy and Full of Vitamins</h2>
            <button type="button" class="btn1 border-0">ADD TO CART</button>
            </div>
          </Container>   
    </div>

        </>
    )
}

export default Slider;