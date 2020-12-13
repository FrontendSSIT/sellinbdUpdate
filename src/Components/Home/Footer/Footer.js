import React, { useState } from 'react'
import { Facebook, PlayArrow } from '@material-ui/icons';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.scss'

export const Footer = () => {
 const [contact,setContact]=useState(false)
    
    return (
        <section className="footer-section text-center">
            <Container >
            <button onClick={()=> setContact(!contact)} className={contact?"contact-btn":null}>Contact</button>
               { contact?
                <Row>
                <Col lg={8} xs={12}>
                    <Row>
                        <Col lg={3}>
                            <ul>
                                <li>How to sell fast</li>
                                <li>Membership</li>
                                <li> Promote your ad</li>
                                <li>Banner Advertising</li>
                            </ul>
                        </Col>
                        <Col lg={3}>
                       <ul>
                       <li>FAQ</li>
                        <li><Link to="/contact"> Contact us </Link></li>
                        <li>sellinbd.com</li>
                       </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                        <li> <PlayArrow/> <a href="https://play.google.com/store/apps/details?id=com.xb.shameem.sellinbd&hl=en&gl=US" download="https://play.google.com/store/apps/details?id=com.xb.shameem.sellinbd&hl=en&gl=US" target="_blank" rel="noopener noreferrer">Apps</a></li>
                        <li> <Facebook/>  <a href="https://www.facebook.com/sellinbdofficial/ " target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                        <li>About Us</li>
                        <li>Terms and Condition</li>
                        <li>Privacy Policy</li>
                        <li>Sitemap</li>
                        </ul>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4}>
                    <Row>
                        <Col lg={6}>
                            
                        </Col>
                        <Col lg={6}>

                        </Col>
                    </Row>
                </Col>
            </Row>:null
               }
            </Container>
        </section>
    )
}
