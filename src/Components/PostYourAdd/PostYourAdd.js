import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'

import fig from '../../images/Icon.png';
import './PostYourAdd.scss'
import {  NavBarSub } from '../Home/NavBars/NavBars';
import { Link } from 'react-router-dom';



export const PostYourAdd = () => {
  
    return (
        <section className="post-add-cotainer">
            <NavBarSub/>
             <h2  className="text-center">Sell In BD</h2> 
            <Container >
                

                <Row className="justify-content-center">
                    
                    <Col lg={6}>
                    <div className="postadd-category">
                <Nav  className="flex-column">
                    <Nav.Link > 
                    <Link to="/sellProductPost" ><img src={fig} alt=""/> Sell a Product</Link>
                    </Nav.Link>
                    <Nav.Link > 
                    <Link to="/sellPetsPost" ><img src={fig} alt=""/> Sell Pets & Animal</Link>
                    </Nav.Link>
                    <Nav.Link > 
                    <Link to="/sellAgriculturalPost" ><img src={fig} alt=""/> Sell Agricultural Product</Link>
                    </Nav.Link>
                    <Nav.Link > <Link to="/sellDailyPost"><img src={fig} alt=""/> Sell Daily Needs</Link></Nav.Link>
                    <Nav.Link > <Link to="/sellMedicinePost"><img src={fig} alt=""/> Sell Medicine</Link></Nav.Link>
                    <Nav.Link > <Link to="/sellServicePost"><img src={fig} alt=""/> Sell a Service</Link></Nav.Link>
                    
                    <Nav.Link > <Link to="/PostAJob"><img src={fig} alt=""/>Post a Job</Link></Nav.Link>
                    <Nav.Link > <Link to="/buyPost"><img src={fig} alt=""/>Buy Something</Link></Nav.Link>
                
                  </Nav>
                 
                    </div>
</Col>
                </Row>
               
            </Container>
        </section>
    )
}
