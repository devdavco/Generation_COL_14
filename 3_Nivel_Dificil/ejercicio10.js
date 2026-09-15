let producto = {
  nombre: "Smartphone Galaxy",
  precio: 1800000,
  disponible: true,
  colores: ["negro", "blanco", "azul"],
  especificaciones: {
    marca: "Samsung",
    ram: "8GB",
    almacenamiento: "256GB",
    camara: "108MP",
  },
  vendedor: {
    nombre: "TechStore",
    ciudad: "Bogotá",
    calificacion: 4.8,
  },
};

console.log(`Nombre: ${producto.nombre}`)
console.log(`Precio: $${producto.precio}`)
console.log(`Primer color: ${producto.colores[0]}`)
console.log(`Marca: ${producto.especificaciones.marca}`)
console.log(`RAM: ${producto.especificaciones.ram}`)
console.log(`Ciudad del vendedor: ${producto.vendedor.ciudad}`)
console.log(`Calificación: ${producto.vendedor.calificacion}`)
console.log(`Disponible actualizado: ${producto.disponible=false}`)
producto.colores.push("rojo")
console.log(`Colores actualizados: ${producto.colores}`)
console.log("Producto completo: ",producto)