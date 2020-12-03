import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {Grid, Container, TextField, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";

export const ForgatePassword = ({forgate, otp,submitOtp,visiableIcon,IconShow,handleForgate,ShowPassword}) => {
    const { register, handleSubmit,errors } = useForm();
    const onSubmit = data =>{
        console.log(data)
    };
    
    return (
        <div>
        
        {
            forgate? <div>
                {
            otp? <form onSubmit={handleSubmit(onSubmit)}> <Grid container spacing={1}>
            <Grid  item xs={12} className="modalForgatePass">
                 <TextField type={visiableIcon? "text" :"password"} name="pasword" inputRef={register} required label=" Give a password" className="H" > </TextField>
               <div className="icon-eye">
               {visiableIcon?
                <VisibilityIcon onClick={IconShow}/>:<VisibilityOffIcon onClick={ShowPassword}/>
            }     
               </div>
               <button >submit</button>
            </Grid>
            </Grid></form> :<form onSubmit={handleSubmit(onSubmit)}> <Grid container spacing={1}>
<Grid  item xs={12} className="modalForgatePass">
<TextField type="text" name="pasword" inputRef={register} required label=" Give Your OTP" className="H" > </TextField>
{/* <div className="icon-eye">
{visiableIcon?
<VisibilityIcon onClick={IconShow}/>:<VisibilityOffIcon onClick={ShowPassword}/>
}     
</div> */}
<button onClick={submitOtp}>submit</button>
</Grid>
</Grid> 

</form> 
        }
        </div> : <form onSubmit={handleSubmit(onSubmit)}><Grid container spacing={1}>
        <Grid  item xs={12} className="modalForgatePass">
             <TextField type="text" name="pasword" inputRef={register} required label=" Give Mobile Number" className="H" > </TextField>
           {/* <div className="icon-eye">
           {visiableIcon?
            <VisibilityIcon onClick={IconShow}/>:<VisibilityOffIcon onClick={ShowPassword}/>
        }     
           </div> */}
           <button onClick={handleForgate}>submit</button>
        </Grid>
        </Grid> 
        </form> 
        
            
        }
        </div>
    )
}
