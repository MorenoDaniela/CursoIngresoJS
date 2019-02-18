function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje = "" ;
switch (mesDelAño)
{
	case "Febrero" :
	mensaje = "Este mes no tiene mas de 29 dìas." ;
	break ;
	default :
	mensaje = "Este mes tiene 30 dìas o màs dìas." ;
	break ;
}

if (mensaje != "" )

	{
		alert (mensaje);
	}
	
	


}//FIN DE LA FUNCIÓN