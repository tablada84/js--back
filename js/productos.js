let shopContenido = document.getElementById("shopContenido");
let modalContainer = document.getElementById("modal-container");
let verCarrito = document.getElementById("verCarrito");
let cantidadCarrito = document.getElementById("cantidadCarrito")

const productos = [
  {
    id: 1,
    nombre: "Skate",
    precio: 4300,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcWn1NRZL1VM2fn0jst5VWT37aaSn1x47iYQ&usqp=CAU",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Tabla de surf",
    precio: 8300,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4zlE1jNTh43gz7F1-1Wxx3NuqbqydM0SIg&usqp=CAU",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Pelota de Basquet",
    precio: 1300,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTtP-Nuh5uoHlEVKiw-8wAP8xQ_c8v3ulyg&usqp=CAU",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Rollers",
    precio: 4300,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHooAFq7Gnu-HlN35uzrNeGW5scJpePeWYUA&usqp=CAU",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Bicicletas",
    precio: 7500,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeeYLLcjNii9l5CU2asn-jFA-ndpZmPjajZQ&usqp=CAU",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Monopatin",
    precio: 8300,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXwBt_KSnkEIyA0gYnZc0mXi5MeMYXDfv4w&usqp=CAU",
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Pelota de Futbol",
    precio: 5200,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cGs7OURhitkzgq9379fCjxLAjEV76Tg09-KHIYMUXxl072vVDWinilq469l5LYjkrYs&usqp=CAU",
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "Pelota de Rugby",
    precio: 4800,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSog7hHggCY-FBlkYEFkteIXV5ReFbO5VjDNQ&usqp=CAU",
    cantidad: 1,
  },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// CREANDO LAS CARDS

productos.forEach((product) => {


  let content = document.createElement("div");

  content.className = "card";
  content.innerHTML = `
    <img src = "${product.img}">
    <h3> ${product.nombre}</h3>
    <p class = "price" >$ ${product.precio}</p>
    <p>Cantidad: ${product.cantidad}</p>
`
    ;

  modalContainer.append(content);

  let comprar = document.createElement("button");

  comprar.className = "Comprar";
  comprar.innerText = "Comprar";

  content.append(comprar);

  comprar.addEventListener("click",()=>{

  const repetir = carrito.some((repetirProduct)=> repetirProduct.id === product.id)
  if(repetir){
    carrito.map((prod)=>{
      if(prod.id === product.id){
        prod.cantidad ++
      }
    })
  }else { 
  
  carrito.push({
    id: product.id,
    img: product.img,
    nombre: product.nombre,
    precio: product.precio,
    cantidad: product.cantidad,
  });

  console.log=(carrito);
  console.log = carrito.length
  carritoCounter()
  saveLocal()
  }
});
})
const saveLocal = ()=>{ 
localStorage.setItem("carrito", JSON.stringify(carrito))

}
JSON.parse(localStorage.getItem("carrito"))