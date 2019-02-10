
function mostrar()
{
	var ancho = prompt ("Introduzca el ancho") ;
	var largo = prompt ("Introduzca el largo") ;
	var perimetro ;

	
	largo = parseInt (largo) ;
	ancho = parseInt (ancho) ;

	perimetro = (ancho + largo) * 2 ;

	alert ("El perimetro es " +perimetro) ;

}
