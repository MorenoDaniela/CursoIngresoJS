function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	var numeroUno ;

	while (respuesta == "si")
		
	{
		numeroUno = prompt ("Ingrese un número.") ;
		numeroUno = parseInt (numeroUno) ;
		positivo+=numeroUno;
		contador++;
		respuesta = prompt ("¿Quiere ingresar otro número?") ;
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN