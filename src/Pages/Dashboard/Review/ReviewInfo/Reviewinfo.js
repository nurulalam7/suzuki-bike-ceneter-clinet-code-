import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Reviewinfo = ({review}) => {
    const {_id,name,price,description,img}=review;
    return (
        <div>
             <Col>
                    <Card>
                        <Card.Img  variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>{price}</Card.Title>
                           
                            <Card.Text>
                                {description}
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
            </Col>
        </div>
    )
}

export default Reviewinfo
