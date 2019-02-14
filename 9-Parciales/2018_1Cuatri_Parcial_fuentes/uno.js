//alert ("ustedes son xxx y xxx , sus edades son xx y xx, y la suma de sus edades es xx")
function mostrar()
{
	var nombreUno = prompt ("Introduzca su nombre") ;
	var nombreDos = prompt ("Introduzca un segundo nombre") ;
	var edadUno = prompt ("Introduzca su edad") ;
	var edadDos = prompt ("Introduzca una segunda edad") ;
	var resultado ;

	edadUno = parseInt (edadUno) ;
	edadDos = parseInt (edadDos) ;
	resultado = edadUno + edadDos ;
	


	alert ("Ustedes son " +nombreUno+ " y " +nombreDos+ " la suma de sus edades son " +resultado) ;

}
