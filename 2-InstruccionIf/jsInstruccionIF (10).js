function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var numeroRamdon ;

numeroRamdon = Math.floor((Math.random() * 10) + 1);

alert (numeroRamdon); 

if (numeroRamdon >= 9)
	{
		alert ("Excelente.") ;
	}

		else 

		{
			if (numeroRamdon >= 4)

				{ 
				alert ("Aprobo.")
				}
		
			else 
				{
				alert ("Vamos, la proxima se puede.")
				}
		}
}//FIN DE LA FUNCIÓN