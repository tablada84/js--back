
let carrito = [];

productos.forEach((product) => {


  let content = document.createElement("div");

  content.className = "card";
  content.innerHTML = `
    <img src = "${product.img}">
    <h3> ${product.nombre}</h3>
    <p class = "price" >$ ${product.precio}</p>
    <p>Cantidad: ${product.cantidad}</p>`;

  modalContainer.append(content);

  let comprar = document.createElement("button");

  comprar.className = "comprar";
  comprar.innerText = "comprar";

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

  console.log(carrito);
  }
});
})
const pintarCarrito=() => {
  shopContenido.innerHTML = "";
  shopContenido.style.display = "flex"
  let modalHeader = document.createElement("div");

  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
<h1 class = "modal-header-title">Carrito</h1>`;

  shopContenido.append(modalHeader);

  let modalButton = document.createElement("h1");

  modalButton.innerText = "x";
  modalButton.className = `
  modal-header-button`;

  modalHeader.append(modalButton);

  modalButton.addEventListener("click",()=>{
    shopContenido.style.display = "none"
  })

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");

    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src = "${product.img}">
    <h3> ${product.nombre}</h3>
    <p class = "price" >$ ${product.precio}</p>
    <p>Cantidad: ${product.cantidad}</p>`;

    shopContenido.append(carritoContent);

    let eliminar = document.createElement("span")

  eliminar.className = "delete-product"
  eliminar.innerText = "❌"

  carritoContent.append(eliminar)

  eliminar.addEventListener("click", eliminarProduct)

  });
  

  let total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalPro = document.createElement("span");

  totalPro.className = "total-content";
  totalPro.innerHTML = `
Total a pagar: $${total}`;

  shopContenido.append(totalPro);
};

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProduct=()=>{

let foundId = carrito.find((element)=> element.id)

carrito = carrito.filter((carritoId)=>{
return carritoId !== foundId

})
pintarCarrito()
}

