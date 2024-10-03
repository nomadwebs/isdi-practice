var tablaResultante = [];
var result = 0;

var mutiplicador = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11
};


function tablaMultiplicarDel(num) {
    //console.log(Object.values(mutiplicador).length);
    //console.log(mutiplicador[5]);

    var tituloTabla = function (num) { return "La tabla del " + num + " es:" };
    tablaResultante.push(tituloTabla(num));

    for (var i = 1; i <= Object.values(mutiplicador).length; i++) {
        result = mutiplicador[i] * num;
        tablaResultante.push(mutiplicador[i] + " x " + num + " = " + result);
    }

    return tablaResultante;
}

console.log(tablaMultiplicarDel(5));


var printNumbers = function (num) {
    for (var i = 0; i < Object.values(nums).value; i++) {
        console.log(nums[i]);
    }
}
