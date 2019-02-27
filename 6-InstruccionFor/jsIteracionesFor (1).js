function mostrar()
{

var contador;
var random;
var contadorUno=0;
var contadorDos=0;
var contadorTres=0;
var contadorCuatro=0;
var contadorCinco=0;
var contadorSeis=0;
var contadorSiete=0;
var contadorOcho=0;
var contadorNueve=0;
var contadorDiez=0;

for (contador=0;contador<100000;contador++)
{
	random = Math.floor((Math.random() * 10) + 1);
	//console.log(random);
	switch (random)
	{
		case 1 :
		contadorUno++;
		break;
		case 2 :
		contadorDos++;
		break;
		case 3 :
		contadorTres++;
		break;
		case 4 :
		contadorCuatro++;
		break;
		case 5 :
		contadorCinco++;
		break;
		case 6:
		contadorSeis++;
		break;
		case 7 :
		porcentaje=contadorSiete * 100 /contador;
		 if( porcentaje>6 )
		 {
		 	contador--;
		 	continue;
		 }
		contadorSiete++;
		break;
		case 8 :
		contadorOcho++;
		break;
		case 9 :
		contadorNueve++;
		break;
		case 10 :
		contadorDiez++;
		break;
	}
	
}
	console.log("El numero uno aparecio"+contadorUno+"veces, el porcentaje es %"+contadorUno * 100 /contador);
	console.log("El numero dos aparecio"+contadorDos+"veces, el porcentaje es %"+contadorDos * 100 /contador);
	console.log("El numero tres aparecio"+contadorTres+"veces, el porcentaje es %"+contadorTres * 100 /contador);
	console.log("El numero cuatro aparecio"+contadorCuatro+"veces, el porcentaje es %"+contadorCuatro * 100 /contador);
	console.log("El numero cinco aparecio"+contadorCinco+"veces, el porcentaje es %"+contadorCinco * 100 /contador);
	console.log("El numero seis aparecio"+contadorSeis+"veces, el porcentaje es %"+contadorSeis * 100 /contador);
	console.log("El numero siete aparecio"+contadorSiete+"veces, el porcentaje es %"+contadorSiete * 100 /contador);
	console.log("El numero ocho aparecio"+contadorOcho+"veces, el porcentaje es %"+contadorOcho * 100 /contador);
	console.log("El numero nueve aparecio"+contadorNueve+"veces, el porcentaje es %"+contadorNueve * 100 /contador);
	console.log("El numero nueve aparecio"+contadorDiez+"veces, el porcentaje es %"+contadorDiez * 100 /contador);

	console.log(contador);
	suma=contadorDiez+contadorNueve+contadorOcho+contadorSiete+contadorSeis+contadorCinco+contadorCuatro+contadorTres+contadorDos+contadorUno;
	console.log(suma);
}