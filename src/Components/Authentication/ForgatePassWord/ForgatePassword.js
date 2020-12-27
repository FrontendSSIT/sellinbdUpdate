import React, { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ForgatePassword.scss'
import firebase from 'firebase';
import firebaseConfig from '../FireBase/firebase.config'


export const ForgatePassword = () => {
   const [dataValue,setDataValue]=useState()
   localStorage.setItem('numberUser',dataValue)
  const [dataPass,setDataPass] = useState()
  localStorage.setItem('dataPass',dataPass)



  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);  
}
  let setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };
  const [ok,setOk]=useState(false)
  const number1=localStorage.getItem('numberUser')
  const submitPhoneNumberAuth = () => {
      setOk(true)
    setUpRecaptcha()
    var phoneNumber = `+88`+number1;
    var appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber,appVerifier)
      .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const password=localStorage.getItem('dataPass')
  const handleForgatePass=()=>{
    const formData = new FormData()
    formData.append('usernumber',number1);
    formData.append('password', password);
    fetch('http://sellinbd.com/api330088/registration/loginwithNewPassword.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(dataSign => {   
    console.log(dataSign)
  })
  }
  const valueCode=localStorage.getItem('code')
  const  submitPhoneNumberAuthCode = () => {
    var code=valueCode;
    let optConfirm = window.confirmationResult
    optConfirm.confirm(code)
      .then(function (result) {
          console.log("OOK")
          handleForgatePass()
      })
      
      .catch(function (error) {
        console.log(error);
      });
    
      // handleUp(phoneSignUp.name,phoneSignUp.number,phoneSignUp.password)
     
  }
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user)
      console.log("USER LOGGED IN");
    } else {
      // No user is signed in.
      console.log("USER NOT LOGGED IN");
    }
  });
    return (
        <Container className="forgatePassword-from">
        {ok?<><Otp onClick={submitPhoneNumberAuthCode}/> <p OnClick={submitPhoneNumberAuth}>
        <div id="recaptcha-container"></div>
        resend
        </p></>:<Row className="justify-content-center">


        <Col lg={6}>
        <form >
       <div id="recaptcha-container"></div>
        <Row>
        <Col lg={12}> <input name="number"  placeholder="Enter Your number"  required onBlur={(e)=>setDataValue(e.target.value  )}/></Col>
        <Col lg={12}> <input name="password"  placeholder="Enter Your Password"  required  onBlur={(e)=>setDataPass(e.target.value)}/></Col>
        <Col lg={12}>  <input type="submit"  onClick={submitPhoneNumberAuth}/> </Col>
        </Row>
      </form>
        </Col>
        </Row>}
        </Container>
    )
}


export const Otp = ({submitPhoneNumberAuthCode})=>{
const [code,setCode]=useState()
localStorage.setItem('code',code)
    return(
        <Container className="forgatePassword-from">
        <Row className="justify-content-center">
        <Col lg={6}>
        <form >
        <Row>
        <Col lg={12}> <input name="password"  placeholder="OTP"  required onBlur={(e)=>setCode(e.target.value)}/></Col>
        <Col lg={12}> <Link to="/Otp" onClick={submitPhoneNumberAuthCode}><input type="submit" /></Link> </Col>
        </Row>
      </form>
        </Col>
        </Row>
        </Container>
    )
}