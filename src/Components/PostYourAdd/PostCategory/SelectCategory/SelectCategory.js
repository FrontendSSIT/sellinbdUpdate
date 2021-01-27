import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavBarSub } from '../../../Home/NavBars/NavBars'
import logo from '../../../../images/logo/LogoWhite.png'
import selectIcon from '../../../../images/selectIcon.png'
import arrow from '../../../../images/arrowRight.png'
import '../../PostYourAdd.scss'




export const SellProduct = (props) => {
   
    return (
        <section className="sellProduct">
       
        <Container fluid>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Selected Category</p>
        <li><Link  to="/mobilePost"><img  src={arrow} alt=""/>Mobile & Tablet</Link></li>
        <li><Link to="/computerLaptopsPost"><img  src={arrow} alt="" /> Computer v& Laptops</Link></li>
        <li><Link to="/electronicsPost"><img  src={arrow} alt="" />Electronics</Link></li>
        <li><Link to="/vehiclesPost"><img  src={arrow} alt="" />Vehicles</Link></li>
        <li><Link to="/propertyPost"><img  src={arrow} alt="" />Property</Link></li>
        <li><Link to="/furniturePost"><img  src={arrow} alt=""/>Funiture</Link></li>
        <li><Link to="/fashionsPost"><img  src={arrow} alt=""/>Fashions,Health & Beauty</Link></li>
        <li><Link to="/sportsHobbiesPost"><img  src={arrow} alt="" />Sports & Hobbies</Link></li>
        <li><Link to="/businessIndustrialPost"><img  src={arrow} alt=""/>Business & Industrial Products</Link></li>
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}

export const SellPets = (props) => {
    const [postNav,setPostNav]=useState()
  console.log(postNav)
    const handlepostNav=(e)=>{
        const data =e.target.innerText;
         setPostNav(data)
         localStorage.setItem('postcat',data)
    }
    return (
        <section>
       
        <Container fluid>
        <NavBarSub/>
        <div className="postLogo"><img src={logo}  alt=""/></div>
        <Row className="justify-content-center" >
        <Col lg={6}>
        <ul>
        <p> <img  to="/posForm"img src={selectIcon} alt="" />Selecte Item</p>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt="" onFocus={handlepostNav}/>Pets</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt="" />Farm Animal</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt="" />Pet & Animal Accessories</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""  />Pet & Animal Foods</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""  />Other Pet & Animals</Link></li>
       
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const SellAgricultural = (props) => {
    const [postNav,setPostNav]=useState()
  console.log(postNav)
    const handlepostNav=(e)=>{
        const data =e.target.innerText;
         setPostNav(data)
         localStorage.setItem('postcat',data)
    }
    return (
        <section>

        <Container fluid>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}  xs={12}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Crops, Seeds & Plants</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Agricultural Tools & Machinery</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Others</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Others Agricultural Items</Link></li>  
        </ul>  
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const SellDaily = (props) => {
    const [postNav,setPostNav]=useState()
  console.log(postNav)
    const handlepostNav=(e)=>{
        const data =e.target.innerText;
         setPostNav(data)
         localStorage.setItem('postcat',data)
    }
    return (
        <section>

        <Container fluid>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link  to="/posForm" onFocus={handlepostNav}> <img  src={arrow} alt=""/>Grocery</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Fruits & Vegetables</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Meat & Seafood</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Baby Products </Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Health & Care</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Household</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Ready Food</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Kitchen</Link></li>
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const SellMedicine = (props) => {
    const [postNav,setPostNav]=useState()
  console.log(postNav)
    const handlepostNav=(e)=>{
        const data =e.target.innerText;
         setPostNav(data)
         localStorage.setItem('postcat',data)
    }
    return (
        <section>
  \
        <Container fluid>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt=""/></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img src={arrow} alt=""/>General</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}> <img  src={arrow} alt=""/>Homeio Medicine</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Herbal Medicine</Link></li>
        
        </ul>
        
        </Col>
        </Row>
        </Container>
        </section>
    )
}
export const SellService = (props) => {
    const [postNav,setPostNav]=useState()
  console.log(postNav)
    const handlepostNav=(e)=>{
        const data =e.target.innerText;
         setPostNav(data)
         localStorage.setItem('postcat',data)
    }
    return (
        <section>
      
        <Container fluid>
        <NavBarSub/>
        <div className="postLogo"><img src={logo} alt="" /></div>
        <Row className="justify-content-center">
        <Col lg={6}>
        <ul>
        <p> <img img src={selectIcon} alt=""/>Select Item</p>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Tution</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Courses & Coaching</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Ready Food Supplies</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Visa, Travel & Ticketing Sertvice</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Business & Technical</Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Events & Hospitality</Link></li>
        <li><Link to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Car, Bus and Truck Rent</Link></li>
        <li><Link to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Interior Design</Link></li>
        <li><Link to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>House Service </Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Mobile Phone Servicing </Link></li>
        <li><Link to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Laptops &U Desktops Servicing </Link></li>
        <li><Link  to="/posForm" onFocus={handlepostNav}><img  src={arrow} alt=""/>Vehicles Servicing</Link></li>
        </ul>
        </Col>
        </Row>
        </Container>
        </section>
    )
}
