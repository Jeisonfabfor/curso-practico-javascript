console.log ("buenos dias");

//Codigo del cuadrado
console.group("Cuadrados");
    //const ladoCuadrado = 5;
    //console.log ("los lados del cuadrado miden: " + ladoCuadrado + "cm");

    function perimetroCuadrado (lado) {
    return lado * 4;
   } //console.log ("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

    function areaCuadrado(lado) {
    return lado * lado;
    } 
    //console.log ("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos");
    /*const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const baseTriangulo = 4;

    console.log (
        "los lados del triangulo miden: " 
        + ladoTriangulo1 + "cm, " 
        + ladoTriangulo2 + "cm, " 
        + baseTriangulo + "cm"
        );
    const alturaTriangulo = 5.5;
    console.log ("La altura de el triangulo es de: " + alturaTriangulo + "cm");*/

    function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2+ base;
    } 
    //console.log ("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

    function areaTriangulo (base, altura) {
    return (base * altura) / 2;
    }
    //console.log ("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Codigo del circulo
console.group("circulos");

// Radio
    /*const radioCirculo = 4;
    console.log ("El radio del circulo es de: " + radioCirculo + "cm");*/

//Diametro
    function diametroCirculo (radio) {
    return radio * 2;
    }
    //console.log ("El Diametro del circulo es de: " + diametroCirculo + "cm");

//PI
    const PI = Math.PI;
    //console.log ("PI es: " + PI);

//Circunferencia
    function perimetroCirculo (radio) {
    const diametro = diametroCirculo (radio);
    return diametro *PI;
    } 
    //console.log ("El Perimetro del circulo es de: " + perimetroCirculo + "cm");

//Area
    function areaCirculo (radio) {
    return (radio * radio) * PI;
    }  
    //console.log ("El Area del circulo es de: " + areaCirculo+ "cm^2");
console.groupEnd();

//Aqui unteractuamos con el HTML

function calcularPerimetroCuadrado () {
    const input = document.getElementById ("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado (value);
    alert (perimetro);
}

function calcularAreaCuadrado () {
    const input = document.getElementById ("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado (value);
    alert (area);
}