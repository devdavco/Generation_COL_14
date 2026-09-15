let perfil = {
    nombre: "María",
    apellido: "López",
    edad: 28,
    profesion: "Diseñadora",
    ciudad: "Medellín",

};

console.log(`Perfil completo: ${perfil}`)
console
console.log(perfil.nombre)
console.log(perfil['apellido'])
perfil['edad'] = 29
//console.log(perfil.edad)
perfil.hobby = "fotografía";
delete perfil.ciudad
console.log(perfil)
