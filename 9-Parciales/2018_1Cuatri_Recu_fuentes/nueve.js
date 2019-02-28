function mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var respuesta = "si";
	var temperaturasPares=0;
	var animalMasPesado;
	var temperaturaAnimalPesado;
	var animalesAMenosCero = 0;
	var contadorPeso=0;
	var promedio=0;
	var pesoMaximo = 1001;
	var pesoMinimo = 0;


	

	while (respuesta != "no")
	{
		nombre = prompt ("Ingrese el nombre del animal.");
		while (isNaN(nombre ==true))
		{
			nombre = prompt ("ERROR, ingrese el nombre del animal.")
		}

		peso = prompt ("Ingrese el peso del animal, entre 0 y 1000.");
		peso = parseInt (peso);
		while (isNaN(peso) || peso<0 || peso>1000)
		{
			peso = prompt ("ERROR, ingrese el peso del animal, entre 0 y 1000.");
			peso = parseInt(peso);
		}

		temperatura = prompt ("Ingrese la temperatura del habitat.");
		temperatura = parseInt (temperatura);
		while (isNaN(temperatura) || temperatura < -30 || temperatura > 30)
		{
			temperatura = prompt ("ERROR, ingrese la temperatura del habitat.");
			temperatura = parseInt (temperatura);
		}


		if (temperatura%2==0)
		{
			temperaturasPares = temperaturasPares + 1 ;
		}

		if (peso>0)
		{
			animalMasPesado = nombre;
			temperaturaAnimalPesado = temperatura;
			contadorPeso = contadorPeso + 1 ;
			promedio = promedio + peso ;
		}

		if (temperatura <0)
		{
			animalesAMenosCero = animalesAMenosCero + 1;

			if (peso < pesoMaximo)
			{
				pesoMaximo = peso;
			}
			else 
			{	if (peso > pesoMinimo)
				{
					pesoMinimo = peso;
				}
			}
		}

	

	respuesta = prompt ("Desea ingresar otro animal? si o no.");

	}

promedio = promedio / contadorPeso;

alert ("La cantidad de temperaturas pares es " +temperaturasPares);
alert ("El nombre del animal mas pesado es" +animalMasPesado+ " y su temperatura es " +temperaturaAnimalPesado);
alert ("La cantidad de animales que viven a menos de 0 grados es " +animalesAMenosCero);
alert ("El promedio del peso de todos los animales es: "+promedio);
alert ("El peso maximo de los animales bajo cero es" +pesoMaximo+" y el minimo es " +pesoMinimo);
}
