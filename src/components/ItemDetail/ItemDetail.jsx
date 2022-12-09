import Card from 'react-bootstrap/Card';
import React from "react"

const ItemDetail = ({prod}) => {
    return (
        <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.img} />
        <Card.Body>
          <Card.Title>{prod.nombre}</Card.Title>
          <Card.Text>
            $ {prod.precio}
            
          
          </Card.Text>
          <Card.Text>
           
            {prod.detalle}
           
          </Card.Text>
          <Card.Text>
           
           
            {prod.categoria}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      

    );
  }
  
  export default ItemDetail