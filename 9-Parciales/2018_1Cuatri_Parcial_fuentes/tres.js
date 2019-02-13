function mostrar()
{

	var precioInicial ;
	var porcentaje ;
	var precioFinal ;

	precioInicial = prompt("Por favor ingrese el precio");
	porcentaje = prompt("Por favor ingrese el porcentaje de descuento");
	
	//parseo todas las variables
	precioInicial = parseInt (precioInicial) ;
	porcentaje = parseInt (porcentaje) ;
	precioFinal = parseInt (precioFinal) ;
	

	//regla de tres simple
	porcentaje = (porcentaje * precioInicial) / 100 ;
	precioFinal = precioInicial - porcentaje ;

	//precioFinal = elPrecioFinal.value ;
	//preguntar por qué esto no va
	//precioFinal = document.getElementById('elPrecioFinal').value ;

	alert ("El precio Final es " +precioFinal) ;

	



	


}
