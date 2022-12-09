
import React from "react" 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";




const Item = ({prod}) => {
  return (

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={prod.img} />
<Card.Body>
  <Card.Title>{prod.nombre}</Card.Title>
  <Card.Text>
  $ {prod.precio}
  </Card.Text>
  <Button variant="dark"><Link className="hola" to={`/detail/${prod.id}`}>Ver detalle</Link></Button>
</Card.Body>
</Card>

  );
}

export default Item