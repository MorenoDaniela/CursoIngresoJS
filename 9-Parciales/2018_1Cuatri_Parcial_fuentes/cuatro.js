/*al realizar una compra, si compra de mas de dos productos realiza un descuento del 10% 
y si supera los $2000 se agrega un descuento adicional del 15 %, 
si el pago es con tarjeta y no efectivo al precio final se le agrega un 10 % de recargo*/
function mostrar()
{
	var numeroUno = prompt ("Ingrese un numero.");
	var numeroDos = prompt ("Ingrese otro numero.");
	var resultado;

	

	if (numeroUno==numeroDos)
	{
		alert (numeroUno+numeroDos);
	}
	else
		numeroUno = parseInt (numeroUno);
		numeroDos = parseInt (numeroDos);
		if (numeroUno>numeroDos)
		{
			
			resultado = numeroUno-numeroDos;
			alert (resultado);
		}
		else
			if (numeroUno<numeroDos)
			{
				
				resultado = numeroUno+numeroDos;
				alert (resultado);
			}
				if (resultado>10)
				{
					alert ("la suma es"+resultado+" y supero el 10.");
				}


}
/*Bienvenidos (IF). 
Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".*/