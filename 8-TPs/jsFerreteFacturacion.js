/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno ;
	var precioDos ;
	var precioTres ;
	var resultado ;


	precioUno = PrecioUno.value;
	precioDos = PrecioDos.value ;
	precioTres = PrecioTres.value ;

	precioUno = parseInt(precioUno) ;
	precioDos = parseInt(precioDos) ;
	precioTres = parseInt(precioTres) ;

	resultado = precioUno + precioDos + precioTres;

	alert("El resultado es " + resultado);
	
}

function Promedio () 
{
	var precioUno ;
	var precioDos ;
	var precioTres ;
	var suma ;
	var promedio ;

	precioUno = PrecioUno.value ;
	precioDos = PrecioDos.value ;
	precioTres = PrecioTres.value ;

	precioUno = parseInt(precioUno) ;
	precioDos = parseInt(precioDos) ;
	precioTres = parseInt(precioTres) ;

	suma = (precioUno + precioDos + precioTres) ;
	promedio = (suma / 3) ;

	alert("El promedio es" +promedio) ;
	
}

function PrecioFinal () 
{

var precioUno ;
var precioDos ;
var precioTres ;
var suma2 ;
var precioFinal ;

precioUno = PrecioUno.value ;
precioDos = PrecioDos.value ;
precioTres = PrecioTres.value ;

precioUno = parseInt(precioUno) ;
precioDos = parseInt(precioDos) ;
precioTres = parseInt(precioTres) ;

suma2 = (precioUno + precioDos + precioTres) ;
precioFinal = (21 * 100) / suma2 ;

alert("Precio Final:" +precioFinal) ;
	
}