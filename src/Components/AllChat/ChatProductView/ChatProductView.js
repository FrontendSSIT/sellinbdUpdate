import { Container } from "@material-ui/core"
import { Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useForm } from 'react-hook-form';
import SendIcon from '@material-ui/icons/Send';
import '../AllChat.scss'
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast,Flip } from 'react-toastify';


import { ChatFeed, ChatBubble,Message } from 'react-chat-ui'

export const ChatView=()=>{
  const successNotify = () => {
    toast.success(" New Message Check Your Message !!!!" ,{ delay: 1 });
  }
  // const { register, handleSubmit, errors } = useForm();
  const usernumber=localStorage.getItem('userNumber')
  const postUser = localStorage.getItem('productuser')
  const id= localStorage.getItem('postId')
  const [inputValue,setInputValue]=useState('')
 
const {postId,seen,number}=useParams()
localStorage.setItem('seen',seen)
localStorage.setItem('postId',postId)
localStorage.setItem('productuser',number)
const [messages,setMessage]=useState([])

const handleValue=(e)=>{
  const dataValue=e.target.value
  setInputValue(dataValue)
}

const messageEl = useRef(null);
const handleSend=(e)=>{
  const formData = new FormData()
  formData.append('msg', inputValue)
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
  setInputValue('')
  if (messageEl) {
    messageEl.current.addEventListener('DOMNodeInserted', event => {
      const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
    });
  }
}
useEffect(()=>{
  handleMessage()
  if (messageEl) {
    messageEl.current.addEventListener('DOMNodeInserted', event => {
      const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
    });
  }
  
},[])
const handleMessage=()=>{
  const formData = new FormData()
        formData.append('sender',usernumber)
        formData.append('receiver',postUser)
        formData.append('ref_product',id)
        fetch('http://sellinbd.com/api330088/chat/readMsg.php',{
            method: 'POST',
            body: formData
         
        })
      
        .then(res=>{
          if(res.status===200){
    
              res.json()
              .then(result=>{
                  if(result){
                    setMessage(result.records)
                    setCount(result.records)
                  }
          })
          }
      })
}
const [count, setCount] = useState([]);

useEffect(() => {
  setTimeout(() => {
    const formData = new FormData()
    formData.append('sender',usernumber)
    formData.append('receiver',postUser)
    formData.append('ref_product',id)
    fetch('http://sellinbd.com/api330088/chat/readMsg.php',{
        method: 'POST',
        body: formData
     
    })
  
    .then(res=>{
      if(res.status===200){

          res.json()
          .then(result=>{
              if(result){
                setMessage(result.records)
                setCount(result.records)
              }
      })
      }
  })
    console.log('hi')
  }, 1000);
  if (messageEl) {
    messageEl.current.addEventListener('DOMNodeInserted', event => {
      const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
    });
  }
},);



   return(
       <section className="chatViewSecttion">
       <Container className="pt-5 mt-5 viewContainer">
       <Row className="justify-content-center">
       <Col lg={4} xs={12}>
       <Row>
       <Col lg={12} xs={12}>
       <div className="chatView"  ref={messageEl}>
       <form >
        <input type="text" name="msg"  placeholder="Type a message....." onChange={handleValue} value={inputValue} required />
        <SendIcon onClick={handleSend}/>
       </form>
        <div> {
          messages.map(chatRead=><ReadChat chatRead={chatRead} key={chatRead.postId}/>)
         }
         </div>
         <ToastContainer 
         autoClose={3000}
    position="top-center"
    limit={1}
    transition={Flip}
    draggable={false}
    role="alert"
    />
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
       <Col lg={4} xs={12}>
       <Row>
     <Col lg={12} xs={12}>
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
      <section >
   <Row>
   <Col lg={12} xs={12}>
   <div className='textOne'>
   {
    chatRead.receiver===senderNumber?  <ChatBubble
    message={new Message({ id: 1, message: chatRead.msg })}
  />:null
  }
   </div>
   </Col>
   </Row>
    <Row    >
    <Col lg={12} xs={12}>
    <div className='textTwo '>
    {
      chatRead.receiver===reciverNumber?  <ChatBubble
      message={new Message({ id: 1, message: chatRead.msg })}
    />:null
    }
    </div>
    </Col>
    </Row>
  
  </section>
    )
  }