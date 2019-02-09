/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

var numeroUno ;
var resultado ;

numeroUno = document.getElementById('sueldo').value ;
resultado = document.getElementById('resultado').value ;

numeroUno = parseInt (numeroUno) ;
resultado = (numeroUno * 110 / 100) ;

alert ("El aumento es:" +resultado) ;




	
}
