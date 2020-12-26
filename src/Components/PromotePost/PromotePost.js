import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import './PromotePost.scss'
import icon1 from '../../images/icons/slideIcon.png'
import icon2 from '../../images/icons/preminumIcon.png'
import Modal from 'react-modal';
import slidAdImg3 from '../../images/icons/3daySlid299.png'
import slidAdImg7 from '../../images/icons/7daySlid499.png'
import slidAdImg15 from '../../images/icons/15daySlid999.png'
import PremimumAdImg3 from '../../images/icons/3dayPremimum99 .png'
import PremimumAdImg7 from '../../images/icons/7dayPremimum299.png'
import PremimumAdImg15 from '../../images/icons/15dayPremimuim449.png'
import { NavBarSub } from '../Home/NavBars/NavBars';




export const PromotePost = () => {
   const [day3,setDay3]=useState(false)
   const [day7,setDay7]=useState(false)
   const [day15,setDay15]=useState(false)
   const [pday3,setPDay3]=useState(false)
   const [pday7,setPDay7]=useState(false)
   const [pday15,setPDay15]=useState(false)
   const [dayValue,setDayValue]=useState('')
   localStorage.setItem('day',dayValue)
const handleDay3=(e)=>{
    setDay3(true)
    setDay7(false)
    setDay15(false)
    setPDay3(false)
    setPDay7(false)
    setPDay15(false)
}
const handleDay7=()=>{
    setDay3(false)
    setDay7(true)
    setDay15(false)
    setPDay3(false)
    setPDay7(false)
    setPDay15(false)
}
const handleDay15=()=>{
    setDay3(false)
    setDay7(false)
    setDay15(true)
    setPDay3(false)
    setPDay7(false)
    setPDay15(false)
}
//premimum ad
const handlePDay3=(e)=>{
    setPDay3(true)
    setPDay7(false)
    setPDay15(false)
    setDay3(false)
    setDay7(false)
    setDay15(false)
}
const handlePDay7=()=>{
    setPDay3(false)
    setPDay7(true)
    setPDay15(false)
    setDay3(false)
    setDay7(false)
    setDay15(false)
}
const handlePDay15=()=>{
    setPDay3(false)
    setPDay7(false)
    setPDay15(true)
    setDay3(false)
    setDay7(false)
    setDay15(false)
}

const [productPost,setProductPost]=useState([])
console.log(productPost)
const day=localStorage.getItem('day')
const handlePromoteConfirm=()=>{
    const formData = new FormData()
    formData.append('duration',day)
    formData.append('post_id',productPost.post_id)
    formData.append('category',productPost.category)
    formData.append('item',productPost.item)
    formData.append('district',productPost.district)
    formData.append('place',productPost.place)
    formData.append('productname',productPost.productname)
    formData.append('model',productPost.model)
    formData.append('productdescription',productPost.productdescription)
    formData.append('productprice',productPost.productprice)
    formData.append('username',productPost.username)
    formData.append('usernumber1',productPost.usernumber1)
    formData.append('usernumber2',productPost.usernumber2)
    formData.append('productStatus',productPost.productStatus)
    formData.append('priceStatus',productPost.priceStatus)
    formData.append('image1',productPost.image1)
    formData.append('image2',productPost.image2)
    formData.append('image3',productPost.image3)
    formData.append('image4',productPost.image4)
    formData.append('image5',productPost.image5)
    formData.append('division',productPost.division)
    formData.append('registrationyear',productPost.registrationyear)
    formData.append('enginecapacity',productPost.enginecapacity)
    formData.append('fueltype',productPost.fueltype)
    formData.append('gear',productPost.gear)
    formData.append('bodytype',productPost.bodytype)
   fetch('https://sellinbd.com/api330088/registration/newsliderrequest.php',{
   method: 'POST',
   body: formData
})
.then(response => response.json())
.then(result=>{
    console.log(result)
})
}
const handlePromotePremimumConfirm=()=>{
    const formData = new FormData()
    formData.append('post_id',productPost.post_id)
    formData.append('duration',day)
    fetch('http://sellinbd.com/api330088/registration/premiumrequest.php',{
    method: 'POST',
    body: formData
    })
    .then(res=>res.json())
    .then(result=>{
            if(result){
               console.log(result)
            }
    })
}
const id= localStorage.getItem('postId')
    useEffect(()=>{
        const formData = new FormData()
        formData.append('post_id',id)
        fetch('https://sellinbd.com/api330088/product/readProductbyId.php',{
        method: 'POST',
        body: formData
        })
        .then(res=>res.json())
        .then(result=>{
                if(result[0]){
                    setProductPost(result[0])
                }
        })

    },[id])
    const customStyles = {
        content : {
          top                   : '5%',
          left                  : '0',
          right                 : '0',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          boderRedius : '20px'
        }
      };

      const [modalIsOpen,setIsOpen] = React.useState(false);
      function openModal() {
        setIsOpen(true);
      }
  function closeModal(){
    setIsOpen(false);
  }
    return (
       <section className="promotepage">
       <NavBarSub/>
       <form >
       <Row className="justify-content-center mt-5 ">
       <Col lg={4}> 
       <img src={icon1} alt="icon"/>
       <h4>Slide Ads Price & Time</h4>
       <div>
        <input type="radio" name="day" onClick={(e)=>{
            openModal()
            handleDay3()
            setDayValue(e.target.value)
        }}
         value="3"/>
       <label>  &nbsp; 3 Days 299</label>
       </div>
       <div>
       <input type="radio" name="day" onClick={(e)=>{
        openModal()
        handleDay7()
        setDayValue(e.target.value)
    }}
    value="7"
       />
       <label>  &nbsp; 7 Days 499</label>
       </div>
       <div>
       <input type="radio" name="day"
       value="15"
       onClick={(e)=>{
        openModal()
        handleDay15()
        setDayValue(e.target.value)
    }}
       />
       <label>   &nbsp;15 Days 999</label>
       </div>
       </Col>
       </Row>
       <Row className="justify-content-center mt-5 ">
       <Col lg={4}> 
       <img src={icon2} alt="icon"/>

       <h4>Premium Ads Price & Time</h4>
       <div>
        <input type="radio" name="day" value="3"
        onClick={(e)=>{
            openModal()
            handlePDay3()
            setDayValue(e.target.value)
        }}
        />
       <label>  &nbsp; 3 Days 99</label>
       </div>
       <div>
       <input type="radio" name="day" value="7"
       onClick={(e)=>{
        openModal()
        handlePDay7()
        setDayValue(e.target.value)
    }}
       />
       <label>  &nbsp; 7 Days 299</label>
       </div>
       <div>
       <input type="radio" name="day" value="15"
       onClick={(e)=>{
        openModal()
        handlePDay15()
        setDayValue(e.target.value)
    }}
       />
       <label>   &nbsp;15 Days 499</label>
       </div>
        <div className="pomomodal">
        </div>
       </Col>
       </Row>
       <Modal
       isOpen={modalIsOpen}
       onRequestClose={closeModal}
       style={customStyles}
       contentLabel="Example Modal"
     >
        {
            day3?<img src={slidAdImg3} alt="icon"/>:null
        }
        {
            day7?<img src={slidAdImg7} alt="icon"/>:null
        }
        {
            day15?<img src={slidAdImg15} alt="icon"/>:null
        }  
        {
            pday3?<img src={PremimumAdImg3} alt="icon"/>:null
        }
        {
            pday7?<img src={PremimumAdImg7} alt="icon"/>:null
        }
        {
            pday15?<img src={PremimumAdImg15} alt="icon"/>:null
        }  
        <button onClick={closeModal}>Cancle</button>
        {
            day3 || day7 || day15?<input type="submit" value="Confirm" onClick={handlePromoteConfirm}/>:null
        }      
        {
            pday3 || pday7 || pday15 ?  <input type="submit" value="Confirm" onClick={handlePromotePremimumConfirm}/>:null
        }
       
     </Modal>
       </form>
      
       </section>
    )
}
