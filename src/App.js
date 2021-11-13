import React from 'react'

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.css'
import Login from './Pages/Login/Login';
import Navigation from './Shared/Navigation/Navigation';
import Dashboard from './Pages/Dashboard/Dashboard';
import Register from './Register/Register';
import Authprovider from './Context/Authprovider/Authprovider';

import Allbikes from './Components/Allbikes/Allbikes';


import Purchasepage from './Components/Purchasepage/Purchasepage';
import Privateroute from './Pages/Login/Privateroute/Privateroute';
import Footer from './Components/Footer/Footer';
import Addbikedata from './Pages/Addbikedata/Addbikedata';
import Pagenotfund from './Components/Home/Pagenotfound/Pagenotfund';


const App = () => {
  return (
    <div className="">
     
       <Authprovider>
       <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>

           

            <Route exact path='/login'>
            <Login></Login>
            </Route>
            <Route exact path='/register'>
           <Register></Register>
            </Route>


            <Privateroute  path='/allbikes'>
             <Allbikes></Allbikes>
             </Privateroute>
           
            
            

            <Privateroute path='/service/:id'>
                 <Purchasepage></Purchasepage>
            </Privateroute>

            <Route  path='/dashboard'>
            <Dashboard></Dashboard>
            </Route>
            <Route  path=''>
           <Pagenotfund></Pagenotfund>
            </Route>
           
           
          </Switch>
          <Footer></Footer>
        </Router>
      
       </Authprovider>
      
    </div>
  )
}

export default App
