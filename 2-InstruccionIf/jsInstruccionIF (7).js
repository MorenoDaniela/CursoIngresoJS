function mostrar()
{
//tomo la edad  

var Edad ;
var Estado ;


Edad = edad.value ;
Estado = estadoCivil.value ;

Edad = parseInt (Edad) ;

if (Edad < 18 && Estado !="Soltero")
	//el valor de soltero debe estar entre "" y en mayuscula para que me tome el Id
	
	{

	alert ("Es muy pequeño para no ser soltero.") ;
	
	}

}//FIN DE LA FUNCIÓN