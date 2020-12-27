import React, { useContext, useState } from 'react'
import {Grid, Container, TextField, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import '../Login/Login.scss'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import firebase from 'firebase';
import firebaseConfig from '../FireBase/firebase.config'
import { useHistory } from 'react-router-dom';
import { ArrowRightAlt, TouchAppSharp } from '@material-ui/icons';
import { userContext } from '../../../App';





export const SignUp = ({handleLogin,visiableIcon,IconShow,ShowPassword}) => {
    const { register, handleSubmit,errors } = useForm();
    const[phoneSignUp,setPhoneSignUp]=useState({})
    const [email,setEmail]=useState()
    const history=useHistory()
    const [loginUser,setLoginUser,userName,setUserName]=useContext(userContext)

    console.log(userName)
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);  
    }
    console.log(phoneSignUp.number)
    const onSubmit = data => {
        setPhoneSignUp(data)
        setUserName(data)
    };
    localStorage.setItem('name',userName.name)
    localStorage.setItem('password',userName.password)
    localStorage.setItem('number1',userName.number)
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
      
      
      const name =localStorage.getItem('name')
      const password = localStorage.getItem('password')
      const number1=localStorage.getItem('number1')
      const submitPhoneNumberAuth = () => {
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
    
    const handleUp=()=>{
      const formData = new FormData()
      formData.append('username',name);
      formData.append('number', number1);
      formData.append('password',password);
      fetch('https://sellinbd.com/api330088/registration/register.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(dataSign => {   
      console.log(dataSign)
    })
    }
    const [valueCode,setValueCode]=useState()
      const  submitPhoneNumberAuthCode = () => {
        var code=valueCode;
        let optConfirm = window.confirmationResult
        optConfirm.confirm(code)
          .then(function (result) {
              console.log("OOK")
              // handleUp()
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

    //   const handlePhoneEmail = (email,password) => {
    //     console.log("Hello")
    //     firebase.auth().createUserWithEmailAndPassword(email,password)
    //   .then(user => {
    //     setEmail(user)
        
    //   })
    //   handleUp()
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ..
    //     console.log(errorMessage)
    //   });
    // }

    
    
    
    return (
    <Container className="login">
        <h2>Log in to manage your account</h2>
       
       {
         phoneSignUp.number?<>  <Grid container spacing={1}>  <Grid item xs={12} md={6} className="m-auto">
         <form >
         <Grid container spacing={1}>
         <Grid  item xs={12} >
          
         <TextField type="text" name="code" onBlur={(e)=>setValueCode(e.target.value)} required label="Enter Your Code"></TextField>
         </Grid> 
         
         </Grid> 
         <Grid container spacing={1}>
         <Grid item xs={6}  className="m-auto">
         <input type="submit" value="submit Code" 
         onClick={submitPhoneNumberAuthCode}
           id="submit-btn"/>

         
      </Grid>
      
     </Grid>
     
     </form>
     </Grid>
     <p onClick={submitPhoneNumberAuth}  style={{color:'red'}}>
          <div id="recaptcha-container"></div>
          resend again <TouchAppSharp/></p>
     </Grid>
         </>: <> <Grid container spacing={1}>
         <Grid item xs={12} md={6} className="m-auto">
     <form onSubmit={handleSubmit(onSubmit)}>
     <div id="recaptcha-container"></div>
     <Grid container spacing={1}>
         <Grid  item xs={12} >
         <TextField name="name" inputRef={register} required label="Name"></TextField>
         </Grid> 
         </Grid>
         <Grid container spacing={1}>
         <Grid  item xs={12} >
         <TextField type="text" name="number" inputRef={register} required label="Phone Number"></TextField>
         </Grid> 
         </Grid>

         <Grid container spacing={1}>
         <Grid  item xs={12} className="pass">
         <TextField type={visiableIcon?"text":"password"} name="password" inputRef={register} required label="Password" > </TextField>
            <div className="icon-eye">
            {visiableIcon?
             <VisibilityIcon onClick={IconShow}/>:<VisibilityOffIcon onClick={ShowPassword}/>
         }     
            </div>
         </Grid>
         </Grid>
        
         <Grid container spacing={1}>
         <Grid item xs={12}>
         <input type="submit" value="SignUp" className="submit-btn" onClick={submitPhoneNumberAuth}/>
      </Grid>
     </Grid>
     <Grid container spacing={1}>
       <Grid item xs={12}>
         <p className="noAccount">Don't have an account?</p>
         <Button type="submit" className="btn" onClick={handleLogin}>Login</Button>
      </Grid>
     </Grid>
     
     </form>
     </Grid>
     </Grid>
    
    </>
       }
    </Container>
    )
}

