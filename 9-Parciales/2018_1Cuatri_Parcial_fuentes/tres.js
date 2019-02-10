function mostrar()
{

	var precio = prompt("Por favor ingrese el precio");
	var porcentaje = prompt("Por favor ingrese el porcentaje");
	var precioFinal = document.getElementById('elPrecioFinal') ;



	precio = parseInt (precio) ;
	porcentaje = parseInt (porcentaje) ;

	precioFinal = (porcentaje * 100) / precio ;


	


}
