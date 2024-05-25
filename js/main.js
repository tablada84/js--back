// alert("beinvenido/a a super marketsports")



// function Persona(nombreApellido, direccion, telefono, email){
// this.nombreApellido =nombreApellido;
// this.direccion = direccion;
// this.telefono = telefono;
// this.email= email;
// this.saludar = ()=>{
//     alert("bienvenido/a " + this.nombreApellido)
// };
// this.imprimir = ()=>{
//     console.log(`Nombre: ${this.nombre}, direccion: ${this.direccion}, telefono: ${this.email}`)
// }

// }


//  function validarVacio (valor){
//     if(valor == null || valor.length == 0){
//         return false;
//     } else{
//         return true;
//     }
// }

// console.log("ingresar tus datos");

// let validar = false;
// let nombreApellido;
// let direccion;
// let telefono;
// let email;

// while(validar == false){
//     nombreApellido = prompt("ingresar su nombre y apellido");
//     validar = validarVacio(nombreApellido)
// }
// validar = false;
// while(validar == false){
//     direccion = prompt("ingresar direccion");
//     validar = validarVacio(direccion)
// }
// validar = false;
// while(validar == false){
//     telefono = parseInt(prompt("ingresar telefono"));
//     validar = validarVacio(telefono)
// }
// validar = false


// while(validar == false){
//     email = prompt("ingresar email");
//     validar = validarVacio(email)
// }
// validar = false

// const Cliente = new Persona(nombreApellido, direccion, telefono, email);

// Cliente.saludar()
// Cliente.imprimir()
// console.log(Cliente)




// const productos =[
//   { id: 1, nombre: "tabla de surf",precio: 500, },
//   { id: 2, nombre: "casco",precio: 100, },
//   { id: 3,nombre: "bike",precio: 200, },
//   { id: 4,nombre: "monopatin",precio: 400,},
//   { id: 5, nombre: "rollers",precio: 200,},
// ];

// let carrito = [];



// let seleccion = prompt("hola desea comprar algun productos si o no");

// //armado de bucles

// while (seleccion != "si" && seleccion != "no") {
//   alert("por favor ingrese si o no");
//   seleccion = prompt("hola desea comprar algo si o no");
// }

// //recorrer el array con un map de prudoctos. condicionales

// if (seleccion == "si") {
//   alert("a continuacion nuestra lista de productos");
//   let todoslosProductos = productos.map(
//     (producto) => producto.nombre + " " + "$" + producto.precio 
//    );
  
//   alert(todoslosProductos.join(" - "));
// } else if (seleccion == "no") {
//   alert("gracias por venir, hasta pronto!!");
// }

// ;
// while (seleccion != "no") {
//   let producto = prompt("agregar un producto a tu carrito");
//   let precio = 0;
//   let optenerPrecio;


  
//   switch (producto) {
//     case "tabla de surf":
//       optenerPrecio = productos.find((el) => el.nombre === producto);
//       precio = optenerPrecio.precio;
//       break;
//     case "casco":
//       optenerPrecio = productos.find((el) => el.nombre === producto);
//       precio = optenerPrecio.precio;
//       break;
//     case "bike":
//       optenerPrecio = productos.find((el) => el.nombre === producto);
//       precio = optenerPrecio.precio;
//       break;
//     case "monopatin":
//       optenerPrecio = productos.find((el) => el.nombre === producto);
//       precio = optenerPrecio.precio;
//       break;
//     case "rollers":
//       optenerPrecio = productos.find((el) => el.nombre === producto);
//       precio = optenerPrecio.precio;
//       break;
//       default:
//      alert("no tenemos ese producto") 
//       break;
     
      
//   } 

  

//   let unidades = parseInt(prompt("cuantas unidades va a llevar"));

//   carrito.push({ producto, unidades, precio });

//   console.log(carrito);

   


//   seleccion = prompt("desea seguir comprando?");

//   while (seleccion === "no") {
//     alert("gracias por la compra!!");
//     carrito.forEach((carritoFinal) => {
//       console.log(
//         "producto: ",
//         carritoFinal.producto,
//         "unidades: ",
//         carritoFinal.unidades,
//         "total a pagar por producto $",
//         carritoFinal.unidades * carritoFinal.precio
//       );
//     });
//     break;
//   }

// // acumulador
// const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
// alert(`el total a pagar por su compra es: $ ${total}`);


//  function filtrarPorProducto(arr,filtro){
//   return arr.filter((productos)=>{
//     return productos.nombre.includes(filtro);
//   })
//  }

// let buscar = prompt("ingresar nombre del producto")
// const filtrado = filtrarPorProducto(productos, buscar);
// let sumarFilt = 0;

// filtrado.forEach((prod)=>{
//   alert(prod.nombre)
//   sumarFilt += prod.precio;
// })
// }