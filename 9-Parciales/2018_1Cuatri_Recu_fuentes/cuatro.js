function mostrar()
{
	var numeroUno = prompt ("Ingrese un numero.");
	var numeroDos = prompt ("Ingrese otro número");
	var suma;

	
	

	if (numeroUno==numeroDos)
	{
		alert (numeroUno + numeroDos);
	}
	else
		if (numeroUno>numeroDos)
		{	numeroUno = parseInt (numeroUno);
			numeroDos = parseInt (numeroDos);
			alert (numeroUno/numeroDos);
		}
		else
			if (numeroDos>numeroUno)
			{	
				numeroUno = parseInt (numeroUno);
				numeroDos = parseInt (numeroDos);
				suma = numeroUno + numeroDos;
				alert (suma);
			}

	if (suma<50)
	{
		alert ("La suma es "+suma+ " y es menor a 50.");
	}
			
}
/*
Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, 
muestro el mensaje 
"la suma es xxx y es menor a 50".
*/