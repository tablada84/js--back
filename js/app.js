
// HEADER DE CARRITO DE COMPRA

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
    <span class = "restar"> - </span>
    <p>Cantidad: ${product.cantidad}</p>
    <span class = "sumar"> + </span>`;

    shopContenido.append(carritoContent);


    // CONTADOR DE PRODUCTOS, PRECIO CANTIDADES.

let restar = carritoContent.querySelector(".restar")

restar.addEventListener("click", ()=>{
  if(product.cantidad !== 1){ 
  product.cantidad --;
  }
  pintarCarrito()
})

let sumar = carritoContent.querySelector(".sumar")
sumar.addEventListener("click", ()=>{
  product.cantidad ++;
  pintarCarrito()
})

// END 
    let eliminar = document.createElement("span")

  eliminar.className = "delete-product"
  eliminar.innerText = "❌"

  carritoContent.append(eliminar)

  eliminar.addEventListener("click", eliminarProduct)

  });
  
  // SUMATARIO DE PRODUCTOS Y CANTIDADES

  let total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalPro = document.createElement("span");

  totalPro.className = "total-content";
  totalPro.innerHTML = `
Total a pagar: $${total}`;

  shopContenido.append(totalPro);
};

//END

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProduct=()=>{

let foundId = carrito.find((element)=> element.id)

carrito = carrito.filter((carritoId)=>{
return carritoId !== foundId

})
carritoCounter()
pintarCarrito()

}


const carritoCounter = ()=>{
    cantidadCarrito.style.display= "block";
    cantidadCarrito.innerText = carrito.length;
}
