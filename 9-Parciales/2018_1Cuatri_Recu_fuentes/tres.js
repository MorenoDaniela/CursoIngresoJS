function mostrar()
{
	var precio = prompt ("Ingrese el precio.");
	var porcentaje = prompt ("Ingrese el porcentaje de descuento.");
	var precioFinal;

	precio = parseInt (precio);
	porcentaje = parseInt (porcentaje);


	precioFinal = precio - (porcentaje * precio) / 100;

	elPrecioFinal.value = precioFinal;
}
/*
Bienvenidos. 
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.
Curso de ingreso UTN FRA
*/
