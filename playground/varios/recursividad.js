// Función recursiva para recorrer un array anidado
function recorrerArrayAnidado(arr) {
    // Iteramos sobre cada elemento del array usando un bucle 'for'
    for (let i = 0; i < arr.length; i++) {
        let elemento = arr[i]; // Guardamos el elemento actual

        // Comprobamos si el elemento es otro array (es decir, está anidado)
        if (Array.isArray(elemento)) {
            // Si es un array, llamamos a la función recursivamente
            recorrerArrayAnidado(elemento);
        } else {
            // Si no es un array, simplemente mostramos el valor
            console.log(elemento);
        }
    }
}

// Ejemplo de un array anidado
let arrayAnidado = [1,
    [2, 3],
    [4,
        [5, 6]],
    7];

// Llamamos a la función para recorrer el array
recorrerArrayAnidado(arrayAnidado);