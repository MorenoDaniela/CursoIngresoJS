function mostrar()
{
	var numero;
	var sexo;
	var contador=0 ;
	var promedio ;
	var acumulador= 0;
	var notaMasBaja ;
	var sexoNotaBaja ;
	var contadorVarones=0 ;

	isNaN();

	while (contador < 5)
	{
		contador++;
	
		numero = prompt ("Ingrese nota entre 0 y 10.") ;
		numero = parseInt (numero) ;
		while (isNaN(numero) ==true || numero < 0 || numero > 10)
		//isNaN(numero)==false
		{
			numero = prompt ("error ,reingrese una nota valida entre 0 y 10.") ;
			numero = parseInt (numero) ;
		}

		sexo = prompt ("Ingrese f ó m .");
		while (isNaN(numero) ==true ||  sexo != "f" && sexo != "m")
		// !isNaN(numero)==true
		{
			sexo = prompt ("error ,reingrese un sexo válido, f ó m.") ;
		}







		
		if (contador==1)
		{
			notaMasBaja = numero ;
			sexoNotaBaja = sexo ;
		}
		else
		{
			if (numero<notaMasBaja)
			{
				notaMasBaja = numero ;
				sexoNotaBaja = sexo ;
			}
		}

		if (sexo == "m" && numero >= 6)
		{
			contadorVarones = contadorVarones + 1 ;
		}

		
		acumulador = acumulador + numero ;
	}
	
	
	
	promedio = acumulador / 5 ;

	alert ("El promedio de las notas totales es: " +promedio) ;
	alert ("La nota mas baja es " +notaMasBaja+ " y el sexo de esa persona es: " +sexoNotaBaja) ;
	alert ("Cantidad de varones que su nota fue mayor o igual a 6 es: " +contadorVarones) ;

}
