import { Container } from '@material-ui/core';
import React, {  useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './category.scss';
import { Link } from 'react-router-dom';
import primimum from '../../../images/premiumAddBanner.png'
import {  LocationOn, } from '@material-ui/icons';
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';




export const Categorys = (props) => {
    const[products,setProducts]=useState([])
    const[aa,setAA]=useState(1)
    
    useEffect((e)=>{
   
        fetchData()
       
  
    },[])
    const fetchData=()=>{
        let plus=aa+1
        setAA(plus)
        fetch(`https://sellinbd.com/api330088/product/readProductWeb.php?page_number=${aa}&item_count=7`)
        .then(res=>res.json())
        .then(result=>{
                if(result){
                    setProducts([...products,...result.records])
                }
        })
       
    }

    return (
          
        <section  className="category">
            <Container fluid="md">
               {/* <div className="primimum"> <img src={primimum } alt=""/> </div> */}
            <Row className="justify-content-center">
            <Col lg={7} ><h1>{props.name}</h1></Col>
            </Row>
            <Row className="justify-content-center" >
                <Col lg={8} xs={12}>
                <InfiniteScroll
                dataLength={products.length}
                next={fetchData}
                hasMore={true}
                loader={<Loader/>}
                >
                <Row className="justify-content-center" >
               
                {
                    products.map(product=><Category product={product}/>)
                }
                </Row>
                </InfiniteScroll>
                </Col>
                  </Row>
            </Container>
           
          
        </section>

    )
}


export const Category = ({product}) => {
    const formatter = buildFormatter(frenchStrings)
    const postId=product.post_id
    const category=product.category
    return (
              
               <Col lg={5} xs={6} m-auto>
                     <Link to={`/produtcDetails/${category}/${postId}`}>
                       <div className="category-items " id={product.status==="PREMIUM"?"bgColor":null}>
                           <img src={product.image1} alt=""/>
                            <p style={{color:'#3F9DFF'}}><strong>{product.productname}</strong></p>
                            <p><strong> BDT. {product.productprice}</strong></p>
                            <p><LocationOn/>{product.place}</p>
                            {
                                product.status==="PREMIUM"?null: <p><TimeAgo date={product.date} formatter={formatter} /></p>
                            }
                         {product.status==="PREMIUM"? 
                            <div className={product.status==="PREMIUM"?"premium":null}> 
                            {
                             product.status==="PREMIUM"? <img src={primimum} alt=""/>:null
                         }
                         </div>:null
                         }
                       </div>
                       </Link>
                   </Col>
                
    )
}

