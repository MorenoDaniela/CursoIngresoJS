function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroUno ;

	while (respuesta == "si")
		//si la variable es escrita no olvidar las comillas
	{
		numeroUno = prompt ("Ingrese un número.") ;
		numeroUno = parseInt (numeroUno) ;
		//acumulador+=numeroUno; es = que lo de abajo
		acumulador = acumulador + numeroUno ;
		//contador ++ ; es = que lo de abajo
		contador = contador + 1 ;
		respuesta = prompt ("¿Quiere ingresar otro número? Responder sì.") ;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN