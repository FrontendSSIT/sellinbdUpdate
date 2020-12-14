import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
// import fakeData from '../../../fakeData/fakeData';
import { NavBars } from '../../../Home/NavBars/NavBars';
import './SignleProduct.scss';
import car from '../../../../images/icons/car.png'


export const SignleCategorys = ({signleProduct}) => {
 
    console.log(signleProduct)
    return (
        <>
        <NavBars/>
        <section className="signle-category">
            <Container >
                <Row className="justify-content-center">
               {
                signleProduct.map(signleProducts=><SignleCategory signleProducts={signleProducts}/>)
               }
                </Row>
            </Container>
        </section>
        </>
    )
}

export const SignleCategory = ({signleProducts}) => {
    
    return (

       <Col lg={5} xs={6} >
        <Row>
            <Col lg={{span:4,offset:2}}>
             <h2>{signleProducts?.productname}</h2>
            </Col>
        </Row>
    </Col>
    )
}