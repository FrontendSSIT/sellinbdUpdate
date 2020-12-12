import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {  NavBarSub } from '../NavBars/NavBars'

export const Location = () => {
    const [mymensingh,setMymensingh]=useState(false)
  const [rangpur,setRangpur]=useState(false)
  const [khulna,setKhulna]=useState(false)
  const [dhaka,setDhaka]=useState(false)
  const [barishal,setBarishal]=useState(false)
  const [rajshahi,setRajshahi]=useState(false)
  const [sylhet,setSylhet]=useState(false)
  const [chattogram,setChattogram]=useState(false)

  const [locationValue,setLocationValue]=useState('')
  const handleCategoryLoc=(e)=>{
    const data=e.target.innerText;
    setLocationValue(data)
    localStorage.setItem('Location',data)
  } 
  
    return (
        <section>
        <NavBarSub/>
        <Container>

          <Row className="justify-content-center">
            <Col lg={6}>
             <ul>
  <li onClick={()=>setMymensingh(!mymensingh)}>{mymensingh?<ArrowUpward/>:<ArrowDownward/>  } Mymensingh Division
               {mymensingh?
                <ul>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Mymensingh</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>jamalpur</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Sherpur</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Netrokona</Link></li>
                </ul>:null
}
               </li>
               <li onClick={()=>setRangpur(!rangpur)}> {rangpur?<ArrowUpward/>:<ArrowDownward/>}Rangpur  Division
               {rangpur?
                <ul>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Rangpur</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>dibajpur</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}> Kurigram</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Nilphamari</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Lalmonirhat</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}> Gaibandha</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Thakurgaon</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Panchagarh</Link></li>
                </ul>:null
}
       </li>
               <li onClick={()=>setKhulna(!khulna)}>{khulna?<ArrowUpward/>:<ArrowDownward/>}Khulna Division
               
               {khulna?
                <ul>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Khulna</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Jessore</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Khustia</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>jhenaidha</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Satkhira</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Bagerhat</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Chuadanga</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Magura</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Narail</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Meherpur</Link></li>
                </ul>:null
}
               </li>
               <li onClick={()=>setDhaka(!dhaka)}>{dhaka?<ArrowUpward/>:<ArrowDownward/>}Dhaka Division

                {dhaka?
                <ul>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Dhaka</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Naryangaj</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Gazipur</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Tangail</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Narasingdi</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Faridpur</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Kishorganj</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Manikganj</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>madaripur</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Munshiuuganj</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Rajbari</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Shariatpur</Link></li>
                </ul>:null
}
               </li>
               <li onClick={()=>setBarishal(!barishal)}>{barishal?<ArrowUpward/>:<ArrowDownward/>}Barishal Division
               {barishal?
                <ul>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Barishal</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Patuakhali</Link></li> 
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Bhola</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Jhalokati</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Pirojpur</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Burguna</Link></li>
                </ul>:null
}               
               </li>
               <li onClick={()=>setRajshahi(!rajshahi)}>{rajshahi?<ArrowUpward/>:<ArrowDownward/>}Rajshahi Division
               {rajshahi?
                <ul>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Rajshahi</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Bogura</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Pabna</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Natore</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Sirajganj</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Naogaon</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Chapainawabganj</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Joypurhat</Link></li>
                 
                </ul>:null
}  
               </li>
               <li onClick={()=>setSylhet(!sylhet)}> {sylhet?<ArrowUpward/>:<ArrowDownward/>}Sylhet Sylhet
               {sylhet?
                <ul>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Sylhet</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Maulvi Bazar</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Habiganj</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Sunamganj</Link></li>
                </ul>:null
} 
               
               </li>
               <li onClick={()=>setChattogram(!chattogram)}>{chattogram?<ArrowUpward/>:<ArrowDownward/>}Chattogram Division
               {chattogram?
                <ul>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Chattogram</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Cumilla</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Brahmanbaria</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Feni</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Noakhali</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Chandpur</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Cox's Bazar</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Lakshmipur</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>BandonFocus={handleCategoryLoc}arban</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Khangrachari</Link></li>
                  <li><Link to="/location" onFocus={handleCategoryLoc}>Rangamati</Link></li>
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
