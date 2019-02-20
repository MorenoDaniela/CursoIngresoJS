function mostrar()
{
	var dia = prompt ("Ingrese un día de la semana") ;
	var mensaje ;
	//	var mensaje = " " ;

	switch (dia)
	{
		case "sabado" :
		case "domingo" :
		mensaje = "Buen finde." ;
		break ;
		case "lunes" :
		case "martes" :
		case "miercoles" :
		case "jueves" :
		case "viernes" :
		mensaje = "A trabajar." ;
		break ;
		default :
		mensaje = "No es un día válido." ;
		break ;
	}

	alert (mensaje) ;
	/*
	if (mensaje != "")
	{
	alert (mensaje) ;
	}
	*/

	
	
	
}
