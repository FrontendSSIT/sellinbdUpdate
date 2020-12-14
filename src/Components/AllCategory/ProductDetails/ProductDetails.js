import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { NavBarSub } from '../../Home/NavBars/NavBars';
import { Footer } from '../../Home/Footer/Footer';
import { useParams } from 'react-router-dom';
import './ProductDetails.scss'
import { Loaders } from '../../Loader/Loaders';
import { SignleCategory } from '../SignleProductCategory/SignleCategory/SignleCategory';


export const ProductDetails = () => {
    const [productDetail,setProductDetail] =useState([])
  const {postId}=useParams()
    useEffect(()=>{
        const formData = new FormData()
        formData.append('post_id',postId)
        fetch('https://sellinbd.com/api330088/product/readProductbyId.php',{
        method: 'POST',
        body: formData
        })
        .then(res=>res.json())
        .then(result=>{
                if(result[0]){
                    setProductDetail(result[0])
                }
        })

    },[])

    const [signleProduct,setSignleProduct]=useState([])
    console.log(signleProduct)
    const {category}=useParams()
    console.log(category)
    useEffect(()=>{
        fetch(`http://sellinbd.com/api330088/product/searchbyCategory.php?category=${category}&page_number=1&item_count=1000`)
        .then(res=>{
            if(res.status===200){
                res.json()
                .then(result=>{
                    if(result){
                        setSignleProduct(result.records)
                    }
            })
            }
        })
    },[])
    return (
       <section>
       <NavBarSub/>
       <Row className="justify-content-center ">
       <Col lg={12}>
       {
           productDetail.image1? <div className="productDetails">
           <Container className="text-center pt-3">
             
               <Row className="justify-content-center">
                   <Col lg={8} xs={12}>
                   <Carousel className="CarouselSlider">
                 {
                     productDetail?.image1!=="NULL"?
                     <Carousel.Item>
                     <Row>
                         <div className="col-md-12 m-auto">
                         <img
                       className="d-block w-100"
                  src={productDetail?.image1}
                  alt="First slide"
                         />
                         
                         </div>
                         </Row>
                 </Carousel.Item>:null
                 }
                 {
                   productDetail?.image2!=="NULL"?
                   <Carousel.Item>
                   <Row>
                       <div className="col-md-12 m-auto">
                       <img
                     className="d-block w-100"
                src={productDetail?.image2}
                alt="First slide"
                       />
                       
                       </div>
                       </Row>
               </Carousel.Item>:null
               }
               {
                   productDetail?.image3!=="NULL"?
                   <Carousel.Item>
                   <Row>
                       <div className="col-md-12 m-auto">
                       <img
                     className="d-block w-100"
                src={productDetail?.image3}
                alt="First slide"
                       />
                       
                       </div>
                       </Row>
               </Carousel.Item>:null
               }
      
       </Carousel>
                   </Col>
               </Row>
           </Container>
         
          
       </div>:<Loaders/>
       }
       
       </Col>
       </Row>
       <SignleCategory signleProduct={signleProduct}/>
       <Footer/>
       </section>
    )
}
