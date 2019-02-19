function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroUno ;

	while (contador < 5)
	{
		numeroUno = prompt ("Ingrese un número.") ;
		numeroUno = parseInt (numeroUno) ;
		contador++;
		acumulador+=numeroUno;
	}

	//acumulador+=numeroUno;
	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN