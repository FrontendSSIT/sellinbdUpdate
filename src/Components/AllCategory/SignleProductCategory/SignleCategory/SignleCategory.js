import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link,} from 'react-router-dom'
// import fakeData from '../../../fakeData/fakeData';
import { NavBars } from '../../../Home/NavBars/NavBars';
import primimum from '../../../../images/premiumAddBanner.png'
import car from '../../../../images/icons/car.png'
import { AgriculturalTool } from '../../../SearchProduct/Category/Agricultural/AgriculturalTools/AgriculturalTools';
import { Loaders } from '../../../Loader/Loaders';
import { LocationOn } from '@material-ui/icons';
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import AdSense from 'react-adsense';

export const SignleCategorys = (props) => {
    const [signleProduct,setSignleProduct]=useState([])
    const[success,setSuccess]=useState(false)
    const category=localStorage.getItem('category')
    useEffect(()=>{
        fetch(`http://sellinbd.com/api330088/product/searchbyCategory.php?category=${category}&page_number=1&item_count=1000`)
        .then(res=>{
            if(res.status===200){
                setSuccess(true)
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
        <section  className="category">
          
           {
            signleProduct.length>0? <Container >
                  {/* <div className="primimum"> <img src={primimum } alt=""/> </div> */}
               <Row className="justify-content-center">
               <Col lg={7} ><h1>{props.name}</h1></Col>
               </Row>
               <Row className="justify-content-center" >
               <Col lg={2}>
               <div className="AdsenceAd">
               <AdSense.Google
               client='ca-pub-8079553022041537'
               slot='7806394673'
               format='auto'
             />
               </div>
              
             </Col>
                   <Col lg={8} xs={12}>
                   <Row className="justify-content-center" >
                  
                   {
                    signleProduct.map(product=><SignleCategory product={product} success={success}/>)
                   }
                   </Row>
                   </Col>
                   <Col lg={2}>
                   <AdSense.Google
                   client='ca-pub-8079553022041537'
                   slot='7806394673'
                   format='auto'
                 />
                 </Col>
                     </Row>
               </Container>:<Loaders/>
           }
           
          
        </section>
    )
}

export const SignleCategory = ({product}) => {
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
