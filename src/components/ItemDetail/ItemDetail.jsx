import Card from 'react-bootstrap/Card';
import React from "react"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({prod}) => {


  const handleOnAdd = (quantity) =>{
    console.log("se agrego al carrito"  + quantity)
   }

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
          <ItemCount stock={prod.stock} onAdd={handleOnAdd}/> 
        </Card.Body>
      </Card>
      </div>
      

    );
  }
  
  export default ItemDetail