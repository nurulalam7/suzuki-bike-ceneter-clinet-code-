import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Addbikeinfo from '../Addbikeinfo/Addbikeinfo';
import './Addbikedata.css'

const Addbikedata = () => {

    const [services,setservice]=useState([]);
    useEffect(()=>{
       fetch('https://serene-island-58723.herokuapp.com/services')
       .then(res=>res.json())
       .then(data=>setservice(data));
    },[])
    return (
        <div className="addbikedata">
            <h3 className="headername">our new bike arrival </h3>
           <div className="container">
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 1}).map((_, idx) => (

                                
                                    services.map(service => <Addbikeinfo
                                    key={service.id}
                                    service={service}
                                    ></Addbikeinfo> )
                                
            
                    ))}
                </Row>

               
            </div>
            
        </div>
    )
}

export default Addbikedata
