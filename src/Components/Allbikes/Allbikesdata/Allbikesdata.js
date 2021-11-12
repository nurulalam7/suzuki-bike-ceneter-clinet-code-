import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Addbikeinfo from '../../../Pages/Addbikeinfo/Addbikeinfo'
import './Allbikesdata.css'

const Allbikesdata = () => {
    const [services,setservice]=useState([]);
    useEffect(()=>{
       fetch('http://localhost:5000/services')
       .then(res=>res.json())
       .then(data=>setservice(data));
    },[])
    return (
        <div className="allbikesdata">
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

export default Allbikesdata
