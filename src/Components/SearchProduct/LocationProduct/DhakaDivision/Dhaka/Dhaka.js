import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBarSub } from '../../../../Home/NavBars/NavBars'
import { Loaders } from '../../../../Loader/Loaders'
import { AgriculturalTool } from '../../../Category/Agricultural/AgriculturalTools/AgriculturalTools'


export const Dhaka= (props) => {
    const[products,setProducts]=useState([])
    const[success,setSuccess]=useState(false)
    const location=localStorage.getItem('Location')
    useEffect(()=>{
        fetch(`https://sellinbd.com/api330088/product/searchbyPlace.php?place=${location}&page_number=1&item_count=1000`)
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
            products.length>0?
            <Container >
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
            </Container> :<Loaders/>
        }
        </section>
    )
}


