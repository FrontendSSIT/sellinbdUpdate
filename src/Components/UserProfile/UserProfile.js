import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import profile from '../../images/userProfile.png'
export const UserProfile = () => {
    return (
       <section className="userSection">
       <Container>
       <Row>
       <Col lg={8}>
      <div className="userProfile">
      <Row>
      <Col lg={4}>
      <div><img src={profile} alt=""/></div>
      </Col>
      <Col lg={8}>Hi</Col>
      </Row>
      </div>
       </Col>
       </Row>
       </Container>
       </section>
    )
}
