function mostrar()
{
	var numeroUno ;
	var numeroDos ;
	var resultado ;

	numeroUno = prompt ("Por favor ingrese un numero") ;
	numeroDos = prompt ("Por favor ingrese un segundo numero") ;

		if (numeroUno == numeroDos)
		{
			resultado = numeroUno + numeroDos ;
			alert (resultado) ;
		}
		else 
		{
			numeroUno = parseInt (numeroUno) ;
			numeroDos = parseInt (numeroDos) ;

			if (numeroUno > numeroDos)
			{
				resultado = numeroUno / numeroDos ;
				alert (resultado) ;
			}

			else //(numeroUno < numeroDos) no va
			{
				resultado = numeroUno + numeroDos ;
				if (resultado < 50)
				{
					//alert (resultado);
					alert ("La suma es " +resultado+ "y es menor a 50.") ;
				}
				else
				{
					alert (resultado) ;
				}
			}

		}
}
