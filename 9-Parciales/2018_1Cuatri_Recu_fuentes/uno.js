
function mostrar()
{
	var ancho = prompt ("Ingrese el ancho de un rectangulo.");
	var largo = prompt ("Ingrese el largo de un rectangulo.");
	var perimetro;

	ancho = parseInt (ancho);
	largo = parseInt (largo);

	perimetro = (ancho * 2) + (largo * 2);

	alert ("El perimetro del rectangulo es "+perimetro);

}
/*
Bienvenidos. 
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt 
y que muestre el perímetro por alert.
*/
