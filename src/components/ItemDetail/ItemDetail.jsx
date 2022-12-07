import Card from 'react-bootstrap/Card';
import React from "react"

const ItemDetail = ({prod}) => {
    return (
        <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{prod.nombre}</Card.Title>
          <Card.Text>
            {prod.precio}
            {prod.detalle}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      

    );
  }
  
  export default ItemDetail