function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta = "si";
	var contador=0;
	var contadorTemperaturas=0;
	var contadorMenosCero=0;
	var acumuladorPeso=0;
	var promedio=0;
	var pesoMax=0
	var pesoMin=101
	var marcaMax;

	while (respuesta !="no")
	{
		contador++;
		marca = prompt ("Ingrese la marca del producto.");

		peso = prompt ("Ingrese el peso, debe ser entre 1 y 100.");
		peso = parseInt (peso);

		while (isNaN(peso) || peso <1 || peso >100)
		{
			peso = prompt ("ERROR, ingrese el peso, debe ser entre 1 y 100-");
			peso = parseInt (peso);
		}

		temperatura = prompt ("Ingrese la temperatura, entre -30 y 30 grados.");
		temperatura = parseInt (temperatura);

		while (isNaN(temperatura) || temperatura <-30 || temperatura >30)
		{
			temperatura = prompt ("ERROR, ingrese una temperatura válida.");
			temperatura = parseInt (temperatura);
		}

		respuesta = prompt ("Desea ingresar otro producto? no para dejar de ingresar.");

		if (temperatura%2==0)//cantidad de temperaturas pares
		{
			contadorTemperaturas++;
		}

			if (temperatura<0)//productos a menos 0
			{
				contadorMenosCero++;
			}
		

		if (peso>0)//promedio del peso
		{
			acumuladorPeso = acumuladorPeso + peso;
		}

		if (peso>pesoMax)//el peso maximo
		{
			pesoMax = peso;
			marcaMax = marca;//la marca del peso maximo
		}
			else
			{
				if (peso<pesoMin)//el peso minimo
				{
					pesoMin = peso;
				}
			}
		
	}

	promedio = acumuladorPeso / contador; //mirar si la variable promedio la igualo o no a 0.

	alert ("La cantidad de temperaturas pares ingresadas es "+contadorTemperaturas);
	alert ("La marca del producto más pesado es "+marcaMax);
	alert ("La cantidad de productos que se conservan a menos de 0 grados es "+contadorMenosCero);
	alert ("El promedio del peso de todos los productos es "+promedio);
	alert ("El peso máximo es "+pesoMax+ " y el minimo es "+pesoMin);
}
/*
Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30)
 hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.
*/