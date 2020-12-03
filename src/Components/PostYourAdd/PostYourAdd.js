import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Header } from '../Home/Header/Header'
import fig from '../../images/Icon.png';
import './PostYourAdd.scss'
import { NavBars } from '../Home/NavBars/NavBars';

export const PostYourAdd = () => {
    return (
        <section className="post-add-cotainer">
            <NavBars/>
             <h2  className="text-center">Sell In BD</h2> 
            <Container >
                

                <Row className="justify-content-center">
                    
                    <Col lg={6}>
                    <div className="postadd-category">
                    <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home"> <img src={fig} alt=""/> Sell a Product</Nav.Link>
  <Nav.Link eventKey="link-1"> <img src={fig} alt=""/> Sell Pets & Animal</Nav.Link>
  <Nav.Link eventKey="link-2"> <img src={fig} alt=""/> Sell Agricultural Product</Nav.Link>
  <Nav.Link href="/home"> <img src={fig} alt=""/> Sell Daily Needs</Nav.Link>
  <Nav.Link eventKey="link-1"> <img src={fig} alt=""/> Sell a Service</Nav.Link>
  <Nav.Link eventKey="link-2"> <img src={fig} alt=""/> Sell a Service</Nav.Link>
  <Nav.Link href="/home"> <img src={fig} alt=""/>Post a Job</Nav.Link>
  <Nav.Link eventKey="link-1"> <img src={fig} alt=""/>Buy Something</Nav.Link>
 
  
</Nav>
                    </div>
</Col>
                </Row>
            </Container>
        </section>
    )
}
