import React, { useContext } from 'react'
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom'
import { userContext } from '../../../App'

export const PrivateRoute = ({ children, ...rest }) => {
    const [loginUser,setLoginUser,userName,setUserName,productD,setProductD]=useContext(userContext)
    const number=localStorage.getItem('userNumber')
    const history=useHistory()
    const location=useLocation()
    return (
        <Route
        {...rest}
        render={ location =>
           userName.message || number? (
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
