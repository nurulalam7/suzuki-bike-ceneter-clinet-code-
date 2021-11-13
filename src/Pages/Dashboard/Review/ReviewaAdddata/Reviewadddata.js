
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Reviewinfo from '../ReviewInfo/Reviewinfo';
import './Reviewadd.css'

const Reviewadddata = () => {
    const [reviews,setreviews]=useState([]);
    useEffect(()=>{
       fetch('https://serene-island-58723.herokuapp.com/review')
       .then(res=>res.json())
       .then(data=>setreviews(data));
    },[])
    return (
        <div className="customer">
            <h3 className="headername">our customer review</h3>
           <div className="container">
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 1}).map((_, idx) => (

                                
                                    reviews.map(review => <Reviewinfo
                                    key={review.id}
                                    review={review}
                                    ></Reviewinfo> )
                                
            
                    ))}
                </Row>

               
            </div>
        </div>
    )
}

export default Reviewadddata
