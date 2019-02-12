function mostrar()
{
//tomo la edad  
var Edad ;

Edad = edad.value ;

Edad = parseInt (Edad) ;

/*
if ( Edad > 17) 
{

alert ("Es mayor de edad.") ;
}


if (Edad > 12 && Edad < 18) 
{

alert ("Es adolescente.") ;
}

if (Edad <13)
{
alert ("Es un niño.") ;
}
*/

if (Edad > 17) 
	{

		alert ("Es mayor de edad.") ;
	}
		else
		{
			if (Edad < 13)
			{
				alert("Es un niño.");
			}
			else
			{
				alert("Es un adolescente.");
			}
		}






}//FIN DE LA FUNCIÓN