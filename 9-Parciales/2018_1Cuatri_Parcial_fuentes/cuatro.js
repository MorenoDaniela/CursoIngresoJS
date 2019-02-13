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
					resultado = numeroUno - numeroDos ;
					alert (resultado) ;
				}
			else 
				//(numeroUno < numeroDos) no se pone porque serian los contrarios es decir en los que el numeroDos es el mayor
				{
					resultado = numeroUno + numeroDos ;

					if (resultado > 10)

					{

						alert ("La suma es " +resultado+ " y supero el 10.") ;

					}

					else 
					{
						alert (resultado) ;
					}
				}
	}
}
