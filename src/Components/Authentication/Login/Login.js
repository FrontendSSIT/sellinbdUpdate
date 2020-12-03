import React, { useEffect, useState } from 'react'
import {Grid, Container, TextField, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import firebase from 'firebase/app';
import firebaseConfig from '../FireBase/firebase.config'
import './Login.scss'
import { SignUp } from '../SignUp/SignUp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { NavBars } from '../../Home/NavBars/NavBars';
import Modal from 'react-modal';
import { ForgatePassword } from '../ForgatePassWord/ForgatePassword';
import { useHistory } from 'react-router-dom';






export const Login = () => {
    const { register, handleSubmit,errors } = useForm();
    const [signUp,setSignUp]=useState(false)
    const [visiableIcon,setVisiableIcon]=useState(false);
    const [forgate,setForgate]=useState(false)
    const [modalIsOpen,setIsOpen] = useState(false);
    const [otp,setOtp] = useState(false);
    const[user,setUser]=useState({});
    console.log(user)
    const history=useHistory()

    

const onSubmit = data =>{
    fetch('https://cors-anywhere.herokuapp.com/https://sellinbd.com/api330088/registration/loginwithNewPassword.php?number='+data.number +'&password='+data.password,{
      
    headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(dataUser => {
          setUser(dataUser)
          if(dataUser.message=="i"){
              console.log("invailed")
          }
          else(
              console.log("ok")
          )
        })
            
}

const  openModal=()=>    {
    setIsOpen(true);
  }

  const closeModal=()=>{
    setIsOpen(false);
    setForgate(false);
    setOtp(false)
  }
    
    const ShowPassword=()=>{
        setVisiableIcon(true)
}
    const IconShow=()=>{
    setVisiableIcon(false)
}
    const handleSignUp =()=>{
    setSignUp(true)
}
    const handleLogin =()=>{
    setSignUp(false)
}

    const handleForgate=()=>{
     setForgate(true)
}
    const submitOtp=()=>{
    setOtp(true)

}

 return (
        <div>
        <NavBars/>
 {signUp===false? 
 
   <Container className="login">  
   
        <h2>Log in to manage your account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
            <Grid  item xs={6}>
            <TextField type="text" name="number" inputRef={register} required label="Phone Number"></TextField>
            </Grid> 
            </Grid>

            <Grid container spacing={1}>
            <Grid  item xs={6} className="pass">
                 <TextField type={visiableIcon? "text" : "password"} name="password" inputRef={register} required label="Password" > </TextField>
               <div className="icon-eye">
               {visiableIcon?
                <VisibilityIcon onClick={IconShow}/>:<VisibilityOffIcon onClick={ShowPassword}/>
            }     
               </div>
            </Grid>
            </Grid>
            <Grid container spacing={1}>
            <Grid item xs={4}>
            <TextField type="submit" value="Login" className="submit-btn"/>
             
            </Grid>
            
        </Grid>
       
        </form>
            <p onClick={openModal}>Forgate Password?</p>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                > 
                
     <ForgatePassword 
     forgate={forgate} otp={otp}
      submitOtp={submitOtp} 
      visiableIcon={visiableIcon}
      IconShow={IconShow}
    handleForgate={handleForgate}
    ShowPassword={ShowPassword}
      />
                
                </Modal>
             
        
      
                <Grid container spacing={1}>
            <Grid item xs={4} className="reg">
            <p className="noAccount">Don't have an account?</p>
            <Button type="submit" value="Reregistration" className="btn" onClick={handleSignUp}> Reregistration</Button>
         </Grid>
        </Grid>
    </Container>:<SignUp handleLogin={handleLogin} visiableIcon={visiableIcon} IconShow={IconShow}ShowPassword={ShowPassword}  />
}

</div>

    )
}


