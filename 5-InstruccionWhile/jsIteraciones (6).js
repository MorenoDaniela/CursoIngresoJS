function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroUno ;

// en el while va (contador < 5) porque 5 son las veces que le voy a pedir un numero
	while (contador < 5)
	{
		numeroUno = prompt ("Ingrese un número.") ;
		numeroUno = parseInt (numeroUno) ;
		contador = contador + 1 ; //Este suma literal//
		//contador = contador + 1 ; es igual a contador ++ ;
		acumulador= acumulador + numeroUno; //El acumulador suma variables 
	}

	//acumulador+=numeroUno; no va aca porque necesito que el valor de numeroUno sea el que queda despues de sumarlos,
	// si lo pusiera afuera del while numeroUno seria el ultimo numero que ingreso por prompt
	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN