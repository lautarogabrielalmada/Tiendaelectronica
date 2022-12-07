import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react" 



const Item = ({prod}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{prod.nombre}</Card.Title>
        <Card.Text>
          {prod.precio}
        </Card.Text>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>
  );
}

export default Item