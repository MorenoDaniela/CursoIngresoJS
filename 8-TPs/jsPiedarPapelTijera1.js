/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
	var eleccionMaquina;
	//var jugador;
	var mensaje = "";
	
function comenzar()
{
	eleccionMaquina = Math.floor((Math.random() * 3) + 1);
	console.log (eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina)
	{
		case 1 :
		mensaje = "Empato.";
		break;
		case 2 :
		mensaje = "Perdio";
		break;
		case 3 :
		mensaje = "Gano.";
		break;
		
	}
alert (mensaje);

}//FIN DE LA FUNCIÓN
function papel()
{
	switch (eleccionMaquina)
	{
		case 1 :
		mensaje = "Perdiste";
		break;
		case 2 :
		mensaje = "Empato";
		break;
		case 3 :
		mensaje = "Gano.";
		break;
		
	}
alert (mensaje);

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina)
	{
		case 1 :
		mensaje = "Perdiste.";
		break;
		case 2 :
		mensaje = "Ganaste";
		break;
		case 3 :
		mensaje = "Empato";
		break;
		
	}
alert (mensaje);
}//FIN DE LA FUNCIÓN