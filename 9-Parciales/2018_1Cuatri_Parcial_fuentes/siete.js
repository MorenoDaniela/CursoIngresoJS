function mostrar()
{	
	var numero = prompt ("Ingrese nota entre 0 y 10.") ;
	var sexo = prompt ("Ingrese f ó m .") ;
	var contador=0 ;
	var promedio ;
	var acumulador ;
	var notaMasBaja ;
	var sexoNotaBaja ;
	var contadorVarones=0 ;
	numero = parseInt (numero) ;

	while (contador >5)
	{
		if (nota >11)
		{
			nota = prompt ("Ingrese una nota entre 0 y 10.") ;
		}
			if (!= sexo == "f" || sexo == "m")
			{
				sexo = prompt ("Ingrese un sexo válido, f ó m.") ;
			}
			if (sexo == "m" && nota >= 6)
			{
				contadorVarones = contadorVarones + 1 ;
			}
			if (nota < nota && sexo == "m")
			{
				if (nota
			}

	}
	contador = contador +1 ;
	acumulador = acumulador + numero ;
	promedio = acumulador / 5 ;

	alert ("El promedio de las notas totales es: " +promedio) ;
	alert ("La nota mas baja es " +notaMasBaja+ " y el sexo de esa persona es: " +sexoNotaBaja) ;
	alert ("Cantidad de varones que su nota fue mayor o igual a 6 es: " +contadorVarones) ;

}
