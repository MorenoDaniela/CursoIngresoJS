function mostrar()
{
	var letra;
	var numero;
	var respuesta = "si";
	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;
	var contadorPositivos=0;
	var acumuladorNegativos=0;
	var promedio=0;
	var numeroMax=-100;
	var numeroMin=100;
	var letraMax;
	var letraMin;

	while (respuesta!="no")
	{
		letra = prompt ("Ingrese una letra.");
		while (isNaN(letra)==false)
		{
			letra = prompt ("ERROR, ingrese una letra válida.");
		}

		numero = prompt ("Ingrese un numero.");
		numero = parseInt (numero);
		while (isNaN(numero)==true || numero<-100 || numero>100)
		{
			numero = prompt ("ERROR, ingrese un numero válido.");
			numero = parseInt (numero);
		}

		if (numero==0)
		{
			contadorCeros++;
		}
			else
			{
				if (numero%2==0)
				{
					contadorPares++;
				}
					else
					{
						contadorImpares++;
					}
			}


		if (numero>0)
		{
			contadorPositivos++;
			promedio = promedio + numero;
		}
			else
			{
				if (numero<0)
				{
				acumuladorNegativos = acumuladorNegativos + numero;
				}
			}
		
		if (numero>numeroMax)
		{
			numeroMax = numero;
			letraMax = letra;
		}
			else
			{
				if (numero<numeroMin)
				{
					numeroMin = numero;
					letraMin = letra;
				}
			}
		
		
		respuesta = prompt ("¿Desea ingresar otro numero? si o no.");
	}


	promedio = promedio / contadorPositivos;

	alert ("La cantidad de numeros pares es "+contadorPares);
	alert ("La cantidad de numeros impares es "+contadorImpares);
	alert ("La cantidad de ceros es "+contadorCeros);
	alert ("El promedio de todos los números positivos ingresados es "+promedio);
	alert ("La suma de todos los numeros negativos es "+acumuladorNegativos);
	alert ("El numero del maximo es "+numeroMax+ " y su letra es " +letraMax+ " el numero minimo es "+numeroMin+ " y su letra es "+letraMin);

}
/*Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.*/