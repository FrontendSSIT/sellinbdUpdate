import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {  NavBarSub } from '../../../../Home/NavBars/NavBars'
import { Loaders } from '../../../../Loader/Loaders'
import primimum from '../../../../../images/premiumAddBanner.png'
import { Link } from 'react-router-dom'

export const AgriculturalTools = (props) => {
    const[products,setProducts]=useState([])
    const[success,setSuccess]=useState(false)
   
  const productD =localStorage.getItem('items')
  console.log(productD)
    useEffect(()=>{
        fetch(`https://sellinbd.com/api330088/product/searchbyItem.php?item=${productD}&page_number=1&item_count=1000`)
        .then(res=>{
            if(res.status===200){
                setSuccess(true)
                res.json()
                .then(result=>{
                    if(result){
                        setProducts(result.records)
                    }
            })
            }
        })
    },[])


    return (
        <section  className="category">
          
           {
               products.length>0? <Container >
               <NavBarSub/>
                  {/* <div className="primimum"> <img src={primimum } alt=""/> </div> */}
               <Row className="justify-content-center">
               <Col lg={7} ><h1>{props.name}</h1></Col>
               </Row>
               <Row className="justify-content-center" >
                   <Col lg={8} xs={12}>
                   <Row className="justify-content-center" >
                  
                   {
                       products.map(product=><AgriculturalTool product={product} success={success}/>)
                   }
                   </Row>
                   </Col>
                     </Row>
               </Container>:<Loaders/>
           }
           
          
        </section>
    )
}


export const AgriculturalTool = ({product,success}) => {
    const postId=product.post_id
    const category=product.category
    return (
              
                  <Col lg={5} xs={6} md={3} m-auto>
                  <Link to={`/produtcDetails/${category}/${postId}`}>
                      {success? 
                       <div className="category-items ">
                           <img src={product.image1} alt=""/>
                            <p>{product.category}</p>
                            <p>{product.item}</p>
                            <p>{product.productprice}</p>
                            <p>{product.place}</p>
                           {product.status==="PREMIUM"?
                            <div className="premium"> 
                            {
                             product.status==="PREMIUM"? <img src={primimum} alt=""/>:null
                         }
                         </div>:null
                           }
                       </div>:<h1 style={{color:'red',marginLeft:'100px'}}>Product Not Found</h1>
}  </Link>
                   </Col>
                 
    )
}
