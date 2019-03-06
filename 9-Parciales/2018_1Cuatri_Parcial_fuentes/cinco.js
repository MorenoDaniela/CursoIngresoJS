function mostrar()
{
	var planeta = prompt ("Ingrese el nombre de un planeta.");
	var mensaje = "";
	switch (planeta)
	{
		case "tierra" :
		mensaje = "Acá vivimos.";
		break;
		case "mercurio":
		case "venus":
		mensaje = "Acá hace más calor.";
		break;
		case "marte":
		case "pluton":
		case "urano":
		case "jupiter":
		case "neptuno":
		case "saturno":
		mensaje = "Acá hace más frio";
		break;
		default :
		mensaje = "No es un planeta válido.";
		break;
	}

alert (mensaje);

}
/*
Bienvenidos (SWITCH). 
pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en minúscula 
(Mercurio y Venus están antes que la tierra).
*/