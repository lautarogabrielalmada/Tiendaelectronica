import { useEffect, useState } from "react";
import {getProductById} from "../../Mock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetch } from "../../Mock";



const ItemDetailContainer = () =>{

const [Productos, setProductos] = useState([]) //Si ponemos el array [] funciona porque no te pide map

const {productId} = useParams()

    
    useEffect(()=>{
        
        getProductById(productId)
            getFetch
               .then((respuesta)=> setProductos(respuesta)) //hago la llamada a la api obtengo los productos lo guardo en el estado
               .catch(err => console.log(err))
       },[productId])

    return(

        //Obtener datos de un producto y mostrarlo
        <div>
        <section>
         <h2>Productos</h2>
        </section>
 
        <section>
           <div>
             <h2 >Detalle del producto</h2>
             <div >
                 <p>{Productos.nombre}</p>
                 <p>{Productos.detalle}</p>
                 <p>{Productos.precio}</p>
             </div>
           </div>
           
        </section>
        </div>

       
       )
}

//Si el detalle es el que tiene que ir cambiando segun el producto cuando tenemos un solo objeto el mock devuelve 1 array con 1 solo elemento

export default ItemDetailContainer