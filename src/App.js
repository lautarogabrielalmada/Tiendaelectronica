import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

import { BrowserRouter, Routes, Route } from "react-router-dom" //permite conectar la aplicacion con el navegador tambien se ponen las routes y route

const App = () => {
    const bienvenida = "Bienvenidos a la tienda Holistica Alma";

    return(
        <BrowserRouter>
            <header>
                <NavBar/>
            </header>
        <Routes>
           <Route path="/" element={<ItemListContainer/>}></Route> 
           <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route> 
           <Route path="/detail/:productId" element={<ItemDetailContainer/>}></Route> 
        </Routes>


        {/* <div>
            <header>
                <NavBar/>
            </header>

            <main>
                <ItemListContainer greeting={bienvenida}/>
            </main>

        </div> */}
        </BrowserRouter>
    );
}

export default App;