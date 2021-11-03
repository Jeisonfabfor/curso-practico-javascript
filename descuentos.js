//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}



/*console.log ({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});*/

function onClickButtonPriceDiscount () {
    const inputPrice = document.getElementById ("inputPrice");
    const pricevalue = inputPrice.value;

    const inputDiscount = document.getElementById ("inputDiscount");
    const discountvalue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento (pricevalue, discountvalue);

    const resultP = document.getElementById ("ResultP");
    resultP.innerText = "El precio con descuento es: $ " + precioConDescuento;
}
