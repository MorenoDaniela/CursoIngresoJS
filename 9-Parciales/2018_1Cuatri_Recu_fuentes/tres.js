function mostrar()
{
var precio = prompt ("Ingrese el precio.") ;
var descuento = prompt ("Ingrese el descuento.") ;
var precioFinal ;

precio = parseInt (precio) ;
descuento = parseInt (descuento) ;

precioFinal = precio - (descuento * precio) / 100 ;

document.getElementById('elPrecioFinal').value = precioFinal;
}
