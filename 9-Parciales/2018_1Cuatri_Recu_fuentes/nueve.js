function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var contador=0;
	var respuesta = "si";
	var contadorPares=0;
	var contadorMenosCero=0;
	var acumuladorPeso=0;
	var promedio=0;
	var pesoMax=0;
	var pesoMin=1001;
	var animalMax;
	var temperaturaMax;

	while (respuesta=!"no")
	{
		contador++;
		animal = prompt ("Ingrese el nombre del animal.");

		peso = prompt ("Ingrese el peso del animal entre 1 y 1000.");
		peso = parseInt (peso);

		while (isNaN(peso) || peso>1000 || peso<1)
		{
			peso = prompt ("ERROR, ingrese el peso del animal entre 1 y 1000.");
			peso = parseInt (peso);
		}

		temperatura = prompt ("Ingrese la temperatura del habitat, entre -30 y 30 grados.");
		temperatura = parseInt (temperatura);

		while (isNaN(temperatura) || temperatura >30 || temperatura <-30)
		{
			temperatura = prompt ("ERROR, ingrese una temperatura válida entre -30 y 30.");
			temperatura = parseInt(temperatura);
		}

		respuesta = prompt ("Ingrese no para dejar de ingresar animales.");

		if (temperatura%2==0)
		{
			contadorPares++;
		}

		if (temperatura<0)
		{
			contadorMenosCero++;
		}

			else
			{
				if (peso<pesoMin)
				{
					pesoMin=peso;
				}

				else
				{
					if (peso>pesoMax)
					{
						pesoMax=peso;
						animalMax = animal;
						temperaturaMax = temperatura;
					}
				}
			}

		if (peso>0)
		{
			acumuladorPeso = acumuladorPeso + peso;
		}


	}

	promedio = acumuladorPeso / contador;

	alert ("La cantidad de temperaturas pares es "+contadorPares);
	alert ("El nombre del animal mas pesado es "+animalMax+ " y su temperatura es "+temperaturaMax);
	alert ("La cantidad de animales que viven a menos de 0 grados es "+contadorMenosCero);
	alert ("El promedio del peso de todos los animales es "+promedio);
	//alert ("El peso maximo " +pesoMax+ " y el minimo "+pesoMin+ " de todos los animales cuyan temperaturas sean bajo 0.");
}
/*
Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico,
 el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/