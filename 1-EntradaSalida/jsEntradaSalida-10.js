/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var precio;
	var descuento;

	precio = importe.value;
	precio = parseInt (precio);

	descuento = precio * 0.75;
	descuento = parseInt (descuento);


	resultado.value = descuento;
}
