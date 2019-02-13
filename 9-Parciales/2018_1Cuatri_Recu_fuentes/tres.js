function mostrar()
{
var precioInicial ;
var precioFinal ;
var porcentaje ;

precioInicial = prompt ("Ingrese el precio") ;
porcentaje = prompt ("Ingrese el porcentaje de descuento") ;

precioInicial = parseInt (precioInicial) ;
porcentaje = parseInt (porcentaje) ;

porcentaje = (porcentaje * precioInicial) / 100 ;
precioFinal = precioInicial - porcentaje ;

//la linea siguiente muestra el precio final por id, se invierte :
// precioFinal = elPrecioFinal.value ;
elPrecioFinal.value = precioFinal ;
//la linea siguiente no va porque se pide mostrar el precio por id no por alert
//alert ("El precio final es " +precioFinal) ;

}
