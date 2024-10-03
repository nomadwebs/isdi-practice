const log = console.log;

var ObjetoArray = [];
var objetoPersona = {};
var arrayPersonas = [];

var sayHello = function (name) { return "Hello " + name };
var obtenerEdad = function (edad) { return edad };

ObjetoArray[0] = 100;
ObjetoArray[5] = 500;
ObjetoArray[10] = 1000;

console.log("El array llamado objeto tiene: " + ObjetoArray.length + " elementos.")
console.log(ObjetoArray)

ObjetoArray[15] = objetoPersona

console.log("")
console.log("----Añado ahora el objeto dentro del array----")
console.log("")

console.log("El array llamado objeto tiene: " + ObjetoArray.length + " elementos.")
console.log(ObjetoArray)


console.log("")
console.log("----Ahora le pongo nombre y edad a la persona, para ello pongo los textos al ObjetoArray----")
console.log("")

objetoPersona.name = 'Ramon';
objetoPersona.edad = 35;
objetoPersona.profesion = 'Programador';

console.log("El array llamado objeto tiene: " + ObjetoArray.length + " elementos.")
console.log(ObjetoArray)


console.log("")
console.log("----Ahora creamos una función para decir hola----")
console.log("")

console.log("> " + sayHello(objetoPersona.name) + " how can I help you?");


console.log("")
console.log("---- Ahora se presenta y para ello guardo los textos en ObjetoArray ----");
console.log("")

ObjetoArray[1] = "Hola, tan solo te quería explicar que esto es muy divertido";
ObjetoArray[2] = obtenerEdad(objetoPersona.edad);
console.log(ObjetoArray[1]);
console.log("Por cierto, tengo " + ObjetoArray[2] + " años. Soy " + objetoPersona.profesion + " y me encanta trabajar con javaScript");

console.log("")
console.log("")
console.log("----")
console.log("---- Ahora vamos a aumentar el nivel, y añadiremos un subArray con la dirección de la persona y accederemos a la información ----");
console.log("---- También le añado los skills ----");

console.log("")

objetoPersona.address = [];
objetoPersona.address.street = "Av. Diagonal";
objetoPersona.address.num = "696";
objetoPersona.address.detail = {
    'piso': 5,
    'escalera': 'A'
};
objetoPersona.address.cp = "08025";
objetoPersona.address.city = "Barcelona";
objetoPersona.address.province = "Barcelona";

objetoPersona.skills = {
    'html': '90%',
    'javascript': '100%',
    'react': '80%',
    'node.js': '90%'
};


console.log(objetoPersona);

console.log("----")
console.log("---- Ahora muestro la información de esta persona:  ----");

for (var i; i < objetoPersona.length; i++) {
    console.log(objetoPersona[i]);
}