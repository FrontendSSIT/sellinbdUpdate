import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {  NavBarSub } from '../Home/NavBars/NavBars'
import './AllChat.scss';
import cm from '../../images/Boy.jpg'
import cm1 from '../../images/Girl.jfif';
import { Link, useParams } from 'react-router-dom';
import { MessageBox,MessageList,ChatList } from 'react-chat-elements'



export const AllChat = () => {
    const {postId}=useParams()
    const number =localStorage.getItem('userNumber')
    const postUser=localStorage.getItem('productuser')
    const id=localStorage.getItem('postId')
    // useEffect(()=>{
    //     const formData = new FormData()
    //     formData.append('msg','')
    //     formData.append('sender',number)
    //     formData.append('receiver',postUser)
    //     formData.append('ref_product',id)
    //     fetch('http://sellinbd.com/api330088/chat/createMsg.php',{
    //         method: 'POST',
    //         body: formData
         
    //     })
      
    //     .then(res=>res.json())
    //     .then(result=>{
    //           console.log(result)
    //     })
    //   },[])
    //   const [message,setMessage]=useState([])
    //   console.log(message)
    //   useEffect(()=>{
    //     const formData = new FormData()
    //     formData.append('sender',number)
    //     formData.append('receiver',postUser)
    //     formData.append('ref_product',id)
    //     fetch('http://sellinbd.com/api330088/chat/readMsg.php',{
    //         method: 'POST',
    //         body: formData
         
    //     })
      
    //     .then(res=>res.json())
    //     .then(result=>{
    //           if(result){
    //               setMessage(result.records[0])
    //           }
    //     })
    //   },[])
    const [allChats,setAllChats]=useState([])
    console.log(allChats)
    useEffect(()=>{
        const formData = new FormData()
            formData.append('usernumber',number)
            fetch('http://sellinbd.com/api330088/chat/readChatlist.php',{
                method: 'POST',
                body: formData
             
            })
          
            .then(res=>res.json())
            .then(result=>{
                  if(result){
                    setAllChats(result.records)
                  }
            })
    },[])
    return (
        <section>
            <NavBarSub/>
            <Container className="chat-container">
          <div >
          <Row className="justify-content-center" >
          <Col lg={4} xs={12}> 
          <Row className="chat-list"> {
            allChats.map(allChat=><ChatLists allChat={allChat}/> )
          }
          </Row>
          </Col>
            </Row>
          </div>
    
            </Container>
        </section>
    )
}




 export const ChatLists=({allChat})=>{
   const postId=allChat.ref_product;
   const number =allChat.receiver
    return(
        <Col lg={12} xs={12}  style={{backgroundColor:'color',justifyContent: 'center'}}>
         <Link to={`/chatView/${number}/${postId}`}>
         <Row>
         <Col lg={3} xs={3}>
         <div>
         <img src={allChat.image1} alt="chatImage" style={{width:'60px',height:'60px',borderRadius:'50%',marginBottom:'10px'}}/>
         </div>
         </Col>
         <Col lg={9} xs={9}>
         <div>
         <h4>{allChat.productname}</h4>
         <h6>{allChat.lastmsg}</h6>
         </div>
         </Col>
         </Row>
         </Link>

        </Col>
    )
}







