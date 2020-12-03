import { Container } from '@material-ui/core'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import carsole1 from '../../../images/BlueCar.png';
import carsole2 from '../../../images/blackCar.png';
import carsole3 from '../../../images/BlueCar.png';
import './ProductDetails.scss'
import { Categorys } from '../Category/Category';
import { NavBars } from '../../Home/NavBars/NavBars';
import { Footer } from '../../Home/Footer/Footer';

export const ProductDetails = () => {
    return (
        <section>
            <Container className="text-center pt-3">
                <NavBars/>
                <Row className="justify-content-center">
                    <Col lg={8}>
                    <Carousel className="CarouselSlider">
                <Carousel.Item>
                <Row>
                    <div className="col-md-12 m-auto">
                    <img
                  className="d-block w-100"
             src={carsole1}
             alt="First slide"
                    />
                    
                    </div>
                    </Row>
            </Carousel.Item>
         <Carousel.Item>
              <Row>
                  <div className="col-md-12 m-auto">
                  <img
               className="d-block w-100"
                src={carsole2}
                alt="Third slide"
                 />
                  </div>
                  </Row>
                 </Carousel.Item>
                <Carousel.Item>
                   <Row>
                       <div className="col-md-12 m-auto">
                       <img
                 className="d-block w-100"
             src={carsole3}
             alt="Third slide"
                />
                       </div>
                       </Row>
        </Carousel.Item>
        </Carousel>
                    </Col>
                </Row>
            </Container>
            <Container className="product-summary-container">
                <Row className="justify-content-center " >
                    <div class="product-summary">
                    <Col lg={7}>
                        <div>
                       <h2>Title: Xiaomi</h2>
                       <h2>BTD: 10.200 (Negotiable)</h2>
                       <h4>Product Status: Used</h4>
                       <h6>Seller info: Azaharul Islam</h6>
                        </div>
                        
                         </Col>

                         <Col lg={7}>
                        <div >
                       <h3>Model: Redmi Y3</h3>
                       <h3>Category: Mobile Phone, Mobile and Tablets</h3>
                       <h5>Location: Mohammadpur, Dhaka</h5>
                       
                        </div>
                        
                         </Col>

                         <Col lg={7}>
                        <div >
                        <h1>Description</h1>
                       <h3>Display: 6" , RAM: 6GB, ROM: 32GB</h3>
                       <h5>Snapdragon Chipset, Official, Full Fresh</h5>
                        </div>
                        
                         </Col>
                         <button className="call"> Call</button>
                         <button className="chat"> Chat</button>
                         </div>
                        
                </Row>
                
                <Categorys name="Related Items"/>
            </Container>
            <Footer/>
        </section>
    )
}
