alert("beinvenido/a a super marketsports")

const productos =[
  { id: 1, nombre: "tabla de surf",precio: 500, },
  { id: 2, nombre: "casco",precio: 100, },
   { id: 3,nombre: "bike",precio: 200, },
  { id: 4,nombre: "monopatin",precio: 400,  },
  { id: 5, nombre: "rollers",precio: 200,},
];

let carrito = [];



let seleccion = prompt("hola desea comprar algun productos si o no");

//armado de bucles

while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingrese si o no");
  seleccion = prompt("hola desea comprar algo si o no");
}

//recorrer el array

if (seleccion == "si") {
  alert("a continuacion nuestra lista de productos");
  let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + "$" + producto.precio 
   );
  
  alert(todoslosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("gracias por venir, hasta pronto!!");
}

;
while (seleccion != "no") {
  let producto = prompt("agregar un producto a tu carrito");
  let precio = 0;
  let optenerPrecio;

  switch (producto) {
    case "tabla de surf":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    case "casco":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    case "bike":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    case "monopatin":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
    case "rollers":
      optenerPrecio = productos.find((el) => el.nombre === producto);
      precio = optenerPrecio.precio;
      break;
      default:
      alert("no tenemos ese producto");
      break;
      
      
  } 

  

  let unidades = parseInt(prompt("cuantas unidades va a llevar"));

  carrito.push({ producto, unidades, precio });
  console.log(carrito);
  

  seleccion = prompt("desea seguir comprando?");

  while (seleccion === "no") {
    alert("gracias por la compra!!");
    carrito.forEach((carritoFinal) => {
      console.log(
        "producto: ",
        carritoFinal.producto,
        "unidades: ",
        carritoFinal.unidades,
        "total a pagar por producto $",
        carritoFinal.unidades * carritoFinal.precio
      );
    });
    break;
  }
}

// acumulador
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`el total a pagar por su compra es: $ ${total}`);


const mayorCosto = carrito.filter((el) => el.precio > 500);
console.log(
  `El valor mayor de precios de producto comprado es: ${mayorCosto[0].precio} `
);