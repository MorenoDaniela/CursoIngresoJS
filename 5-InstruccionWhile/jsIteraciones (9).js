function mostrar()
{

	var contador=0;
	// declarar variables
	var numero = prompt ("Ingrese un numero.") ;
	var respuesta= prompt ("Desea ingresar otro numero? Si o No.")
	var maximoNumero = 0 ;
	var minimoNumero = 0 ;

	numero = parseInt (numero) ;

	while(respuesta!='no')
	{
		numero = prompt ("Ingrese un numero.") ;
		
	
		if (numero > maximoNumero)
		{
			maximoNumero = numero ;
		}
		if (numero < minimoNumero)
		{
			minimoNumero = numero ;
		}
		respuesta = prompt ("Desea ingresar otro numero? Si o No") ;
	}

document.getElementById('maximoNumero').value ;
document.getElementById('minimo').value ;



}//FIN DE LA FUNCIÓN