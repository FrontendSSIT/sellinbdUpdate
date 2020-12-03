import React, { useState } from 'react'
import {Grid, Container, TextField, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import '../Login/Login.scss'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import firebase from 'firebase';
import firebaseConfig from '../FireBase/firebase.config'
import { useHistory } from 'react-router-dom';





export const SignUp = ({handleLogin,visiableIcon,IconShow,ShowPassword}) => {
    const { register, handleSubmit,errors } = useForm();
    const[phoneSignUp,setPhoneSignUp]=useState({})
    const [email,setEmail]=useState()
    const history=useHistory()

    console.log(phoneSignUp)
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);  
    }
    console.log(phoneSignUp.number)
    const onSubmit = data => {
        setPhoneSignUp(data)
    };

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
      
      
      
      const submitPhoneNumberAuth = () => {
        setUpRecaptcha()
        var phoneNumber = phoneSignUp.number;
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
     
    const handleUp=(username,number,password)=>{
      const formData = new FormData()
      formData.append('username',username);
      formData.append('number', number);
      formData.append('password',password);
      fetch('https://sellinbd.com/api330088/registration/register.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(dataSign => {   
      console.log(dataSign)
      history.push('/')

    })
    }

      const  submitPhoneNumberAuthCode = () => {

        var code=phoneSignUp.code;
        let optConfirm = window.confirmationResult
        optConfirm
          .confirm(code)
          handlePhoneEmail(phoneSignUp.number+"@gmail.com",phoneSignUp.password)
          .then(function (result) {
              console.log("OOK")
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

      const handlePhoneEmail = (email,password) => {
        console.log("Hello")
        firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(user => {
        setEmail(user)
        
      })
     
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorMessage)
      });
    }

    
    
    
    return (
    <Container className="login">
        <h2>Log in to manage your account</h2>
        <div id="recaptcha-container"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
            <Grid  item xs={6}>
            <TextField name="name" inputRef={register} required label="Name"></TextField>
            </Grid> 
            </Grid>
            <Grid container spacing={1}>
            <Grid  item xs={6}>
            <TextField type="text" name="number" inputRef={register} required label="Phone Number"></TextField>
            </Grid> 
            </Grid>

            <Grid container spacing={1}>
            <Grid  item xs={6} className="pass">
            <TextField type={visiableIcon?"text":"password"} name="password" inputRef={register} required label="Password" > </TextField>
               <div className="icon-eye">
               {visiableIcon?
                <VisibilityIcon onClick={IconShow}/>:<VisibilityOffIcon onClick={ShowPassword}/>
            }     
               </div>
            </Grid>
            </Grid>
            <Grid container spacing={1}>
            <Grid  item xs={6}>
            <TextField type="text" name="code" inputRef={register}  label="Enter Your Code"></TextField>
            </Grid> 
            </Grid>
            <Grid container spacing={1}>
            <Grid item xs={4}>
            <TextField type="submit" value="SignUp" className="submit-btn" onClick={submitPhoneNumberAuth}/>
         </Grid>
        </Grid>
        <Grid container spacing={1}>
            <Grid item xs={3}>
            <p className="noAccount">Don't have an account?</p>
            <Button type="submit" className="btn" onClick={handleLogin}>Login</Button>
         </Grid>
        </Grid>
        
        </form>
        <Grid container spacing={1}>
            <Grid item xs={4}>
            <TextField type="submit" value="submit Code" className="submit-btn" onClick={submitPhoneNumberAuthCode}/>
         </Grid>
        </Grid>
       
    </Container>
    )
}

