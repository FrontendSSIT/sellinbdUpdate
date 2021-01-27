import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {Container,Navbar,Nav,FormControl,Form  } from 'react-bootstrap';
import {SearchOutlined} from '@material-ui/icons';
import './NavBars.scss'


export const NavBars=({handleSearchBox,clickSearch,handleSearchClick,setSearchValue})=>{
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
       
      search? <div> <Link to="/LocNav" onClick={handleLoc}>Location</Link>
      <Link to="/catNav" onClick={handleNav}>Category</Link> <br/> <br/></div>:null
     
  }
    </div>          
    <Nav className="ml-auto color-text">
      <Nav.Link   href='/' onClick={()=>setSearchValue([])}>
      Home
      </Nav.Link>

      <Nav.Link href='/contact'>
       Contact Us
      </Nav.Link>
      
     {
      number&&number!=="undefined"?<Nav.Link  href='/postAdd'>
      Add Post 
       </Nav.Link>:<Nav.Link  href='/login'>
       Add Post 
        </Nav.Link>
     }
      {
        number&&number!=="undefined"?<Nav.Link  href='/chat'>
        Chat
         </Nav.Link>:<Nav.Link  href='/login'>
         chat
          </Nav.Link>
       }
     {
       number&&number!=="undefined"? <Nav.Link href='/user'>
       Account
       </Nav.Link>:<Nav.Link href='/login'>
      Login
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
  const number=localStorage.getItem('userNumber')
  return (
    <section>
    <Container>
      <Navbar  expand="lg" className="nav-Bar" style={{marginTop:'0'}}>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
       
<Nav className="ml-auto">
  <Nav.Link href='/home'>
    Home
  </Nav.Link>

  <Nav.Link href='/contact'>
   Contact Us
  </Nav.Link>
  {
    number&&number!=="undefined"?<Nav.Link  href='/postAdd'>
    Add Post 
     </Nav.Link>:<Nav.Link  href='/login'>
     Add Post 
      </Nav.Link>
   }
    {
      number&&number!=="undefined"?<Nav.Link  href='/chat'>
     Chat
       </Nav.Link>:<Nav.Link  href='/login'>
      Chat
        </Nav.Link>
     }
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