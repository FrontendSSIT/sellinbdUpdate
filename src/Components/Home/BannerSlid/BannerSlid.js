import React from 'react';
import carsole1 from '../../../images/Bicycle.jpg';
import carsole2 from '../../../images/Shaal.jpg';
import carsole3 from '../../../images/BlueCar.png';

import Carousel from 'react-bootstrap/Carousel'

import { Col, Row,Container, Nav} from 'react-bootstrap';
import './BannerSlid.scss'
import ads from '../../../images/sliderAd.png'

import { NavBars } from '../NavBars/NavBars';

export const BannerSlid = () => {
    
    return (
        <section className="portfolio">
            <Container>
                <NavBars/>
                <Row className="justify-content-md-center">
              <Col lg={8}>
              <Carousel className="CarouselSlider">
                <Carousel.Item>
                <Row>
                    <div className="slider-img m-auto">
                    <img
                  className="d-block"
             src={carsole1}
             alt="First slide"
                    />
                     <br/>
                    <p> 1000 TK</p>
                    <img src={ads} alt="" className="ads"/>
                    
                    </div>
                    </Row>
            </Carousel.Item>
         <Carousel.Item>
              <Row>
                  <div className="slider-img m-auto">
                  <img
               className=" w-100"
                src={carsole2}
                alt="Third slide"
                 />
                    <br/>
                    <p> 1000 TK</p>
                    <img src={ads} alt="" className="ads"/>
                  </div>
                  </Row>
                 </Carousel.Item>
                <Carousel.Item>
                   <Row>
                       <div className="slider-img m-auto">
                       <img
                 className=" w-100"
             src={carsole3}
             alt="Third slide"
                />
                   <br/>
                    <p> 1000 TK</p>
                    <img src={ads} alt="" className="ads"/>
                       </div>
                       </Row>
        </Carousel.Item>
        </Carousel>
              </Col>
              
                </Row>
            </Container>
        </section>
    )
}