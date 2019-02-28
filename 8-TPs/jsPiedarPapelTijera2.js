var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

var eleccionMaquina;
	//var jugador;
	var mensaje = "";

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 eleccionMaquina = Math.floor((Math.random() * 3) + 1);
	console.log (eleccionMaquina);



}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina)
	{
		case 1 :
		mensaje = "Empato.";
		ContadorDeEmpates++;
		break;
		case 2 :
		mensaje = "Perdio";
		ContadorDePerdidas++;
		break;
		case 3 :
		mensaje = "Gano.";
		ContadorDeGanadas++;
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
		ContadorDePerdidas++;
		break;
		case 2 :
		mensaje = "Empato";
		ContadorDeEmpates++;
		break;
		case 3 :
		mensaje = "Gano.";
		ContadorDeGanadas++;
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
		ContadorDePerdidas++;
		break;
		case 2 :
		mensaje = "Ganaste";
		ContadorDeGanadas++;
		break;
		case 3 :
		mensaje = "Empato";
		ContadorDeEmpates++;
		break;
		
	}
alert (mensaje);
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}