// CREANDO HEADER DE CARRITO DE COMPRA

const pintarCarrito = () => {
  shopContenido.innerHTML = "";
  shopContenido.style.display = "flex";
  let modalHeader = document.createElement("div");

  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
 <h1 class = "modal-header-title">Compras</h1>`;

  shopContenido.append(modalHeader);

  let modalButton = document.createElement("h1");

  modalButton.innerText = "X";
  modalButton.className = `
   modal-header-button`;

  modalHeader.append(modalButton);

  modalButton.addEventListener("click", () => {
    shopContenido.style.display = "none";
  });

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

    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--;
      }
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      product.cantidad++;
      pintarCarrito();
    });


    let eliminar = document.createElement("span");

    eliminar.className = "delete-product";
    eliminar.innerHTML = "🗑️";

    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProduct);
  });

  // SUMARIO DE PRODUCTOS Y CANTIDADES

  let total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalPro = document.createElement("span");

  totalPro.className = "total-content";
  totalPro.innerHTML = `
  Total a pagar: $${total}`;

  shopContenido.append(totalPro);

  let finalizarComprar = document.createElement("button");

  finalizarComprar.className = "Finalizar-Compra";
  finalizarComprar.innerText = "Finalizar Compra";

  shopContenido.append(finalizarComprar);
  const vaciarCarrito = document.createElement("button");

  vaciarCarrito.className = "Vaciar";
  vaciarCarrito.innerText = "Vaciar";

  shopContenido.append(vaciarCarrito)
  vaciarCarrito.addEventListener("click", () => {
    carrito = [];
    shopContenido.innerHTML=""
    carritoCounter()
    Swal.fire({

      title: "EL carrito esta vacio!!",

    });;
    // shopContenido.append(vaciarCarrito)
  })

  finalizarComprar.addEventListener("click", () => {
    shopContenido.innerHTML = ""
    carrito = []
    carritoCounter()
    Swal.fire({

      title: "Gracias por su compra!!",
      text: "Vuelva Pronto!!",
      footer: '<a href="#">Extreme Market</a>'
    });;

  });
};



verCarrito.addEventListener("click", pintarCarrito);

const eliminarProduct = () => {
  const foundId = carrito.find((element) => element.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  carritoCounter();
  // saveLocal();
  pintarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();


