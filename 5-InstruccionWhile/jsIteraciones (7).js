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
		acumulador+=numeroUno;
		contador++;
		respuesta = prompt ("¿Quiere ingresar otro número?") ;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN