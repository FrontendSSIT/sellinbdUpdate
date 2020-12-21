import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import './PromotePost.scss'
import icon1 from '../../images/icons/slideIcon.png'
import icon2 from '../../images/icons/preminumIcon.png'
import Modal from 'react-modal';
import slidAdImg from '../../images/icons/SlidAdsP.png'
import pomoAdImg from '../../images/icons/PromotePremi.png'



export const PromotePost = () => {
    const { register, handleSubmit, errors } = useForm();
   const [day3,setDay3]=useState(false)
   const [day7,setDay7]=useState(false)
   const [day15,setDay15]=useState(false)

const handleDay3=()=>{
    setDay3(true)
    setDay7(false)
    setDay15(false)
}
const handleDay7=()=>{
    setDay3(false)
    setDay7(true)
    setDay15(false)
}
const handleDay15=()=>{
    setDay3(false)
    setDay7(false)
    setDay15(true)
}


    const onSubmit =  data => { 
        console.log('hit',data)
    }
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
       <form onSubmit={handleSubmit(onSubmit)}>
       <Row className="justify-content-center mt-5 ">
       <Col lg={4}> 
       <img src={icon1} alt="icon"/>
       <h4>Slide Ads Price & Time</h4>
       <div>
        <input type="radio" name="day" onClick={()=>{
            openModal()
            handleDay3()
        }}
         value="3 Days 299" ref={register({required: true})}/>
       <label>  &nbsp; 3 Days 299</label>
       </div>
       <div>
       <input type="radio" name="day" onClick={()=>{
        openModal()
        handleDay7()
    }}
       
       />
       <label>  &nbsp; 7 Days 499</label>
       </div>
       <div>
       <input type="radio" name="day"
       
       onClick={()=>{
        openModal()
        handleDay15()
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
        <input type="radio" name="day"/>
       <label>  &nbsp; 3 Days 99</label>
       </div>
       <div>
       <input type="radio" name="day"/>
       <label>  &nbsp; 7 Days 299</label>
       </div>
       <div>
       <input type="radio" name="day"/>
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
            day3?<img src={slidAdImg} alt="icon"/>:null
        }
        {
            day7?<h2>7</h2>:null
        }
        {
            day15?<h2>hfghgjmgjkhg</h2>:null
        }  
        <button onClick={handleSubmit}> submit</button>
     </Modal>
     {
        day3? <input type="submit"/>:null
     }
       </form>
      
       </section>
    )
}
