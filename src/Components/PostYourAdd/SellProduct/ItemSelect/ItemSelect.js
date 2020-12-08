import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavBarSub } from '../../../Home/NavBars/NavBars'
import logo from '../../../../images/logo/LogoWhite.png'
import selectIcon from '../../../../images/selectIcon.png'
import arrow from '../../../../images/arrowRight.png'
import '../../PostYourAdd.scss'


export const MobileTabletsPost = () => {
    return (
        <section>
     
        <Container>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Mobile Phone</Link></li>
        <li><Link to="/posForm"><img img src={arrow} alt=""/>Tablets </Link></li>
        <li><Link to="/posForm"><img img src={arrow} alt=""/>Mobile & Tablets Accessories </Link></li>     
        </ul> 
        </Col>
        </Row>
        </Container>
        </section>
    )
}

export const ComputerLaptopsPost = () => {
    return (
        <section>
     
        <Container>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Laptops</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Desktops</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Laptops & Desktop Accessories </Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>PhotoCopiers &^ Printers</Link></li>
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}

export const ElectronicsPost = () => {
    return (
        <section>

        <Container>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>AC</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Refrigerators</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Televisions</Link></li>
        <li><Link  to="/posForm"> <img img src={arrow} alt=""/>Kitchen Electronics</Link></li>  
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Fan & Heaters</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Cameras</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Cameras Accessories</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Toys</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Toys Accessories </Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Water Purifier & Accessories </Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Other Electronics </Link></li>
       
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const VehiclesPost = () => {
    return (
        <section>
       
        <Container>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Apartments & Flat</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Houses</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Plots &n Land </Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>To-Let</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Commercial Property</Link></li>
     
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}

export const PropertyPost = () => {
    return (
        <section>
    
        <Container>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Apartments & Flat</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Houses</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Plots &n Land </Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>To-Let</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Commercial Property</Link></li>
     
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}

export const FurniturePost = () => {
    return (
        <section>
      
        <Container>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Living Room Furniture</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Kitchen & Dining Room Furniture</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Office & Shop Furniture</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Children's Furniture</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Others Furniture</Link></li>
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const FashionsPost = () => {
    return (
        <section>
      
        <Container>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Men's Clothing & Accessories</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Women's Clothing & accessories</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Kid's Clothing & Accessories</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Jewelry</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>optical</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Watches</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Bags</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Wholesale</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Cosmetics & Beauty </Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Other Fashions & Beauty</Link></li>
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}

export const SportsHobbiesPost = () => {
    return (
        <section>
    
        <Container>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Musical instrument</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Sports</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Fitness & Gym</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Music,Book & Movies</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Other Sports & Hobbies </Link></li>
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const BusinessIndustrialPost = () => {
    return (
        <section>
   
        <Container>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Stationary & Office Supplies</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Safety & Security</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Industry Machinery & Tools</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Industry Machinery & Tools</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Industrial Supplies & Raw Materials</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Licenses,Titles & Tenders</Link></li>
        <li><Link   to="/posForm"><img img src={arrow} alt=""/>Bricks, Iron Rod, Cement & Balu</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Sanitary, Electronics & & Gas Item</Link></li>
        <li><Link  to="/posForm"><img img src={arrow} alt=""/>Others Business & Industrial Product </Link></li>
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}