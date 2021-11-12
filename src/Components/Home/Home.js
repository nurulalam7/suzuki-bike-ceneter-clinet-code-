import React from 'react'
import Addbikedata from '../../Pages/Addbikedata/Addbikedata'
import Reviewadddata from '../../Pages/Dashboard/Review/ReviewaAdddata/Reviewadddata'
import Banner from './Banner/Banner'
import Ourgrouth from './Ourgrouth/Ourgrouth'



const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Addbikedata></Addbikedata>
           <Reviewadddata></Reviewadddata>
           <Ourgrouth></Ourgrouth>
          
        </div>
    )
}

export default Home
