import React, { useContext } from 'react'
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom'
import { userContext } from '../../../App'

export const PrivateRoute = ({ children, ...rest }) => {
    const [loginUser,setLoginUser,userName,setUserName,productD,setProductD]=useContext(userContext)
    const userMessage=localStorage.getItem('userMessage')
   
    const history=useHistory()
    const location=useLocation()
    return (
        <Route
        {...rest}
        render={ location =>
           userName.message!=="f" || userName.message!=="i" || userName.message!=="x"? (
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
