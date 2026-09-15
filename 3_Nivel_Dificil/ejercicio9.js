let carrito = [
  { producto: "Laptop", precio: 2500000, cantidad: 1 },
  { producto: "Mouse", precio: 80000, cantidad: 2 },
  { producto: "Teclado", precio: 150000, cantidad: 1 },
];

console.log("Carrito completo: ",carrito)
console.log("Primer producto: ",carrito[0].producto)
console.log("Precio del segundo: ",carrito[1].precio)
console.log("Cantidad del tercer: ",carrito[2].cantidad)

let producto = { "producto": "Monitor", "precio": 800000,
"cantidad": 1 }
carrito.push(producto)
console.log("Nuevo producto agregado: ",carrito[carrito.length-1].producto)

//Calcular total a pagar
let totalPagar=0
for(item in carrito){
    //console.log(carrito[item].producto)
    totalPagar +=  (carrito[item].precio*carrito[item].cantidad)
}
console.log("Total a pagar: $",totalPagar)
