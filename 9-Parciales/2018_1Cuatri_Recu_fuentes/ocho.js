function mostrar()
{
	var letra;
	var numero;
	var respuesta= "si" ;
	var contadorPares= 0 ;
	var contadorCeros=0;
	var contadorImpares=0 ;
	var positivo=0;
	var negativo=0;
	var promedio=0;
	var maximo= -101;
	var letraMaximo;
	var minimo= 101;
	var letraMinimo;

	



	while (respuesta != "no")
	{
		numero = prompt ("Ingrese un numero entre -100 y 100.") ;
		numero = parseInt (numero) ;

		while (isNaN(numero) || numero < -100 || numero > 100)
		{
			numero = prompt ("ERROR, ingrese un numero entre -100 y 100.") ;
			numero = parseInt (numero) ;
		}

		letra = prompt ("Ingrese una letra");

		while (isNaN(letra ==true))
		{
			letra = prompt ("ERROR, ingrese una letra válida") ;
		}

		if (numero==0)
		{
			//contadorCeros + 1 ;
			contadorCeros++;
		}

		if (numero % 2 == 0)
		{
			//contadorPares = contadorPares + 1 ;
			contadorPares++;
		}
			else 
			{
				//contadorImpares = contadorImpares + 1 ;
				contadorImpares++;
			}
		
		
			
	

		if (numero>0)
		{
			positivo= positivo + 1;
			promedio = promedio + numero;
		}
			else
			{
				if (numero<0)
				{
					negativo = negativo + numero;
				}
			}
		

		if (numero < minimo)
		{
			minimo = numero;
			letraMinimo = letra;
		}

		if (numero > maximo)
		{
			maximo = numero;
			letraMaximo = letra;
		}

		respuesta = prompt ("Desea ingresar otro nùmero? si o no");
	}

	promedio = promedio / positivo;
	
	alert ("La cantidad de numeros pares es" +contadorPares);
	alert ("La cantidad de numeros impares es" +contadorImpares);
	alert ("La cantidad de ceros es" +contadorCeros);
	alert ("El promedio de todos los numeros positivos es" +promedio);
	alert ("La suma de todos los numeros negativos es" +negativo);
	alert ("El numero maximo es " +maximo+ " y su letra "+letraMaximo+ " el numero minimo es "+minimo+" y su letra " +letraMinimo);
}
