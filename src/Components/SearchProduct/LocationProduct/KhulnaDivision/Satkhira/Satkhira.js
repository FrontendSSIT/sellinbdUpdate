import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBars } from '../../../../Home/NavBars/NavBars'
import { AgriculturalTool } from '../../../Category/Agricultural/AgriculturalTools/AgriculturalTools'

export const Satkhira = (props) => {
    const[products,setProducts]=useState([])
    const[success,setSuccess]=useState(false)
    

    useEffect(()=>{
        fetch('https://sellinbd.com/api330088/product/searchbyPlace.php?place=Satkhira&page_number=1&item_count=1000')
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


/* <Container >
            <Row className="justify-content-center">
            <Col lg={7} ><h1>{props.name}</h1></Col>
            </Row>
            <Row className="justify-content-center" >
                <Col lg={8} xs={12}>
                <Row className="justify-content-center" >
               
                {
                    products1.map(product=><AgriculturalTool product={product} success={success}/>)
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
                    products3.map(product=><AgriculturalTool product={product} success={success}/>)
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
                    products4.map(product=><AgriculturalTool product={product} success={success}/>)
                }
                </Row>
                </Col>
                  </Row>
            </Container>*/