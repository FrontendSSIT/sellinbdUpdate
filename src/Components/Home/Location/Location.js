import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {  NavBarSub } from '../NavBars/NavBars'

export const Location = () => {
    const [mymensingh,setMymensingh]=useState()
  const [rangpur,setRangpur]=useState()
  const [khulna,setKhulna]=useState()
  const [dhaka,setDhaka]=useState()
  const [barishal,setBarishal]=useState()
  const [rajshahi,setRajshahi]=useState()
  const [sylhet,setSylhet]=useState()
  const [chattogram,setChattogram]=useState()


  const handleMymensingh=()=>{
      setMymensingh(true)
      setBarishal(false)
      setChattogram(false)
      setKhulna(false)
      setDhaka(false)
      setRangpur(false)
      setRajshahi(false)
      setSylhet(false)
  }
  const handleRangpur=()=>{
    setMymensingh(false)
    setBarishal(false)
    setChattogram(false)
    setKhulna(false)
    setDhaka(false)
    setRangpur(true)
    setRajshahi(false)
    setSylhet(false)
} 
const handleKhulna=()=>{
    setMymensingh(false)
    setBarishal(false)
    setChattogram(false)
    setKhulna(true)
    setDhaka(false)
    setRangpur(false)
    setRajshahi(false)
    setSylhet(false)
}
const handleDhaka=()=>{
    setMymensingh(false)
    setBarishal(false)
    setChattogram(false)
    setKhulna(false)
    setDhaka(true)
    setRangpur(false)
    setRajshahi(false)
    setSylhet(false)
}
const handleBarishal=()=>{
    setMymensingh(false)
    setBarishal(true)
    setChattogram(false)
    setKhulna(false)
    setDhaka(false)
    setRangpur(false)
    setRajshahi(false)
    setSylhet(false)
}
const handleRajshahi=()=>{
    setMymensingh(false)
    setBarishal(false)
    setChattogram(false)
    setKhulna(false)
    setDhaka(false)
    setRangpur(false)
    setRajshahi(true)
    setSylhet(false)
}
const handleSylhet=()=>{
    setMymensingh(false)
    setBarishal(false)
    setChattogram(false)
    setKhulna(false)
    setDhaka(false)
    setRangpur(false)
    setRajshahi(false)
    setSylhet(true)
}
const handleChattogram=()=>{
    setMymensingh(false)
    setBarishal(false)
    setChattogram(true)
    setKhulna(false)
    setDhaka(false)
    setRangpur(false)
    setRajshahi(false)
    setSylhet(false)
}
    return (
        <section>
        <NavBarSub/>
        <Container>

          <Row className="justify-content-center">
            <Col lg={6}>
             <ul>
  <li onClick={handleMymensingh}>{mymensingh?<ArrowUpward/>:<ArrowDownward/>  } Mymensingh Division
               {mymensingh?
                <ul>
                  <li><Link to="/mymensingh">Mymensingh</Link></li>
                  <li><Link to="/jamalpur">jamalpur</Link></li>
                  <li><Link to="/sherpur">Sherpur</Link></li>
                  <li><Link to="/netrokona">Netrokona</Link></li>
                </ul>:null
}
               </li>
               <li onClick={handleRangpur}> {rangpur?<ArrowUpward/>:<ArrowDownward/>}Rangpur  Division
               {rangpur?
                <ul>
                  <li><Link to="/rangpur">Rangpur</Link></li>
                  <li><Link to="/dinajpur">dibajpur</Link></li>
                  <li><Link to="/kurigram"> Kurigram</Link></li>
                  <li><Link to="/nilphamari">Nilphamari</Link></li>
                  <li><Link to="/lalmonirhat">Lalmonirhat</Link></li>
                  <li><Link to="/gaibandha"> Gaibandha</Link></li>
                  <li><Link to="/thakurgaon">Thakurgaon</Link></li>
                  <li><Link to="/panchagarh">Panchagarh</Link></li>
                </ul>:null
}
       </li>
               <li onClick={handleKhulna}>{khulna?<ArrowUpward/>:<ArrowDownward/>}Khulna Division
               
               {khulna?
                <ul>
                  <li><Link to="/khulna">Khulna</Link></li>
                  <li><Link to="/jessore">Jessore</Link></li>
                  <li><Link to="/khustia">Khustia</Link></li>
                  <li><Link to="/jhenaidha">jhenaidha</Link></li>
                  <li><Link to="/satkhira">Satkhira</Link></li>
                  <li><Link to="/bagerhat">Bagerhat</Link></li>
                  <li><Link to="/chuadanga">Chuadanga</Link></li>
                  <li><Link to="/magura">Magura</Link></li>
                  <li><Link to="/narail">Narail</Link></li>
                  <li><Link to="/meherpur">Meherpur</Link></li>
                </ul>:null
}
               </li>
               <li onClick={handleDhaka}>{dhaka?<ArrowUpward/>:<ArrowDownward/>}Dhaka Division

                {dhaka?
                <ul>
                  <li><Link to="/dhaka">Dhaka</Link></li>
                  <li><Link to="/naryanganj">Naryangaj</Link></li>
                  <li><Link to="/gazipur">Gazipur</Link></li>
                  <li><Link to="/tangail">Tangail</Link></li>
                  <li><Link to="/narasingdi">Narasingdi</Link></li>
                  <li><Link to="/faridpur">Faridpur</Link></li>
                  <li><Link to="/kishorgang">Kishorganj</Link></li>
                  <li><Link to="/manikganj">Manikganj</Link></li>
                  <li><Link to="/madaripur">madaripur</Link></li>
                  <li><Link to="/munshiganj">Munshiuuganj</Link></li>
                  <li><Link to="/rajbari">Rajbari</Link></li>
                  <li><Link to="/shariatpur">Shariatpur</Link></li>
                </ul>:null
}
               </li>
               <li onClick={handleBarishal}>{barishal?<ArrowUpward/>:<ArrowDownward/>}Barishal Division
               {barishal?
                <ul>
                  <li><Link to="/barishal">Barishal</Link></li>
                  <li><Link to="/patuakhali">Patuakhali</Link></li> 
                  <li><Link to="/bhola">Bhola</Link></li>
                  <li><Link to="/jhalokati">Jhalokati</Link></li>
                  <li><Link to="/pirojpur">Pirojpur</Link></li>
                  <li><Link to="/barguna">Burguna</Link></li>
                </ul>:null
}               
               </li>
               <li onClick={handleRajshahi}>{rajshahi?<ArrowUpward/>:<ArrowDownward/>}Rajshahi Division
               {rajshahi?
                <ul>
                  <li><Link to="/rajshahi">Rajshahi</Link></li>
                  <li><Link to="/bogura">Bogura</Link></li>
                  <li><Link to="/pabna">Pabna</Link></li>
                  <li><Link to="/natore">Natore</Link></li>
                  <li><Link to="/sirajganj">Sirajganj</Link></li>
                  <li><Link to="/naogaon">Naogaon</Link></li>
                  <li><Link to="/chapainawabganj">Chapainawabganj</Link></li>
                  <li><Link to="/joypurhat">Joypurhat</Link></li>
                 
                </ul>:null
}  
               </li>
               <li onClick={handleSylhet}> {sylhet?<ArrowUpward/>:<ArrowDownward/>}Sylhet Sylhet
               {sylhet?
                <ul>
                  <li><Link to="/sylhet">Sylhet</Link></li>
                  <li><Link to="/maulvibazar">Maulvi Bazar</Link></li>
                  <li><Link to="/habiganj">Habiganj</Link></li>
                  <li><Link to="/sunamganj">Sunamganj</Link></li>
                </ul>:null
} 
               
               </li>
               <li onClick={handleChattogram}>{chattogram?<ArrowUpward/>:<ArrowDownward/>}Chattogram Division
               {chattogram?
                <ul>
                  <li><Link to="/chattogram">Chattogram</Link></li>
                  <li><Link to="/cumilla">Cumilla</Link></li>
                  <li><Link to="/brahmanbaria">Brahmanbaria</Link></li>
                  <li><Link to="/feni">Feni</Link></li>
                  <li><Link to="/noakhali">Noakhali</Link></li>
                  <li><Link to="/chandpur">Chandpur</Link></li>
                  <li><Link to="/coxbazar">Cox's Bazar</Link></li>
                  <li><Link to="/lakshmipur">Lakshmipur</Link></li>
                  <li><Link to="/bandarban">Bandarban</Link></li>
                  <li><Link to="/autooilsfuilds">Khangrachari</Link></li>
                  <li><Link to="/rangamati">Rangamati</Link></li>
                </ul>:null
}  
               
               </li>
               
               </ul>
              </Col>
            </Row>
          </Container>
        </section>
    )
}
