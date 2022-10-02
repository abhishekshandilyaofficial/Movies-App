import React from 'react';
import Main from './components/Main';
//import NavBar from './components/NavBar';
//import Routing from './components/Routing';
import Home from './Home';
import Login from './Login';
import New from './New';
import PageNotFound from './PageNotFound';
import {Route, Switch, Redirect} from "react-router-dom";
function App() {
  return (
    <>
    {/* <div>App</div>
    <div>``````````````</div>
    <NavBar></NavBar>
    <Main></Main> */}
    <Switch>
      <Route path="/home">
            <Home></Home>
      </Route>
      <Route path="/login">
            <Login></Login>
      </Route>
      <Route path="/new">
            <New></New>
      </Route>
      <Redirect from="/" exact to="/home">
        
      </Redirect>
      <Route>
            <PageNotFound></PageNotFound>
      </Route>
      
    </Switch>
    
    </>
    // <Routing>
    // </Routing>
  )
}

export default App