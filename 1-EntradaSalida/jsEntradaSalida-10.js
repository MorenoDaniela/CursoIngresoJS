/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{


var numeroUno ;
var resultado ;

numeroUno = document.getElementById('importe').value ;
resultado = document.getElementById('resultado').value ;

numeroUno = parseInt (numeroUno) ;
resultado = (numeroUno * 25 / 100) ;

alert ("El descuento es: " +resultado) ;
	


}
