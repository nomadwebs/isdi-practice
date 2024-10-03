function sum(arr, n) {
    // Caso base: si n es 0, la suma es 0
    console.log("---> Entro a la función con n: " + n)
    if (n === 0) {
        return 0;
    }


    // Llamada recursiva: sumamos el elemento n-1 y llamamos a sum con n-1
    console.log("---> La suma del loop es: " + arr[n - 1]);
    console.log("\n");


    return arr[n - 1] + sum(arr, n - 1);
    //1 + sum()
}

console.log(sum([2, 3, 4], 2))