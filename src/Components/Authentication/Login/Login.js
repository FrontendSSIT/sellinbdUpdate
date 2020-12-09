import React, { useContext, useState } from 'react'
import {Grid, Container, TextField, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
// import firebase from 'firebase/app';
// import firebaseConfig from '../FireBase/firebase.config'
import './Login.scss'
import { SignUp } from '../SignUp/SignUp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {  NavBarSub } from '../../Home/NavBars/NavBars';
import Modal from 'react-modal';
import { ForgatePassword } from '../ForgatePassWord/ForgatePassword';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../../App';






export const Login = () => {
    const { register, handleSubmit,errors} = useForm();
    const [signUp,setSignUp]=useState(false)
    const [visiableIcon,setVisiableIcon]=useState(false);
    const [forgate,setForgate]=useState(false)
    const [modalIsOpen,setIsOpen] = useState(false);
    const [otp,setOtp] = useState(false);
    const[user,setUser]=useState({});
    const history=useHistory()
    const [loginUser,setLoginUser,userName,setUserName]=useContext(userContext)

console.log(user)
    // console.log( "Hello",loginUser )

const onSubmit = data =>{
    const formData = new FormData();
    formData.append('usernumber', data.usernumber);
    formData.append('password',data.password);
    fetch('https://cors-anywhere.herokuapp.com/http://sellinbd.com/api330088/registration/loginNew.php',{
    method: 'POST',
    body:formData
    })
    .then(res=>{
        if(res.status===200){
            res.json()
            .then(dataUser=>{
          if(dataUser.message==="i"){
              console.log("invailed")
          }
          if(dataUser.message==="f"){
            history.replace("/login")
        }
        else{
            history.push('/')
        }
        setUser(dataUser)
        setUserName(dataUser)
       
        })
        }
        setLoginUser(data)
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
        <NavBarSub/>
 {signUp===false? 
 
   <Container className="login">  
   
        <h2>Log in to manage your account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
            <Grid  item xs={6}>
            <TextField type="text" name="usernumber" inputRef={register({required: true, maxLength: 11,minLength: 11})} required  label="Phone Number"></TextField>
            </Grid> 
            </Grid>

            <Grid container spacing={1}>
            <Grid  item xs={6} className="pass">
                 <TextField type={visiableIcon? "text" : "password"} name="password" inputRef={register({required: true,minLength: 6})} required label="Password" > </TextField>
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


