//("alert el precio del producto en efectivo es $ xxx , con tarjeta tiene un recargo del 10 % que seria $xx de recargo, costandole final $xxx)
function mostrar()

{

	var precioInicial ;
	var recargo ; 
	var precioFinal ;


	//esta de mas ....precioFinal = parseInt (precioFinal) ;

	precioInicial = document.getElementById('elNombre').value ;
		precioInicial = parseInt (precioInicial) ;

	recargo = (precioInicial * 10 / 100) ;
	precioFinal = precioInicial - recargo ;
// 
	alert ("El precio del producto en efectivo es $ " +precioInicial+ " con tarjeta tiene un recargo del 10 % que seria " + recargo + " costandole final $ " +precioFinal) ;



}
