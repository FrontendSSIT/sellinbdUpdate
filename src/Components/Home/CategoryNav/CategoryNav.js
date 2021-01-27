import { ArrowDownward, ArrowUpward} from '@material-ui/icons';
import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import { NavBarSub } from '../NavBars/NavBars';
import './CategoryNav.scss'


export const CategoryNav = () => {
  const [fashons,setFashons]=useState(false)
  const [Pets,setPets]=useState(false)
  const [agricultural,setAgricultural]=useState(false)
  const [electronics,setElectronics]=useState(false)
  const [service,setService]=useState(false)
  const [furniture,setFurniture]=useState(false)
  const [computer,setComputer]=useState(false)
  const [vehicles,setVehicles]=useState(false)
  const [medicine,setMedicine]=useState(false)
  const [sports,setSports]=useState(false)
  const [mobile,setMobile]=useState(false)
  const [SearchJob,setSearchJob]=useState(false)
  const [SearchFor,setSearchFor]=useState(false)
  const [business,setBusiness]=useState(false)
  const [daily,setDaily]=useState(false)
  const [property,setProperty]=useState(false)
   const [navValue,setNavValue]=useState('')
  const handleCategoryNav=(e)=>{
    const data=e.target.innerText;
    setNavValue(data)
    localStorage.setItem('items',data)
  }

 
    return (
        <section>
          <NavBarSub/>
          <Container>

            <Row className="justify-content-center">
              <Col lg={3}>
               <ul>
    <li onClick={()=>setFashons(!fashons) }>{fashons?<ArrowUpward/>:<ArrowDownward/>  }Fashons, Health and Beauty
                 {fashons?
                  <ul>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Mens Clothing and Accessories</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Womens Clothing and Accessories</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Jewelry</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Optical</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>watches</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Bags</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Wholesale</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Cosmetics and Beauty</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Others Fashions and Beauty</Link></li>
                  </ul>:null
}
                 </li>
                 <li onClick={()=>setPets(!Pets)}> {Pets?<ArrowUpward/>:<ArrowDownward/>}Pets and Animal
                 {Pets?
                  <ul>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Pets</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Farm Animals</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}> Pet and Animals Accessories</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Pet and Animal Foods</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>other Pet and Animals</Link></li>
                  </ul>:null
}
         </li>
                 <li onClick={()=>setAgricultural(!agricultural)}>{agricultural?<ArrowUpward/>:<ArrowDownward/>}Agricultural
                 
                 {agricultural?
                  <ul>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Crops, Seeds and Plants</Link></li>
                    <li><Link to="/category">Agricultural Tools and Machinery</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Others Agricultural Items</Link></li>
                  </ul>:null
}
                 </li>
                 <li onClick={()=>setElectronics(!electronics)}>{electronics?<ArrowUpward/>:<ArrowDownward/>}Electronics

                  {electronics?
                  <ul>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Ac</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Refeigerators</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Televisions</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Audio Sound Systems</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Kitchen Electronics</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Fan and Heaters</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Cameras</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Cameras Accessories</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Toys</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Toys Accessories</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Water purifier Accessories</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>other Electronics</Link></li>
                  </ul>:null
}
                 </li>
                 <li onClick={()=>setService(!service)}>{service?<ArrowUpward/>:<ArrowDownward/>}Service
                 {service?
                  <ul>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Tuition</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Courses and Coaching Center</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Ready Food Supplies</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Visa, Travel and Ticketing Service</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Business and Technical Service</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Events and Hospitality</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Car,Bus and Truck Rent</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Inerior Design</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Household Service</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Mobile Phone Servicing</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Laptops and Desktops Servicing</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Vechicles Servicing</Link></li>
                  </ul>:null
}               
                 </li>
                 <li onClick={()=>setFurniture(!furniture)}>{furniture?<ArrowUpward/>:<ArrowDownward/>}Furniture
                 {furniture?
                  <ul>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Living Room Furniture</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Kitchen and Dining Room Furniture</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Office and Shop furniture</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Childrens Furniture</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Other Furniture</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setComputer(!computer)}>{computer?<ArrowUpward/>:<ArrowDownward/>}Computer and Laptops
                 {computer?
                  <ul>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Laptop</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Desktops</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Laptops and Desktop</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Laptops and Desktop Accessories</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Photocopiers and Printers</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Networking Accessories</Link></li>
                  </ul>:null
} 
                 
                 </li>
                 <li onClick={()=>setVehicles(!vehicles)}>{vehicles?<ArrowUpward/>:<ArrowDownward/>}Vehicles
                 {vehicles?
                  <ul>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Cars and Jeeps</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Motorbikes and Scooters</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Three Wheelers</Link></li>
                    <li><Link to="/category" onFocus={handleCategoryNav}>Bicycles</Link></li>
                    <li><Link to="/category"   onFocus={handleCategoryNav}>Bus, Truck and Pikup</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Tractors and Heavy Duty</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Auto Part and Accessories </Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Water Transports</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Car and Jeep Accessories</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Auto Oils and Flids</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>MotorBikes and scooters Accessories</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>other vehicles</Link></li>
                  </ul>:null
}  
                 
                 </li>
                 <li onClick={()=>setMedicine(!medicine)}>{medicine?<ArrowUpward/>:<ArrowDownward/>}Medicine
                 {medicine?
                  <ul>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>General Medicnie</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Homeio</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Herbal Medicine</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setSports(!sports)}>{sports?<ArrowUpward/>:<ArrowDownward/>}Sports and Hobbies
                 {sports?
                  <ul>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Musical Instruments</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Spots</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Fitness and Gym</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Music,Book and Movies </Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Othes Sports and Hobbies</Link></li>  
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setMobile(!mobile)}>{mobile?<ArrowUpward/>:<ArrowDownward/>}Mobile and Tablets
                 {mobile?
                  <ul>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Mobile Phone</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Tablets</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Mobile and Tablets Accessories</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setSearchJob(!SearchJob)}>{SearchJob?<ArrowUpward/>:<ArrowDownward/>}Search Job Post
                 {SearchJob?
                  <ul>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Job Post</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setSearchFor(!SearchFor)}>{SearchFor?<ArrowUpward/>:<ArrowDownward/>}Search for Buy something 
                 {SearchFor?
                  <ul>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Buy Something</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setBusiness(!business)}>{business?<ArrowUpward/>:<ArrowDownward/>}Business and industial Products
                 
                 {business?
                  <ul>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Stationary and office Supplies</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>safety and Security</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Industry Machinery and tools</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Industrial Supplies and Raw Materials</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Licenses Titles and Tenders</Link></li>
                    
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Bricks,Iron Rod, and balu</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}> Sanitary, Electtrical gas Item</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Others Business and IndustrialProduct</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setDaily(!daily)}>{daily?<ArrowUpward/>:<ArrowDownward/>}Daily Needs
                 
                 {daily?
                  <ul>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Grocery</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Frutis and Vegetable</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Meat and Seafood</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Baby Products</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Health and Care</Link></li>
                    
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Household</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}> Ready Food</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Kitchen Accessories</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setProperty(!property)}>{property?<ArrowUpward/>:<ArrowDownward/>}Property
                 
                 {property?
                  <ul>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Apartment and Flats</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Houses</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Plots and Land</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>ToLet</Link></li>
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Commercial Property</Link></li>
                    
                    <li><Link to="/category"  onFocus={handleCategoryNav}>Other Property</Link></li>
                    
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
