const productos = [
    {
        id:1,
        img:"",
        nombre:"Play station 5",
        detalle:"PS5 calidad 4k realidad virtual 60fps",
        precio:3000
    },

    { id:2,
        img:"",
        nombre:"Xbox",
        detalle:"xbox 360 con 2 controles y un casco de realidad virtual",
        precio:500},

    { id:3,
        img:"",
        nombre:"HP-1035",
        detalle:"HP 15 pulgadas con procesador ryzen 3 apta para juegos",
        precio:600},

    { id:4,
        img:"",
        nombre:"Lenovo 82fg",
        detalle:"Lenovo con procesador i7 touch 17 pulgadas gamer con la mejor velocidad en juegos",
        precio:150}
]



export const getFetch = new Promise((respuesta,rejected)=>{
    let url = "www.productosholistica.com.ar";

    if(url === "www.productosholistica.com.ar"){
        setTimeout(()=>{
            respuesta(productos);
        },2000)
    }else{
        rejected("400 not found")
    }
})

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve(productos.find(prod => {
                return prod.id === id
            } ))
        },2000)

    })
}
