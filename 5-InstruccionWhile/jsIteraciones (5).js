function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "f" && sexo != "m")
{
	sexo = prompt("ingrese f ó m .");
}


document.getElementById('Sexo').value=sexo;

/*
 (!(sexo == "f" || sexo =="m"))
 lo de arriba es lo mismo que lo de abajo
(sexo != "f" && sexo != "m")
 */
}//FIN DE LA FUNCIÓN