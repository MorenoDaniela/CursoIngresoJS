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


	precioUno = document.getElementById('PrecioUno') ;
	precioDos = document.getElementById('PrecioDos') ;
	precioTres = document.getElementByid('PrecioTres') ;

	precioUno = parseInt (precioUno) ;
	precioDos = parseInt (precioDos) ;
	precioTres = parseInt (precioTres) ;

	resultado = (precioUno + precioDos + precioTres) ;

	alert ("El resultado es" +resultado) ;
	
}
function Promedio () 
{
	var precioUno ;
	var precioDos ;
	var precioTres ;
	var suma ;
	var promedio ;

	precioUno = document.getElementById('PrecioUno') ;
	precioDos = document.getElementById('PrecioDos') ;
	precioTres = document.getElementByid('PrecioTres'),;

	precioUno = parseInt(precioUno) ;
	precioDos = parseInt(precioDos) ;
	precioTres = parseInt(precioTres) ;

	suma = (precioUno + precioDos + precioTres) ;
	promedio = (suma / 3) ;

	alert ("El promedio es" +promedio) ;
	
}
function PrecioFinal () 
{

var precioUno ;
var precioDos ;
var precioTres ;
var suma ;
var PrecioFinal ;

precioUno = document.getElementById('PrecioUno') ;
precioDos = document.getElementById('PrecioDos')  ;
precioTres = document.getElementByid('PrecioTres') ;

precioUno = parseInt (precioUno) ;
precioDos = parseInt (precioDos) ;
precioTres = parseInt (precioTres) ;

suma = (precioUno + precioDos + precioTres) ;
precioFinal = (21 * 100) / suma ;

alert ("Precio Final:" +precioFinal) ;
	
}