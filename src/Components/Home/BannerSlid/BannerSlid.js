import React, { useEffect, useState } from 'react';
// import carsole1 from '../../../images/Bicycle.jpg';
// import carsole2 from '../../../images/Shaal.jpg';
// import carsole3 from '../../../images/BlueCar.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Carousel from 'react-bootstrap/Carousel'

import { Col, Row,Container, Nav} from 'react-bootstrap';
import './BannerSlid.scss'
import ads from '../../../images/sliderAd.png'

import { NavBars } from '../NavBars/NavBars';

export const BannerSlid = () => {
    
    const [slide,setSlide]=useState([])
    // console.log(slide)

    useEffect(()=>{
        const url='https://sellinbd.com/api330088/product/readslider.php'
        fetch(url)
        .then(res=>{
            if(res.status===200){
                
                res.json()
                .then(result=>{
                    if(result){
                        setSlide(result)
                    }
            })
            }
        })
    },[])
    
    return (
        <section className="portfolio">
        <Container fluid>
            <Row className="justify-content-md-center">
            {
                slide.map(slid=><BannerAd key={slid.post_id}
                    slid={slid
                }/>)
            }
        </Row>
        </Container>
    </section>
    )
}


export const BannerAd=({slid})=>{
    
    return(
        
          <Col lg={8} xs={12}>
          <Carousel className="CarouselSlider">
            <Carousel.Item>
            <Row>
                <div className="slider-img m-auto">
                <img
              className="d-block"
         src={slid.image1}
         alt="First slide"
                />
                 <br/>
                 <p className="slidtxt"> {slid.productname}</p>
                <p> {slid.productprice} TK</p>
                <img src={ads} alt="" className="ads"/>
                
                </div>
                </Row>
        </Carousel.Item>
     <Carousel.Item>
          <Row>
              <div className="slider-img m-auto">
              <img
           className=" w-100"
            src={slid.image2}
            alt="Third slide"
             />
                <br/>
                <p className="slidtxt"> {slid.productname}</p>
                <p>{slid.productprice} TK</p>
                <img src={ads} alt="" className="ads"/>
              </div>
              </Row>
             </Carousel.Item>
            <Carousel.Item>
               <Row>
                   <div className="slider-img m-auto">
                   <img
             className=" w-100"
         src={slid.image3}
         alt="Third slide"
            />
               <br/>
               <p className="slidtxt">{slid.productname}</p>
                <p> {slid.productprice} TK</p>
                <img src={ads} alt="" className="ads"/>
                   </div>
                   </Row>
    </Carousel.Item>
    </Carousel>
          </Col>
          
         
    )
}
export const Sliderss=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 1,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
    
     
        <Slider {...settings}>
        <BannerSlid/>
        </Slider>
       
    )
}