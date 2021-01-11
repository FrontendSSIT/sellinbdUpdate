import React, { useContext, useState } from 'react'
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom'
import { userContext } from '../../../App'


 const PrivateRoute = ({ children, ...rest }) => {
    const userMessage=localStorage.getItem('userNumber')
    const username=localStorage.getItem('userName')
    const history=useHistory()
    const location=useLocation()
  
    const [loginUser,setLoginUser,userName,setUserName]=useContext(userContext)
  console.log(userName)
    return (
        <Route
        {...rest}
        render={ location =>
          userName.username||userMessage?(
            children
          ) : (
            <Redirect
              to={{
                pathname:"/login",
               location 
              }}
            />
          )
        }
      />
    )
}
export default  PrivateRoute;