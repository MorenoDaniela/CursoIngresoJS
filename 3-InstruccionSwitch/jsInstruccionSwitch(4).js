function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje ;

switch (mesDelAño)
{
	case "Febrero" :
	mensaje = "Tiene 28 dìas" ;
	break ;
	case "Abril" :
	case "Junio" :
	case "Septiembre" :
	case "Noviembre" :
	mensaje = "Este mes tiene 30 dìas" ;
	break ;
	default :
	mensaje = "Este mes tiene 31 dìas" ;
	break ;
}

alert (mensaje);
	
	



}//FIN DE LA FUNCIÓN