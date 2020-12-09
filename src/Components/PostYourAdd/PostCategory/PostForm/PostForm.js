
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap'
import { NavBarSub } from '../../../Home/NavBars/NavBars';
import selectIcon from '../../../../images/selectIcon.png'
import { userContext } from '../../../../App';
export const PostForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
 
    const [loginUser,setLoginUser,userName,setUserName]=useContext(userContext);
    return (
        <section className="postForm">
        <Container fluid>
        <NavBarSub/>
        <Row className="justify-content-center">
        <Col lg={6}>  
        <div className="postLogo"><img src={selectIcon} alt="" /> Ad Post</div>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div> <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} /></div>
     <div> <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} /></div>
      <div><input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} /></div>
    
     <div> <select name="Title" ref={register({ required: true })}>
     <option value="Mr">Location</option>
     <option value="Mrs">Mrs</option>
     <option value="Miss">Miss</option>
     <option value="Dr">Dr</option>
   </select>
</div>
     <div className="radioBox">
     <div >
    
     <input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
     <label>Fixed Price</label>
   
     <input name="Developer" type="radio" value="No" ref={register({ required: true })}/>
     <label>Negotiable</label>
     </div>
    <div>
   
    <input name="Dev" type="radio" value="Yes" ref={register({ required: true })}/>
    <label>New</label>
   
     <input name="Dev" type="radio" value="No" ref={register({ required: true })}/>
     <label>Used</label>
     </div>
     </div>
     <div>  <textarea type="text" placeholder="Description" name="description" ref={register({required: true, minLength: 6, maxLength: 12})} /></div>
     <div>  <input type="file"  name="file" ref={register({required: true })} multiple/></div>

    <div className="text-center">  <input type="submit" value="Post A Ad"/></div>
    <p>User Name: {userName?.message}</p> 
    <p>User Number: {loginUser?.usernumber} </p>
    </form>
 
        </Col>
        </Row>
        </Container>
        </section>
    )
}
