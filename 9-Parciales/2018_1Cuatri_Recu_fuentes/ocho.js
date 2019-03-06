function mostrar()
{
	var numero;
	var letra;
	var respuesta = "si";
	var contador=0;
	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;
	var contadorPositivos=0;
	var acumuladorPositivos=0;
	var contadorNegativos=0;
	var acumuladorNegativos=0;
	var numMax=-101;
	var letraMax;
	var numMin=101;
	var letraMin;
	var promedio;

	while (respuesta!="no")
	{
		contador++;
		numero = prompt ("Ingrese un numero entre -100 y 100.");
		numero = parseInt (numero);

		while (isNaN(numero) || numero>101 || numero <-101)
		{
			numero = prompt ("ERROR, ingrese un número válido entre -100 y 100.");
			numero = parseInt (numero);
		}

		letra = prompt ("Ingrese una letra.");
		while (isNaN(letra)==false)
		{
			letra = prompt ("ERROR, ingrese una letra.");
		}

		respuesta = prompt ("Responda no para dejar de ingresar.");

		if (numero==0)
		{
			contadorCeros++;
		}
		else
		{
			if (numero%2==0)
			{
				contadorPares++
			}

				else
				{
				contadorImpares++;
				}
		}


		if (numero>0)
		{
			contadorPositivos++;
			acumuladorPositivos = acumuladorPositivos +numero;
		}

		else
		{
			contadorNegativos++;
			acumuladorNegativos = acumuladorNegativos + numero;
		}

		if (numero < numMin)
		{
			numMin = numero;
			letraMin = letra;
		}

		if (numero > numMax)
		{
			numMax = numero;
			letraMax = letra;
		}
	}

	promedio = acumuladorPositivos / contadorPositivos;

	alert ("La cantidad de numeros pares es "+contadorPares);
	alert ("La cantidad de numeros impares es "+contadorImpares);
	alert ("La cantidad de ceros es "+contadorCeros);
	alert ("El promedio de todos los numeros positivos ingresados es "+promedio);
	alert ("La suma de todos los numeros negativos es "+acumuladorNegativos);
	alert ("El numero del maximo es "+numMax+ " y su letra es "+letraMax);
	alert ("El numero minimo es "+numMin+ " y su letra es "+letraMin);

}
