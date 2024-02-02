import './App.css';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdCart} from "react-icons/io";
import { FaBars} from "react-icons/fa";
import logo from './image/logo.webp'
import { Link } from "react-router-dom";


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        
        <div className='topinfo'>
      <Container>
        <Row  className='justify-content-between align-items-center '>
          <Col sm='auto'>
            <div className='leftinfo'>
              <p>Last sale up to 20% OFF. Use code “SALE70”.</p>
            </div>
          </Col>
          <Col >
            <div className='rightinfo'>
              <ul className='d-flex justify-content-end'>
                <li className='ms-xs-1 ms-sm-2'><a href=''>COMPARE</a></li>
                <li className='ms-xs-1 ms-sm-2'><a href=''>WISHLIST</a></li>
                <li className='ms-xs-1 ms-sm-2'><a href=''>LOGIN</a></li>
                <li className='ms-xs-1 ms-sm-2'><a href=''><IoMdCart className='i1'></IoMdCart>CART</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
{/* ========================== header start  ===========================*/}
    <div className='header'>
      <Container>
        <Row className='justify-content-between d-flex align-items-center'>
          <Col>
            <img src={logo}></img>
          </Col>
          <Col className='d-none d-md-block'>
            <ul className='mainmenu d-flex'>
              <li><a href=''><Link to="/">HOME</Link></a></li>
              <li><a href=''><Link to="/about">ABOUT</Link></a></li>
              <li><a href=''><Link to="/team">TEAM</Link></a></li>
              <li><a href=''><Link to="/blog">BLOG</Link></a></li>
              <li><a href=''><Link to="/shop">SHOP</Link></a>
                <ul className='submenu'>
                  <li><a href=''>Baking</a></li>
                  <li><a href=''>Fruit</a></li>
                  <li><a href=''>Organic</a></li>
                  <li><a href=''>Packaged Meals</a></li>
                  <li><a href=''>Vegetable</a></li>
                </ul>
              </li>
              <li><a href=''><Link to="/contacts">CONTACTS</Link></a></li>
            </ul>
          </Col>
          <Col className='text-end d-block d-md-none'>
          <Button variant="primary" onClick={handleShow} className='bg-transparent text-black fs-3 border-0 '><FaBars className=''></FaBars></Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className='mainmenu'>
              <li className='pb-2'><a href=''>HOME</a></li>
              <li className='pb-2'><a href=''>ABOUT</a></li>
              <li className='pb-2'><a href=''>TEAM</a></li>
              <li className='pb-2'><a href=''>BLOG</a></li>
              <li className='pb-2'><a href=''>SHOP</a>
                <ul className='submenu'>
                  <li  className='pb-2'><a href=''>Baking</a></li>
                  <li  className='pb-2'><a href=''>Fruit</a></li>
                  <li  className='pb-2'><a href=''>Organic</a></li>
                  <li  className='pb-2'><a href=''>Packaged Meals</a></li>
                  <li  className='pb-2'><a href=''>Vegetable</a></li>
                </ul>
              </li>
              <li><a href=''>CONTACTS</a></li>
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
          </Col>

        </Row>
      </Container>
    </div>
        
        
        </>
    )

}

export default Header;