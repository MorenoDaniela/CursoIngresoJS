function mostrar()
{

//var repetciones = prompt("ingrese el número de repeticiones");


//SIN TERMINAR
	var numeroIngresado = prompt ("Ingrese un numero.") ;
	var numeroAnterior ;
	//var recorrido ;
	numeroIngresado = parseInt (numeroIngresado);
	var acumulador = 0

	for (recorrido=numeroIngresado-1;recorrido>1;recorrido--)
	{
		for (numeroAnterior=recorrido-1;numeroAnterior>0;numeroAnterior--)
		{
			console.log(numeroAnterior) ;
			if (recorrido%numeroAnterior==0)
			{
				break;
			}
		}

	if (numeroAnterior==1)
	{
		console.log("Es perfecto."+numeroIngresado);
	/*else 
	{
	console.log("No es primo");
	}*/
	}
	}


}//FIN DE LA FUNCIÓN