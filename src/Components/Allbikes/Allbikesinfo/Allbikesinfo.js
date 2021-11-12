import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Allbikesinfo = ({service}) => {
    const {_id,name,price,description,img}=service;
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
                            <Link className="btn btn-warning" to ={`/service/${service._id}`}> purchase now </Link>
                            
                        </Card.Body>
                    </Card>
            </Col>
            
        </div>
    )
}

export default Allbikesinfo
