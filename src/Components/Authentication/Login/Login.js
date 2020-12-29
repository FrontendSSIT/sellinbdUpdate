import React, { useContext, useState } from 'react'
import {Grid, Container, TextField, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import './Login.scss'

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {  NavBarSub } from '../../Home/NavBars/NavBars';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../../App';
import { ToastContainer, toast,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const { register, handleSubmit,errors} = useForm();
  
    const [visiableIcon,setVisiableIcon]=useState(false);
    const[user,setUser]=useState({});
   console.log(user.usernumber)
   const location=useLocation().location?.pathname
    const history=useHistory()
    const [loginUser,setLoginUser,userName,setUserName]=useContext(userContext)
    
    // console.log( "Hello",loginUser )
    const notify = () => {
        toast.error("invalid Password Or  Phone Number !!!!", { delay: 1000 });
    }
    const successNotify = () => {
        toast.success(" Wait for few Seconds !!!!" ,{ delay: -1000 });
    }
    const [error, setError] = useState(null)
 console.log(error)
    localStorage.setItem('userNumber',user.usernumber)
const onSubmit = data =>{
    console.log(data)
    const formData = new FormData();
    formData.append('usernumber', data.usernumber);
    formData.append('password',data.password);
    fetch('https://cors-anywhere.herokuapp.com/http://sellinbd.com/api330088/registration/loginWeb.php',{
    method: 'POST',
    body:formData
    })
    .then(res=>{
        if(res.status===200){
            res.json()
            .then(dataUser=>{
        if(dataUser.message=="successful"){
            console.log(dataUser.usernumber)
            setUser(dataUser)
            history.replace("/" || location)  
        }
        if(dataUser.message !=="successful"){
            setError(dataUser.message) 
            history.replace("/login")
            notify()
        }
       
        setUserName(dataUser)
        })
        }
        setLoginUser(data)
       
    })   
    
        
}



    
    const ShowPassword=()=>{
        setVisiableIcon(true)
}
    const IconShow=()=>{
    setVisiableIcon(false)
}

 return (
     <section>
      <div>
         <NavBarSub/>
 
  
    <Container className="login">  
    
         <h2>Log in to manage your account</h2>
         <Grid container spacing={1}>
         <Grid  item xs={12} md={6} className="m-auto">
        {error !==null ? <p style={{color:'red',fontSize:"16px", padding:'10px 1px',border:'1px solid red', borderRadius:'5px', textTransform: "capitalize",}}>{error}</p>:null}
       {errors.usernumber? <p  style={{color:'red',fontSize:"16px", padding:'10px 1px',border:'1px solid red', borderRadius:'5px', textTransform: "capitalize",}}>{errors.usernumber && "Please Give 11 Digit Number"}</p>:null}
       {errors.password? <p  style={{color:'red',fontSize:"16px", padding:'10px 1px',border:'1px solid red', borderRadius:'5px', textTransform: "capitalize",}}>{errors.password && "Please Give 6 Digit password Minimum"}</p>:null}
         <form onSubmit={handleSubmit(onSubmit)} >
             <Grid container spacing={1}>
             <Grid  item xs={12}>
             <TextField type="text" name="usernumber" inputRef={register({required: true, maxLength: 11,minLength: 11})} required  label="Phone Number"></TextField>
             </Grid> 
             </Grid>
 
             <Grid container spacing={1}>
             <Grid  item xs={12} className="pass">
                  <TextField type={visiableIcon? "text" : "password"} name="password" inputRef={register({required: true,minLength: 6})} required label="Password" > </TextField>
                <div className="icon-eye">
                {visiableIcon?
                 <VisibilityIcon onClick={IconShow}/>:<VisibilityOffIcon onClick={ShowPassword}/>
             }     
                </div>
             </Grid>
             </Grid>
             <Grid container spacing={1}>
             <Grid item xs={12} md={6} className="m-auto">
             <input type="submit" value="Login" className="submit-btn" onClick={successNotify} style={{marginBottom:'15px'}}/>
              
             </Grid>
             
         </Grid>
         
         </form>
        <ToastContainer 
             autoClose={3000}
        position="top-center"
        limit={1}
        transition={Flip}
        draggable={false}
        role="alert"
        />
         </Grid>
         
         </Grid>
             <Link to="/forgate" className="fogatetext" >Forgate Password?</Link>
                 <Grid container spacing={1}>
             <Grid item xs={12} className="reg">
             <p className="noAccount">Don't have an account?</p>
               <Link to="/signup"> <Button type="submit" value="Reregistration" className="btn"> Reregistration</Button></Link> 
          </Grid>
         </Grid>
     </Container>  

 
 </div>
     
</section>
    )
}
