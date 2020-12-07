import { ArrowDownward, ArrowUpward} from '@material-ui/icons';
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

  

  // const handleFashons=()=>{
  //   setFashons(true)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handlePets=()=>{
  //   setPets(true)
  //   setFashons(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleAgricultural=()=>{
  //   setAgricultural(true)
  //   setFashons(false)
  //   setPets(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleElectronics=()=>{
  //   setElectronics(true)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleService=()=>{
  //   setService(true)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleFurniture=()=>{
  //   setFurniture(true)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleComputer=()=>{
  //   setComputer(true)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleVehicles=()=>{
  //   setVehicles(true)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleMedicine=()=>{
  //   setMedicine(true)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleSports=()=>{
  //   setSports(true)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleMobile=()=>{
  //   setMobile(true)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleSearchJob=()=>{
  //   setSearchJob(true)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchFor(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleSearchFor=()=>{
  //   setSearchFor(true)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setBusiness(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleBusiness=()=>{
  //   setBusiness(true)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setDaily(false)
  //   setProperty(false)
  // }
  // const handleDaily=()=>{
  //   setDaily(true)
  //   setBusiness(false)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  //   setProperty(false)
  // }
  // const handleProperty=()=>{
  //   setProperty(true)
  //   setDaily(false)
  //   setBusiness(false)
  //   setFashons(false)
  //   setPets(false)
  //   setAgricultural(false)
  //   setElectronics(false)
  //   setService(false)
  //   setFurniture(false)
  //   setComputer(false)
  //   setVehicles(false)
  //   setMedicine(false)
  //   setSports(false)
  //   setMobile(false)
  //   setSearchJob(false)
  //   setSearchFor(false)
  // }
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
                    <li><Link to="/mens">Mens Clothing and Accessories</Link></li>
                    <li><Link to="/womens">Womens Clothing and Accessories</Link></li>
                    <li><Link to="/jewelry">Jewelry</Link></li>
                    <li><Link to="/optical">Optical</Link></li>
                    <li><Link to="/watches">watches</Link></li>
                    <li><Link to="/bags">Bags</Link></li>
                    <li><Link to="/wholesale">Wholesale</Link></li>
                    <li><Link to="/cosmetics">Cosmetics and Beauty</Link></li>
                    <li><Link to="/other">Other Fashions and Beauty</Link></li>
                  </ul>:null
}
                 </li>
                 <li onClick={()=>setPets(!Pets)}> {Pets?<ArrowUpward/>:<ArrowDownward/>}Pets and Animal
                 {Pets?
                  <ul>
                    <li><Link to="/pets">Pets</Link></li>
                    <li><Link to="/farmanimal">Farm Animals</Link></li>
                    <li><Link to="/petsandanimalaccessories"> Pet and Animals Accessories</Link></li>
                    <li><Link to="/petanimalfood">Pet and Animal Foods</Link></li>
                    <li><Link to="/otherpetAnimal">other Pet and Animals</Link></li>
                  </ul>:null
}
         </li>
                 <li onClick={()=>setAgricultural(!agricultural)}>{agricultural?<ArrowUpward/>:<ArrowDownward/>}Agricultural
                 
                 {agricultural?
                  <ul>
                    <li><Link to="/crops">Crops,seeds ans plants</Link></li>
                    <li><Link to="/agriculturalTools">Agricultural Tools and Machinery</Link></li>
                    <li><Link to="/othersAgricultural">Others Agricultural Items</Link></li>
                  </ul>:null
}
                 </li>
                 <li onClick={()=>setElectronics(!electronics)}>{electronics?<ArrowUpward/>:<ArrowDownward/>}Electronics

                  {electronics?
                  <ul>
                    <li><Link to="/ac">Ac</Link></li>
                    <li><Link to="/refeigerators">Refeigerators</Link></li>
                    <li><Link to="/televisions">Televisions</Link></li>
                    <li><Link to="/audio">Audio Sound Systems</Link></li>
                    <li><Link to="/kitchen">Kitchen Electronics</Link></li>
                    <li><Link to="/fan">Fan and Heaters</Link></li>
                    <li><Link to="/cameras">Cameras</Link></li>
                    <li><Link to="/camerasAccessories">Cameras Accessories</Link></li>
                    <li><Link to="/toys">Toys</Link></li>
                    <li><Link to="/toysAccessories">Toys Accessories</Link></li>
                    <li><Link to="/water">Water purifier Accessories</Link></li>
                    <li><Link to="/otherElectronics">other Electronics</Link></li>
                  </ul>:null
}
                 </li>
                 <li onClick={()=>setService(!service)}>{service?<ArrowUpward/>:<ArrowDownward/>}Service
                 {service?
                  <ul>
                    <li><Link to="/tution">Tuition</Link></li>
                    <li><Link to="/coursechoacing">Courses and Coaching Center</Link></li>
                    <li><Link to="/readyfoodsupllie">Ready Food Supplies</Link></li>
                    <li><Link to="/visatravel">Visa, Travel and Ticketing Service</Link></li>
                    <li><Link to="/businesstechnical">Business and Technical Service</Link></li>
                    <li><Link to="/eventshospitality">Events and Hospitality</Link></li>
                    <li><Link to="/carbusrent">Car,Bus and Truck Rent</Link></li>
                    <li><Link to="/interiordesign">Inerior Design</Link></li>
                    <li><Link to="/householdservice">Household Service</Link></li>
                    <li><Link to="/mobilephoneservicing">Mobile Phone Servicing</Link></li>
                    <li><Link to="/laptopdesktopservicing">Laptops and Desktops Servicing</Link></li>
                    <li><Link to="/vehiclesservicing">Vechicles Servicing</Link></li>
                  </ul>:null
}               
                 </li>
                 <li onClick={()=>setFurniture(!furniture)}>{furniture?<ArrowUpward/>:<ArrowDownward/>}Furniture
                 {furniture?
                  <ul>
                    <li><Link to="/living">Living Room Furniture</Link></li>
                    <li><Link to="/kitchenRoom">Kitchen and Dining Room Furniture</Link></li>
                    <li><Link to="/officeShop">Office and Shop furniture</Link></li>
                    <li><Link to="/childrensFurniture">Childrens Furniture</Link></li>
                    <li><Link to="/othersFurniture">Other Furniture</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setComputer(!computer)}>{computer?<ArrowUpward/>:<ArrowDownward/>}Computer and Laptops
                 {computer?
                  <ul>
                    <li><Link to="/laptop">Laptop</Link></li>
                    <li><Link to="/desktop">Desktops</Link></li>
                    <li><Link to="/l&d">Laptops and Desktop</Link></li>
                    <li><Link to="/l&da">Laptops and Desktop Accessories</Link></li>
                    <li><Link to="/pp">Photocopiers and Printers</Link></li>
                    <li><Link to="/networkingA">Networking Accessories</Link></li>
                  </ul>:null
} 
                 
                 </li>
                 <li onClick={()=>setVehicles(!vehicles)}>{vehicles?<ArrowUpward/>:<ArrowDownward/>}Vehicles
                 {vehicles?
                  <ul>
                    <li><Link to="/carsjeep">Cars and Jeeps</Link></li>
                    <li><Link to="/motorbikescoter">Motorbikes and Scooters</Link></li>
                    <li><Link to="/threewheelers">Three Wheelers</Link></li>
                    <li><Link to="/bicycles">Bicycles</Link></li>
                    <li><Link to="/bustruckpickup">Bus, Truck and Pikup</Link></li>
                    <li><Link to="/tracktorheavyduty">Tractors and Heavy Duty</Link></li>
                    <li><Link to="/autoparts">Auto Part and Accessories </Link></li>
                    <li><Link to="/watertransports">Water Transports</Link></li>
                    <li><Link to="/carjeepaccessories">Car and Jeep Accessories</Link></li>
                    <li><Link to="/autooilsfuilds">Auto Oils and Flids</Link></li>
                    <li><Link to="/motorbikesaccessories">MotorBikes and scooters Accessories</Link></li>
                    <li><Link to="/othervehicles">other vehicles</Link></li>
                  </ul>:null
}  
                 
                 </li>
                 <li onClick={()=>setMedicine(!medicine)}>{medicine?<ArrowUpward/>:<ArrowDownward/>}Medicine
                 {medicine?
                  <ul>
                    <li><Link to="/generalmedicine">General Medicnie</Link></li>
                    <li><Link to="/homeiomedicine">Homeio</Link></li>
                    <li><Link to="/harbealmedicine">Herbal Medicine</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setSports(!sports)}>{sports?<ArrowUpward/>:<ArrowDownward/>}Sports and Hobbies
                 {sports?
                  <ul>
                    <li><Link to="/musicalinstruments">Musical Instruments</Link></li>
                    <li><Link to="/sports">Spots</Link></li>
                    <li><Link to="/fitnessgym">Fitness and Gym</Link></li>
                    <li><Link to="/musicbookmovies">Music,Book and Movies </Link></li>
                    <li><Link to="/othersporthobbies">Othes Sports and Hobbies</Link></li>  
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setMobile(!mobile)}>{mobile?<ArrowUpward/>:<ArrowDownward/>}Mobile and Tablets
                 {mobile?
                  <ul>
                    <li><Link to="/mobilephone">Mobile Phone</Link></li>
                    <li><Link to="/tablets">Tablets</Link></li>
                    <li><Link to="/mobiletablets">Mobile and Tablets Accessories</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setSearchJob(!SearchJob)}>{SearchJob?<ArrowUpward/>:<ArrowDownward/>}Search Job Post
                 {SearchJob?
                  <ul>
                    <li><Link to="/jobpost">Job Post</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setSearchFor(!SearchFor)}>{SearchFor?<ArrowUpward/>:<ArrowDownward/>}Search for Buy something 
                 {SearchFor?
                  <ul>
                    <li><Link to="/buysomething">Buy Something</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setBusiness(!business)}>{business?<ArrowUpward/>:<ArrowDownward/>}Business and industial Products
                 
                 {business?
                  <ul>
                    <li><Link to="/stationary">Stationary and office Supplies</Link></li>
                    <li><Link to="/safety">safety and Security</Link></li>
                    <li><Link to="/industry">Industry Machinery and tools</Link></li>
                    <li><Link to="/industrial">Industrial Supplies and Raw Materials</Link></li>
                    <li><Link to="/licenses">Licenses Titles and Tenders</Link></li>
                    
                    <li><Link to="/brics">Bricks,Iron Rod, and balu</Link></li>
                    <li><Link to="/sanitary"> Sanitary, Electtrical gas Item</Link></li>
                    <li><Link to="/otherBusiness">Others Business and IndustrialProduct</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setDaily(!daily)}>{daily?<ArrowUpward/>:<ArrowDownward/>}Daily Needs
                 
                 {daily?
                  <ul>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/f&v">Frutis and Vegetable</Link></li>
                    <li><Link to="/m&f">Meat and Seafood</Link></li>
                    <li><Link to="/babyproduct">Baby Products</Link></li>
                    <li><Link to="/healthcare">Health and Care</Link></li>
                    
                    <li><Link to="/household">Household</Link></li>
                    <li><Link to="/readyfood"> Ready Food</Link></li>
                    <li><Link to="/kitchenaccessories">Kitchen Accessories</Link></li>
                  </ul>:null
}  
                 </li>
                 <li onClick={()=>setProperty(!property)}>{property?<ArrowUpward/>:<ArrowDownward/>}Property
                 
                 {property?
                  <ul>
                    <li><Link to="/apartmentflats">Apartment and Flats</Link></li>
                    <li><Link to="/houses">Houses</Link></li>
                    <li><Link to="/plotsland">Plots and Land</Link></li>
                    <li><Link to="/tolet">ToLet</Link></li>
                    <li><Link to="/commercialproperty">Commercial Property</Link></li>
                    
                    <li><Link to="/otherProperty">Other Property</Link></li>
                    
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
