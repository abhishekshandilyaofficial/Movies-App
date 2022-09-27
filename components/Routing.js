import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';

function Home() {
    return (
      <div>Home</div>
    )
}
function Login() {
    return (
      <div>Login</div>
    )
}
function HomeSpecial() {
    return (
      <div>Home Special</div>
    )
}

function Routing() {
  return (
    <>
        <div>Routing example</div>
        <div className='border-b-2 mb-4'>
          <button className='bg-blue-500 mr-4'>Home</button>
          <button className='bg-blue-500 mr-4'>Login</button>
        </div>
       <Switch>
      
       <Route path = "/home" exact>
             <Home></Home> 
        </Route>
        <Route path= "/home/xyz">
             <HomeSpecial></HomeSpecial>
        </Route>
        <Route path = "/Login">
             <Login></Login> 
        </Route>
        <Redirect from = "/" to="/home"></Redirect>
       </Switch>
        

        
        
    </>
    
  )
}
export default Routing;



