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
	// esta no 
	//precioFinal = parseInt (precioFinal) ;
	

	//regla de tres simple
	porcentaje = (porcentaje * precioInicial) / 100 ;
	precioFinal = precioInicial - porcentaje ;

	//invierto esto 
	//precioFinal = elPrecioFinal.value ;
	elPrecioFinal.value = precioFinal ;
	
	//la siguiente linea deberia ir invertida tambien si se usara
	//precioFinal = document.getElementById('elPrecioFinal').value ;
	//quedaria asi
	//document.getElementById('elPrecioFinal').value = precioFinal ;

	//el alert no va porque se pide por id
	//alert ("El precio Final es " +precioFinal) ;

	



	


}
