/*const lista1 = [
    100,
    200,
    300,
    5000000,
];

const mitadlista1 = parseInt(lista1.leng /2) ;

function esPar (numerito) {
    if(numerito % 2 === 0)
        return true;
    else {
        return false;
    }
}

let mediana;

if (lista1 es par?)
    necesitamos 2 elementos
    -> el promedio
    -> la mediana

else {
    posicion mitadlista1 dentro de lista1
    -> mediana
}*/

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  const lista1 = [
    100,
    200,
    500,
    400000000,
  ];
  
  const mitadLista1 = parseInt(lista1.length / 2);
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let mediana;
  
  if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
  }
