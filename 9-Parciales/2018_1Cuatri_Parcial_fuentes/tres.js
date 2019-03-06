function mostrar()
{

	
	var precio = prompt ("Ingrese el precio");
	var porcentaje = prompt ("Ingrese el porcentaje de descuento");
	var preciofinal;

	precio = parseInt (precio);
	porcentaje = parseInt (porcentaje);

	porcentaje = porcentaje * precio / 100;
	preciofinal = precio - porcentaje;

	document.getElementById('elPrecioFinal').value = preciofinal;




	


}
/*Bienvenidos. 
Pedir por prompt el precio y el porcentaje de descuento,
 mostrar el precio final con descuento por id.*/