/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	var nombre ;
	var edad ; 
	edad = elNombre.value ;
	nombre = laEdad.value ;

/*para concatenar se utiliza el signo + */

	alert (nombre+edad);

/* se escribe entre comillas el texto, se cierra comillas, +variable+, comilla sigue con el texto comilla, +edad+ sigue el texto comilla.*/

	alert ("Usted se llama " +nombre+" y tiene "+edad+" años");
	
}

