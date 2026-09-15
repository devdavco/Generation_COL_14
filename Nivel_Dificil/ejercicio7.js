let inventario =["laptop","mouse","teclado","monitor","cable HDMI"];

console.log("Inventario completo: " + inventario);
console.log("Primer elemento: " +inventario[0]);
console.log("Último elemento: "+inventario[inventario.length - 1]);
inventario.push('webcam');
console.log("Después de push('webcam') " + inventario);
console.log("Elemento eliminado: " + inventario.pop());
console.log("Después de pop(): " + inventario);
inventario.unshift('audífonos')
console.log("Después de unshift('audífonos'): " + inventario)
console.log("Elemento eliminado: " + inventario.shift());
console.log("Después de shift(): " + inventario);
console.log("Total de elementos: " + inventario.length)
