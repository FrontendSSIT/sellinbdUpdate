import { Container } from "@material-ui/core"
import { Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useForm } from 'react-hook-form';
import SendIcon from '@material-ui/icons/Send';
import '../AllChat.scss'
import { useEffect, useState } from "react";



import { ChatFeed, ChatBubble,Message } from 'react-chat-ui'


export const ChatView=()=>{
  const { register, handleSubmit, errors } = useForm();
  const usernumber=localStorage.getItem('userNumber')
  const postUser = localStorage.getItem('productuser')
  const id= localStorage.getItem('postId')
  const onSubmit =  data => {
     
    console.log(data)
    const formData = new FormData()
        formData.append('msg',data.msg)
        formData.append('sender',usernumber)
        formData.append('receiver',postUser)
        formData.append('ref_product',id)
        fetch('http://sellinbd.com/api330088/chat/createMsg.php',{
            method: 'POST',
            body: formData
         
        })
      
        .then(res=>res.json())
        .then(result=>{
              console.log(result)
        })
}
const {postId,number}=useParams()
localStorage.setItem('postId',postId)
localStorage.setItem('productuser',number)
const [messages,setMessage]=useState([])
  console.log(messages)

const handleSend=(e)=>{
  onSubmit()


}
useEffect(()=>{
  const formData = new FormData()
        formData.append('sender',usernumber)
        formData.append('receiver',postUser)
        formData.append('ref_product',id)
        fetch('http://sellinbd.com/api330088/chat/readMsg.php',{
            method: 'POST',
            body: formData
         
        })
      
        .then(res=>res.json())
        .then(result=>{
              if(result){
              setMessage(result.records)
              }
        })
},[])
   return(
       <section>
       <Container className="pt-5 mt-5">
       <Row className="justify-content-center">
       <Col lg={4}>
       <Row>
       <Col lg={12}>
       <div className="chatView">
       <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="msg" ref={register({required: true})}/>
        <input type="submit" />
        <SendIcon onClick={handleSend}/>
       </form>
        <div> {
          messages.map(chatRead=><ReadChat chatRead={chatRead} key={chatRead}/>)
         }
         </div>
       </div>
       </Col>
       </Row>
       </Col>
       </Row>
      <Row>
      <Col lg={12}>
      <div className="chatproductComponent">
      <ChatProductView/>
      </div>
      
      </Col>
      </Row>
     
       </Container>
       </section>
   )
}


export const ChatProductView=()=>{
  const [ChatProduct,setChatProduct]=useState([])
  console.log(ChatProduct)
  const id = localStorage.getItem('postId')
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
              setChatProduct(result[0])
            }
    })

},[id])
const category=ChatProduct.category;
const postId=id;

    return(
        <section>
        <Container fluid>
       <Row className="justify-content-center">
       <Col lg={4}>
       <Row>
     <Col lg={12}>
    <div className="ChatProduct">
    <Row className="justify-content-center">
   
    <Col lg={3} xs={4}><div><img src={ChatProduct.image1} alt=""/></div></Col>
    <Col lg={9} xs={8}><div>{ChatProduct.productname}</div></Col>
    <Link to={`/produtcDetails/${category}/${postId}`}> View Product Details</Link>
    </Row>
    </div>
     </Col>
       </Row>
       </Col>
       </Row>
        </Container>      
        </section>
    )
  }




  export const ReadChat=({chatRead})=>{
    const senderNumber=localStorage.getItem('userNumber')
    const reciverNumber=localStorage.getItem('productuser')
    return(
     <div className="d-flex">
   <div>
   {
    chatRead.receiver===senderNumber?  <ChatBubble
    message={new Message({ id: 1, message: chatRead.msg })}
  />:null
  }
   </div>
    <div>
    {
      chatRead.receiver===reciverNumber?  <ChatBubble
      message={new Message({ id: 1, message: chatRead.msg })}
    />:null
    }
    </div>
     </div>
    )
  }