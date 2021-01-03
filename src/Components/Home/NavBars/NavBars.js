import React, { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Avatar, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {SearchOutlined} from '@material-ui/icons';
import './NavBars.scss'

export const NavBars = ({handleSearchBox,clickSearch,handleSearchClick,setSearchValue}) => {
  const[search,setSearch]=useState(false)
const number=localStorage.getItem('userNumber')
  const handleSearch=()=>{
      setSearch(true)
      
  }
  const handleLoc=()=>{
      setSearch(false)
  }
  const handleNav=()=>{
      setSearch(false)

  }
  
    return (
 <section>
        <Container>
          <Navbar  expand="lg" className="nav-Bar">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Form inline className="nav-search ">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onClick={handleSearch} onChange={handleSearchBox} value={clickSearch} />
      <SearchOutlined  onClick={handleSearchClick}/>
      </Form>
      <div className="search-btn">
      {
       
        search? <> <Link to="/LocNav" onClick={handleLoc}>Location</Link>
        <Link to="/catNav" onClick={handleNav}>Category</Link> <br/> <br/></>:null
       
    }
    
    </div>
            
    <Nav className="ml-auto color-text">
      <Nav.Link >
        <Link to="/home" onClick={()=>setSearchValue([])}>Home</Link>
      </Nav.Link>

      <Nav.Link >
        <Link to="/contact">Contact Us</Link>
      </Nav.Link>
      
      <Nav.Link >
        <Link to="/postAdd">Add Post </Link>
        </Nav.Link>
        <Nav.Link >
        <Link to="/chat">Chat</Link>
      </Nav.Link>
     {
       number&&number!=="undefined"? <Nav.Link >
       <Link to="/user"> Account</Link>
       </Nav.Link>:<Nav.Link>
       <Link to="/login">Login</Link>
     </Nav.Link>
     }
    
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
     </Container>
 </section>
    )
}



export const NavBarSub = () => {
  return (
    <section>
    <Container>
      <Navbar  expand="lg" className="nav-Bar" style={{marginTop:'0'}}>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
       
<Nav className="ml-auto">
  <Nav.Link >
    <Link to="/home">Home</Link>
  </Nav.Link>

  <Nav.Link >
    <Link to="/contact">Contact Us</Link>
  </Nav.Link>
  <Nav.Link >

    <Link to="/postAdd">Add Post </Link>
    </Nav.Link>

    <Nav.Link >
    <Link to="/chat">Chat</Link>
  </Nav.Link>
</Nav>

</Navbar.Collapse>
</Navbar>
 </Container>
</section>
  )
}


/*
  <Nav.Link >
    <Link to="/chat">Chat</Link>
  </Nav.Link>
*/