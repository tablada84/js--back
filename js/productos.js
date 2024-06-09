let shopContenido = document.getElementById("shopContenido");
let modalContainer = document.getElementById("modal-container");
let verCarrito = document.getElementById("verCarrito");
let cantidadCarrito = document.getElementById("cantidadCarrito")



let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async() =>{
  const response = await fetch("data.json");
const data = await response.json();

data.forEach((product) => {


  let content = document.createElement("div");

  content.className = "card";
  content.innerHTML = `
    <img src = "${product.img}">
    <h3> ${product.nombre}</h3>
    <p class = "price" >$ ${product.precio}</p>
    <p>Cantidad: ${product.cantidad}</p>
    `

  modalContainer.append(content);

  let comprar = document.createElement("button");

  comprar.className = "Comprar";
  comprar.innerText = "Comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {

    const repetir = carrito.some((repetirProduct) => repetirProduct.id === product.id)
    if (repetir) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++
        }
      })
    } else {

      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
        title: product.title,
      });

      console.log = (carrito);
       console.log=carrito.length
      carritoCounter()
      saveLocal()
   
    
    }
  });
})
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito))

}
JSON.parse(localStorage.getItem("carrito"))
}

getProducts()


