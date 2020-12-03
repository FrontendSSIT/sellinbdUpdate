import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './category.scss';
import { Link } from 'react-router-dom';
import primimum from '../../../images/premiumAddBanner.png'



export const Categorys = (props) => {
    const[products,setProducts]=useState([])
    const[products1,setProducts1]=useState([])
    const[products3,setProducts3]=useState([])
    const[products4,setProducts4]=useState([])
    

    useEffect(()=>{
        fetch('https://sellinbd.com/api330088/product/readProductWeb.php?page_number=1&item_count=10')
        .then(res=>res.json())
        .then(result=>{
                if(result){
                    setProducts(result.records)
                }
        })
    },[])
    useEffect(()=>{
        fetch('https://sellinbd.com/api330088/product/readProductWeb.php?page_number=2&item_count=10')
        .then(res=>res.json())
        .then(result=>{
                if(result){
                    setProducts1(result.records)
                }
        })
    },[])
    useEffect(()=>{
        fetch('https://sellinbd.com/api330088/product/readProductWeb.php?page_number=3&item_count=10')
        .then(res=>res.json())
        .then(result=>{
                if(result){
                    setProducts3(result.records)
                }
        })
    },[])
    useEffect(()=>{
        fetch('https://sellinbd.com/api330088/product/readProductWeb.php?page_number=4&item_count=10')
        .then(res=>res.json())
        .then(result=>{
                if(result){
                    setProducts4(result.records)
                }
        })
    },[])

    return (
          
        <section  className="category">
            <Container fluid="md">
               {/* <div className="primimum"> <img src={primimum } alt=""/> </div> */}
            <Row className="justify-content-center">
            <Col lg={7} ><h1>{props.name}</h1></Col>
            </Row>
            <Row className="justify-content-center" >
                <Col lg={8} xs={12}>
                <Row className="justify-content-center" >
               
                {
                    products.map(product=><Category product={product}/>)
                }
                </Row>
                </Col>
                  </Row>
            </Container>
            <Container fluid="md">
            <Row className="justify-content-center">
            <Col lg={7} sm={6}><h1>{props.name}</h1></Col>
            </Row>
            <Row className="justify-content-center" >
                <Col lg={8} xs={12}>
                <Row className="justify-content-center" >
               
                {
                    products1.map(product=><Category product={product}/>)
                }
                </Row>
                </Col>
                  </Row>
            </Container>
            <Container fluid="md">
            <Row className="justify-content-center">
            <Col lg={7} ><h1>{props.name}</h1></Col>
            </Row>
            <Row className="justify-content-center" >
                <Col lg={8} xs={12}>
                <Row className="justify-content-center" >
               
                {
                    products3.map(product=><Category product={product}/>)
                }
                </Row>
                </Col>
                  </Row>
            </Container>

            <Container >
            <Row className="justify-content-center">
            <Col lg={7} ><h1>{props.name}</h1></Col>
            </Row>
            <Row className="justify-content-center" >
                <Col lg={8} xs={12}>
                <Row className="justify-content-center" >
               
                {
                    products4.map(product=><Category product={product}/>)
                }
                </Row>
                </Col>
                  </Row>
            </Container>
          
        </section>

    )
}


export const Category = ({product}) => {
    return (
              
               <Col lg={5} xs={6} m-auto>
                     <Link to="/produtcDetails">
                       <div className="category-items ">
                           <img src={product.image1} alt=""/>
                            <p>{product.category}</p>
                            <p>{product.item}</p>
                            <p>{product.productprice}</p>
                            <p>{product.place}</p>
                           <div className="premium"> 
                               {
                                product.status==="PREMIUM"? <img src={primimum} alt=""/>:null
                            }
                            </div>
                       </div>
                       </Link>
                   </Col>
                
    )
}

