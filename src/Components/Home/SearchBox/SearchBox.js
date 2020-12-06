import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AgriculturalTool } from '../../SearchProduct/Category/Agricultural/AgriculturalTools/AgriculturalTools'
import { NavBars } from '../NavBars/NavBars'

export const SearchBox = ({searchValue,success}) => {
 
    return (
        <section  className="category">
        <NavBars/>
            <Container >
               {/* <div className="primimum"> <img src={primimum } alt=""/> </div> */}
            <Row className="justify-content-center">
          
            </Row>
            <Row className="justify-content-center" >
                <Col lg={8} xs={12}>
                <Row className="justify-content-center" >
               
                {
                    searchValue.map(product=><AgriculturalTool product={product} success={success}/>)
                }
                </Row>
                </Col>
                  </Row>
            </Container>
           
          
        </section>
    )
}
