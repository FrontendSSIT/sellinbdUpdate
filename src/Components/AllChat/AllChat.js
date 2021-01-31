import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {  NavBarSub } from '../Home/NavBars/NavBars'
import './AllChat.scss';
import { Link, useParams } from 'react-router-dom';
import { MessageBox,MessageList,ChatList } from 'react-chat-elements'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';


export const AllChat = () => {
    const {postId}=useParams()
    const number =localStorage.getItem('userNumber')
    const postUser=localStorage.getItem('productuser')
    const id=localStorage.getItem('postId')
    const [allChats,setAllChats]=useState([])
 

    useEffect(()=>{
      const formData = new FormData()
            formData.append('usernumber',number)
            fetch('http://sellinbd.com/api330088/chat/readChatlist.php',{
                method: 'POST',
                body: formData
             
            })
          
            .then(res=>{
              if(res.status===200){
        
                  res.json()
                  .then(result=>{
                      if(result){
                        setAllChats(result.records)
                      }
              })
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
            allChats.map(allChat=><ChatLists allChat={allChat} ky={allChat.post_id}/> ).reverse()
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
   const number =allChat.receiver;
   const seen=allChat.lastmsg_seen;
   const seenCount=localStorage.getItem('seen');
   const formatter = buildFormatter(frenchStrings)
    return(
        <Col lg={12} xs={12}  style={{backgroundColor:'color',justifyContent: 'center'}} className="chat-list-user">
         <Link to={`/chatView/${number}/${postId}`} refresh="true" >
         <Row>
         <Col lg={3} xs={3}>
         <div>
         <img src={allChat.image1} alt="chatImage" style={{width:'60px',height:'60px',borderRadius:'50%',marginBottom:'10px'}}/>
         </div>
         </Col>
         <Col lg={9} xs={9}>
         <div>
         <h3>{allChat.productname}</h3>
       <h6 className={allChat.lastmsg_seen ==="1"? "ColorMsgSeen":"ColorMsgUnseen"}>{allChat.lastmsg}</h6>
       <small><TimeAgo date={allChat.time} formatter={formatter} /></small>
         </div>
         </Col>
         </Row>
         </Link>

        </Col>
    )
}







