function mostrar()
{
var planeta = prompt ("Ingrese el nombre del planeta.") ;
mensaje = "" ;

switch (planeta)
{
	case "tierra" :
	mensaje = "Acá vivimos." ;
	break ;
	case "mercurio" :
	case "venus" :
	mensaje = "Acá hace más calor" ;
	break ;
	case "marte" :
	case "jupiter" :
	case "saturno" :
	case "urano" :
	case "neptuno" :
	case "pluton" :
	mensaje = "Acá hace más frio" ;
	break ;
	default :
	mensaje = "No es un planeta válido." ;
	break ;
}
 alert (mensaje) ;
}
