import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Useauth from '../../../Hooks/Useauth';

const Manageproductinfo = ({service}) => {
    const {user}=Useauth();
    const [orders,setorders]=useState([]);
    const {_id,name,price,description,img}=service;

    const handledeleteuser = id=>{
        const proced=window.confirm('are you sure ,you want to delete');
        if(proced){
            const url=`http://localhost:5000/services/${id}`;
            fetch (url,{
                method:'DELETE',
            })
                 .then(res=>res.json())
                 .then(data=>{
                     if(data.deletedCount>0 ){
                         alert('successfuly deleted')
                         const remainingorder=orders.filter(service=> service._id !==id)
                         setorders(remainingorder)
     
                     }
                 })

        }
        // alert(id)
       
      
    }


    return (
        <div>
            <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>{price}</Card.Title>
                           
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <button className="btn btn-danger" onClick={()=>handledeleteuser(service._id)}>delete</button>
                                   



                            {/* <Link className="btn btn-warning" to ={`/service/${service._id}`}> purchase now </Link> */}
                            
                        </Card.Body>
                    </Card>
            </Col>
            
            
        </div>
    )
}

export default Manageproductinfo
