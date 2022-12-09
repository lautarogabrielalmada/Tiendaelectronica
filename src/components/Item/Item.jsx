
import React from "react" 




const Item = ({prod}) => {
  return (
    <div>
      <img src={prod.img} alt="" width="200px" height="200px"/>
      <h3>{prod.nombre}</h3>
      <p>$ {prod.precio}</p>
      
      <button>ver detalles</button>
    </div>
  );
}

export default Item