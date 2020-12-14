import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import profile from '../../images/userProfile.png'
import { NavBarSub } from '../Home/NavBars/NavBars'
import './UserProfile.scss'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShareIcon from '@material-ui/icons/Share';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
export const UserProfile = () => {
    const [userData,setUserData] =useState([])
    console.log(userData)
    const usernumber =localStorage.getItem('userNumber')
    useEffect(()=>{
        const formData = new FormData()
        formData.append('usernumber',usernumber)
       
  fetch('https://sellinbd.com/api330088/user/readProfile.php',{
    method: 'POST',
    body: formData
  })
  .then(res=>res.json())
  .then(result=>{
          if(result[0]){
            setUserData(result[0])
          }
  })

    },[])
    return (
       <section className="userSection">
       <Container fuild>
       <NavBarSub/>
       <Row className="justify-content-center">
       <Col lg={8} xs={12}>
       <div className="profileBoder">
      <div className="userProfile">
      <Row>
      <Col lg={5} xs={4}>
      <div className="profilePicture"><img src={profile} alt=""/></div>
      </Col>
      <Col lg={7} xs={8}>
       <h2>  User Name </h2>
       <h2>  User Number</h2>
      </Col>
      </Row>
      </div>
      </div>
      <div className="text-center" ><input type="submit" value="Upload Your Profile Image"/></div>
       </Col>
       </Row>
       <Row className="justify-content-center">
       <Col lg={8}>
       <div className="fqaProfile">
       <h4><HelpOutlineIcon/>FAQ</h4>
       <h4> <ShoppingCartIcon/> How to sell fast</h4>
       <h4><StarBorderIcon/>  Rate us</h4>
       <h4><ShareIcon/> Share</h4>
       <h4><ReportProblemIcon/> Report problem/Contact with developer</h4>
       <h4><PowerSettingsNewIcon/> Log Out</h4>
       </div>
       </Col>
       <Col lg={8} >
       <div className="fqaProfile">
       <h2>MY Ads</h2>
       </div>
       </Col>
       <Col lg={8} xs={12}>
       <div className="fqaProfile">
        <Row className="justify-content-center">
        <Col lg={4} xs={4}> <div><img src="" alt=''/></div> </Col>
        <Col lg={8} xs={8}> 
        <div>      
        <h3>Ready flat for sell</h3> 
        <h3>BDT. 1000000</h3>
        <h3>Mirpur, Dhaka</h3>
         </div>  
        </Col>
        </Row>
        <div  className="text-center">  <input type="submit" value="Click for Edit, Delete & Promote"/></div>
       </div>
       </Col>
       </Row>
       </Container>
       </section>
    )
}
