/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo1;
	var aumento;

	sueldo1 = sueldo.value;
	sueldo1 = parseInt (sueldo1);

	aumento = sueldo1 * 1.1;
	aumento = parseInt (aumento);

	resultado.value = aumento;


	
}
