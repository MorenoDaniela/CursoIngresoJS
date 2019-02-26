function mostrar()
{
	var letra;
	var numero;
	var respuesta= "si" ;
	var contador= 0 ;
	var promedio;
	var acumulador= 0;

	numero = prompt ("Ingrese un numero") ;
	numero = parseInt (numero) ;

	while (respuesta == si)
	{
		while (isNaN(numero) ==true || numero < -100 || numero > 100)
		{
			numero = prompt ("ERROR, ngrese un numero") ;
			numero = parseInt (numero) ;
			letra = prompt ("Ingrese una letra")
		}

		while (isNaN(letra) ==false)
		{
			letra = prompt ("ERROR, ingrese una letra") ;
			respuesta = prompt ("Desea ingresar otro nùmero? si o no")
		}

		
	}


	
}
