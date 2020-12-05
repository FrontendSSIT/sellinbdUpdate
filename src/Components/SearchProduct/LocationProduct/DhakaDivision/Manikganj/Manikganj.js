import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBars } from '../../../../Home/NavBars/NavBars'
import { AgriculturalTool } from '../../../Category/Agricultural/AgriculturalTools/AgriculturalTools'

export const Manikganj = (props) => {
    const[products,setProducts]=useState([])
    const[products1,setProducts1]=useState([])
    const[products3,setProducts3]=useState([])
    const[products4,setProducts4]=useState([])
    const[success,setSuccess]=useState(false)
    

    // useEffect(()=>{
    //     fetch('https://sellinbd.com/api330088/product/searchbyPlace.php?place=Manikganj&page_number=1&item_count=1000')
    //         if(res.status===200){
    //             setSuccess(true)
    //             res.json()
    //             .then(result=>{
    //                 if(result){
    //                     setProducts(result.records)
    //                 }
    //         })
    //         }
    //     })
    // },[])
    // useEffect(()=>{
    //     fetch('https://sellinbd.com/api330088/product/searchbyItem.php?item=Agricultural Tools and Machinery&page_number=2&item_count=10')
    //     .then(res=>{
    //         if(res.status===200){
    //             setSuccess(true)
    //             res.json()
    //             .then(result=>{
    //                 if(result){
    //                     setProducts1(result.records)
    //                 }
    //         })
    //         }
    //     })
    // },[])
    // useEffect(()=>{
    //     fetch('https://sellinbd.com/api330088/product/searchbyItem.php?item=Agricultural Tools and Machinery&page_number=3&item_count=10')
    //     .then(res=>{
    //         if(res.status===200){
    //             setSuccess(true)
    //             res.json()
    //             .then(result=>{
    //                 if(result){
    //                     setProducts3(result.records)
    //                 }
    //         })
    //         }
    //     })
    // },[])
    useEffect(()=>{
        fetch('https://sellinbd.com/api330088/product/searchbyPlace.php?place=Manikganj&page_number=1&item_count=1000')
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
            <NavBars/>
            <Container >
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
            </Container>
           
        </section>
    )
}