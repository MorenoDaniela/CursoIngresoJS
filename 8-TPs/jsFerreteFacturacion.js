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
	var suma ;


	precioUno = document.getElementById('PrecioUno').value ;
	precioDos = document.getElementById('PrecioDos').value ;
	precioTres = document.getElementByid('PrecioTres').value ;

	precioUno = parseInt (precioUno) ;
	precioDos = parseInt (precioDos) ;
	precioTres = parseInt (precioTres) ;

	suma = (precioUno + precioDos + precioTres) ;

	alert ("El resultado es" +suma) ;
	
}
function Promedio () 
{
	var precioUno ;
	var precioDos ;
	var precioTres ;
	var suma ;
	var promedio ;

	precioUno = document.getElementById('PrecioUno').value ;
	precioDos = document.getElementById('PrecioDos').value ;
	precioTres = document.getElementByid('PrecioTres').value ;

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
var resultado ;

precioUno = document.getElementById('PrecioUno').value ;
precioDos = document.getElementById('PrecioDos').value ;
precioTres = document.getElementByid('PrecioTres').value ;

precioUno = parseInt (precioUno) ;
precioDos = parseInt (precioDos) ;
precioTres = parseInt (precioTres) ;

suma = (precioUno + precioDos + precioTres) ;
resultado = (suma * 121 / 100) ;

alert ("Precio Final:" +resultado) ;
	
}