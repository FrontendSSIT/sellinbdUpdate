import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBars } from '../../../../Home/NavBars/NavBars'

export const Opticals = (props) => {
    const[products,setProducts]=useState([])
    const[products1,setProducts1]=useState([])
    const[products3,setProducts3]=useState([])
    const[products4,setProducts4]=useState([])
    const[success,setSuccess]=useState()
    

    useEffect(()=>{
        fetch('https://sellinbd.com/api330088/product/searchbyItem.php?item=Optical&page_number=1&item_count=10')
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
    useEffect(()=>{
        fetch('https://sellinbd.com/api330088/product/searchbyItem.php?item=Optical&page_number=2&item_count=10')
        .then(res=>{
            if(res.status===200){
                setSuccess(true)
                res.json()
                .then(result=>{
                    if(result){
                        setProducts1(result.records)
                    }
            })
            }
        })
    },[])
    useEffect(()=>{
        fetch('https://sellinbd.com/api330088/product/searchbyItem.php?item=Optical=3&item_count=10')
        .then(res=>{
            if(res.status===200){
                setSuccess(true)
                res.json()
                .then(result=>{
                    if(result){
                        setProducts3(result.records)
                    }
            })
            }
        })
    },[])
    useEffect(()=>{
        fetch('https://sellinbd.com/api330088/product/searchbyItem.php?item=Optical=4&item_count=10')
        .then(res=>{
            if(res.status===200){
                setSuccess(true)
                res.json()
                .then(result=>{
                    if(result){
                        setProducts4(result.records)
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
                    products.map(product=><Optical product={product} success={success}/>)
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
                    products1.map(product=><Optical product={product} success={success}/>)
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
                    products3.map(product=><Optical product={product} success={success}/>)
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
                    products4.map(product=><Optical product={product} success={success}/>)
                }
                </Row>
                </Col>
                  </Row>
            </Container>
          
        </section>
    )
}


export const Optical = ({product,success}) => {
    return (
              
                  <Col lg={5} xs={6} md={3} m-auto>
                       {success?
                       <div className="category-items ">
                           <img src={product.image1} alt=""/>
                            <p>{product.category}</p>
                            <p>{product.item}</p>
                            <p>{product.productprice}</p>
                            <p>{product.place}</p>
                           <div className="premium"> 
                               {
                                product.status==="PREMIUM"? <h1>Hi</h1>:null
                            }
                            </div>
                       </div>:<h1>Product Not Found</h1>

                        }
                   </Col>
                 
    )
}
