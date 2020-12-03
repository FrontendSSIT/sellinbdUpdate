import { Container} from '@material-ui/core'
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Player} from 'video-react';
import './Header.scss';
import sellinbdVideo from '../../../video/sellinbd-ad.mp4'
import logo from '../../../images/logo/sellinbdlogo.png';
import carsole1 from '../../../images/Shaal.jpg';
import carsole2 from '../../../images/Bicycle.jpg';
import carsole3 from '../../../images/bikeRed.png';
import Carousel from 'react-bootstrap/Carousel'

export const Header = () => {
    return (
        <section className="header">
          <Container  fluid="md">
              <Row>
              <Col lg={4} className="logo video-container-bg">
                    <img src={logo} alt=""/>
                    <div className="video-bg align-items-stretch">
                  <Player
                width="500px"
                autoPlay
              loop={true}
              mu
             poster="../../../images/logo/sellinbdlogohome.png"
             src={sellinbdVideo}
             muted
                 >
                </Player> 
                  </div>
                    </Col>
                  <Col lg={8}>
                  <Carousel className="CarouselSlider">
                <Carousel.Item>
                <Row>
                    <div className="col-md-12 m-auto">
                    <img
                  className="d-block w-100"
             src={carsole1}
             alt="First slide"
                    />
                    </div>
                    </Row>
            </Carousel.Item>
         <Carousel.Item>
              <Row>
                  <div className="col-md-12 m-auto">
                  <img
               className="d-block w-100"
                src={carsole2}
                alt="Third slide"
                 />
                  </div>
                  </Row>
                 </Carousel.Item>
                <Carousel.Item>
                   <Row>
                       <div className="col-md-12 m-auto">
                       <img
                 className="d-block w-100"
             src={carsole3}
             alt="Third slide"
                />
                       </div>
                       </Row>
        </Carousel.Item>
        </Carousel>
                  </Col>
                
              </Row>
          </Container>
        </section>
    )
}
