import Carrito from "../../carrito-de-compras.svg";

const CartWidget = () =>{

    return(
        <div>
            <img  src={Carrito} alt="Carrito de compras color negro" />
            <span class="cantidad_carrito">10</span>
        </div>
    );
}

export default CartWidget;