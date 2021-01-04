import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { NavBarSub } from '../../Home/NavBars/NavBars';
import { Footer } from '../../Home/Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.scss'
import { Loaders } from '../../Loader/Loaders';
import { SignleCategorys } from '../SignleProductCategory/SignleCategory/SignleCategory';
import { Call } from '@material-ui/icons';



export const ProductDetails = () => {
    // let match = useRouteMatch("/produtcDetails/:category/:postId");
    const [productDetail,setProductDetail] =useState([])
    const [call,setCall] = useState(false)
    localStorage.setItem('productuser',productDetail.usernumber1)
  const {postId}=useParams()
  localStorage.setItem('postId',postId)
  
 const id= localStorage.getItem('postId')
    useEffect(()=>{
        const formData = new FormData()
        formData.append('post_id',id)
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
        window.scroll({
            top: 0,
            behavior: 'smooth',
          });
    },[id])

    const {category}=useParams()
    console.log(category)
    localStorage.setItem('category',category)
   const loginUserNumber=localStorage.getItem('userNumber')
   const number=productDetail.usernumber1;

   const [index, setIndex] = useState(0);
console.log(index)
   const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
   };
 
    return (
    <>   
    <NavBarSub/>
    <Row className="justify-content-center ">
    <Col lg={12}>
    {
        productDetail.image1? <div className="productDetails">
        <Container className="text-center pt-3" fuild>
          
            <Row className="justify-content-center">
                <Col lg={8} xs={12}>
                <Carousel className="CarouselSlider" activeIndex={index} onSelect={handleSelect}>
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
            <Container className="product-summary-container" fuild>
            <Row className="justify-content-center " >
               <Col lg={8} xs={12}>
               <div class="product-summary">
               <Row>
               <Col lg={12} xs={12} className="text-left">
                   <div>
                  <h2>Title: {productDetail.productname}</h2>
                  <h2>BTD: {productDetail.productprice} ({productDetail.priceStatus})</h2>
                  <h4>Product Status: {productDetail.productStatus}</h4>
                  <h6 style={{color:'#3F9DFF'}}>Seller info: {productDetail.username}</h6>
                   </div>
                   
                    </Col>
               </Row>

                    <Row>
                    <Col lg={12} xs={12} className="text-left" >
                   <div >
                 {
                    productDetail.model !=="NULL"?<h3>Model:{productDetail.model}</h3>:null
                 }
                  <h3>Category: {productDetail.category}</h3>
                  <h5>Location: {productDetail.place} {productDetail.district}</h5>
                  
                   </div>
                   
                    </Col>
                    </Row>

                   <Row>
                   <Col lg={12} xs={12} className="text-left">
                   <div >
                   <h4> <p style={{color:'#3F9DFF',fontSize:'20px'}}>Description</p>{productDetail.productdescription}</h4>
                
                   </div>
                   
                    </Col>
                   </Row>
                   {
                       loginUserNumber===productDetail.usernumber1?null: <button className="call" onClick={()=>setCall(!call)} > Call  { call?<p>{productDetail.usernumber1} <a href={`tel:${productDetail.usernumber1}`} style={{color:'#fff',padding:'5px'}}> <Call/> </a></p>:null}
                       { call?<p>{productDetail?.usernumber2}  <a href={`tel:${productDetail.usernumber2}`} style={{color:'#fff',padding:'5px'}}> <Call/> </a></p>:null}</button>
                   }
                   
                     {
                         call?null: <>
                         {
                            loginUserNumber===productDetail.usernumber1?null:   <Link className="chat" to={`/chatView/${number}/${postId}`}> Chat</Link>
                     }
                         </>
                     }
                    </div>
               </Col>                
            </Row>    
        </Container>
        </Container>  
    </div>:<Loaders/>
    }
    
    </Col>
    </Row>
    <SignleCategorys name="Related Items"/>
    <Footer/>
    </>
    )
}

