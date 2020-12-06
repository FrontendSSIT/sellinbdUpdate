import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {SearchOutlined} from '@material-ui/icons';
import './NavBars.scss'

export const NavBars = ({handleSearchBox,clickSearch,handleSearchClick}) => {
  
  const[clickNav,setClickNav]=useState(false)
  const[search,setSearch]=useState(false)
  console.log(clickSearch)

  

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
  <Form inline className="nav-search " >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onClick={handleSearch} onChange={handleSearchBox} />
      <SearchOutlined onClick={handleSearchClick}/>
      
      <div className="search-btn">
              <div >
                </div>
              {
                  search? <> <Link to="/LocNav" onClick={handleLoc}>Location</Link>
                  <Link to="/catNav" onClick={handleNav}>Category</Link> <br/> <br/></>:null
              }
    
              </div>
    </Form>
    <Nav className="ml-auto">
      <Nav.Link >
        <Link to="/">Home</Link>
      </Nav.Link>

      <Nav.Link >
        <Link to="/contact">Contact Us</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/login">Login</Link>
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
