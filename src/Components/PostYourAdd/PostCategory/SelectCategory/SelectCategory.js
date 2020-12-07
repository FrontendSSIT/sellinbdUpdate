import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavBarSub } from '../../../Home/NavBars/NavBars'
import logo from '../../../../images/logo/LogoWhite.png'
import '../../PostYourAdd.scss'

export const SellProduct = (props) => {
    return (
        <section>
       
        <Container>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p>Selected Category</p>
        <li><Link>Mobile & Tablet</Link></li>
        <li><Link> Computer v& Laptops</Link></li>
        <li><Link>Electronics</Link></li>
        <li><Link>Vehicles</Link></li>
        <li><Link>Property</Link></li>
        <li><Link>Funiture</Link></li>
        <li><Link>Fashions,Health & Beauty</Link></li>
        <li><Link>Sports & Hobbies</Link></li>
        <li><Link>Business & Industrial Products</Link></li>
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}

export const SellPets = (props) => {
    return (
        <section>
        <NavBarSub/>
        <Container>
        <div className="postLogo"><img src={logo}  alt=""/></div>
        <Row className="justify-content-center" >
        <Col lg={6}>
        <ul>
        <li><Link>Pets</Link></li>
        <li><Link>Farm Animal</Link></li>
        <li><Link>Pet & Animal Accessories</Link></li>
        <li><Link>Pet & Animal Foods</Link></li>
        <li><Link>Other Pet & Animals</Link></li>
       
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const SellAgricultural = (props) => {
    return (
        <section>
        <NavBarSub/>
        <Container>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <li><Link>Crops, Seeds & Plants</Link></li>
        <li><Link>Agricultural Tools & Machinery</Link></li>
        <li><Link>Others</Link></li>
        <li><Link>Others Agricultural Items</Link></li>  
        </ul>  
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const SellDaily = (props) => {
    return (
        <section>
        <NavBarSub/>
        <Container>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <li><Link>Grocery</Link></li>
        <li><Link>Fruits & Vegetables</Link></li>
        <li><Link>Meat & Seafood</Link></li>
        <li><Link>Baby Products </Link></li>
        <li><Link>Health & Care</Link></li>
        <li><Link>Household</Link></li>
        <li><Link>Ready Food</Link></li>
        <li><Link>Kitchen</Link></li>
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const SellMedicine = (props) => {
    return (
        <section>
        <NavBarSub/>
        <Container>
        <div className="postLogo"><img src={logo} alt=""/></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <li><Link>General</Link></li>
        <li><Link> Homeio Medicine</Link></li>
        <li><Link>Herbal Medicine</Link></li>
        
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const SellService = (props) => {
    return (
        <section>
        <NavBarSub/>
        <Container>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <li><Link>Tution</Link></li>
        <li><Link>Courses & Coaching</Link></li>
        <li><Link>Ready Food Supplies</Link></li>
        <li><Link>Visa, Travel & Ticketing Sertvice</Link></li>
        <li><Link>Business & Technical</Link></li>
        <li><Link>Events & Hospitality</Link></li>
        <li><Link>Car, Bus and Truck Rent</Link></li>
        <li><Link>Interior Design</Link></li>
        <li><Link>House Service </Link></li>
        <li><Link>Mobile Phone Servicing </Link></li>
        <li><Link>Laptops &U Desktops Servicing </Link></li>
        <li><Link>Vehicles Servicing</Link></li>
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const PostJob = (props) => {
    return (
        <section>
        <NavBarSub/>
        <Container>
        <Row>
        <Col lg={6}>
        <ul>
        <li><Link></Link></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const BuyPost = (props) => {
    return (
        <section>
        <Container>
        <Row>
        <Col lg={6}>
        <ul>
        <li><Link></Link></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}