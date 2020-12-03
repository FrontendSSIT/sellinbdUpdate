import { Avatar } from '@material-ui/core'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBars } from '../../../Home/NavBars/NavBars'
import './AllChat.scss';
import cm from '../../../../images/Boy.jpg';
import cm1 from '../../../../images/Girl.jfif';


export const AllChat = () => {
    return (
        <section>
            <NavBars/>
            <Container className="chat-container">
                <Row>
                    <Col lg={4}>
                        <h2>All Chat</h2>
                        <div className="chatList">
                        <Row>
                            <Col lg={2}><Avatar src={cm}/> </Col>
                            <Col lg={10} ><h3>Name</h3></Col>
                            <Col lg={2}><Avatar src={cm1}/> </Col>
                            <Col lg={10}><h3>Name</h3></Col>
                            <Col lg={2}><Avatar src={cm1}/> </Col>
                            <Col lg={10}><h3>Name</h3></Col>
                            <Col lg={2}><Avatar src={cm}/> </Col>
                            <Col lg={10}><h3>Name</h3></Col>
                            <Col lg={2}><Avatar src={cm1}/></Col>
                            <Col lg={10}><h3>Name</h3></Col>
                            <Col lg={2}><Avatar src={cm}/></Col>
                            <Col lg={10}><h3>Name</h3></Col>
                            <Col lg={2}><Avatar src={cm1}/> </Col>
                            <Col lg={10}><h3>Name</h3></Col>
                            <Col lg={2}><Avatar src={cm}/> </Col>
                            <Col lg={10}><h3>Name</h3></Col>
                            <Col lg={2}><Avatar src={cm1}/> </Col>
                            <Col lg={10}><h3>Name</h3></Col>
                            <Col lg={2}><Avatar src={cm}/> </Col>
                            <Col lg={10}><h3>Name</h3></Col>
                            <Col lg={2}><Avatar src={cm1}/></Col>
                            <Col lg={10}><h3>Name</h3></Col>
                            <Col lg={2}><Avatar src={cm}/></Col>
                            <Col lg={10}><h3>Name</h3></Col>
                        </Row>
                        </div>

                    </Col>
                    <Col lg={8} xs={12}>
                    <Row>
                        <Col lg={1}><Avatar src={cm}/></Col>
                        <Col lg={7}>
                        <h2> People Name</h2>
                        </Col>
                    </Row>
                        <div className="chatView">
                        
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
