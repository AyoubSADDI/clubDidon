/**
 *
 * PrivateRoutes
 *
 */
 import React from 'react'
 import { Redirect, Route } from 'react-router-dom'
 import IndexDash from './componentsDash/Index'

 // Utils
 
 const PrivateRoutes = ({ component: Component, ...rest }) => {
    const token = JSON.parse(localStorage.getItem('login'))
 
   return (
     <Route
       {...rest}
       render={(props) =>
        token ? (
          <IndexDash {...props}/>
         ) : (
           <Redirect
             to={{
               pathname: '/login',
               state: { from: props.location },
             }}
           />
         )
       }
     />
   )
 }
 
 export default PrivateRoutes