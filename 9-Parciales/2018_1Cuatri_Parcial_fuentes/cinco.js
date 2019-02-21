function mostrar()
{
	/*
var planeta = prompt ("Ingrese el nombre del planeta.") ;
mensaje = "" ;

switch (planeta)
{
	case "tierra" :
	mensaje = "Acá vivimos." ;
	break ;
	case "mercurio" :
	case "venus" :
	mensaje = "Acá hace más calor" ;
	break ;
	case "marte" :
	case "jupiter" :
	case "saturno" :
	case "urano" :
	case "neptuno" :
	case "pluton" :
	mensaje = "Acá hace más frio" ;
	break ;
	default :
	mensaje = "No es un planeta válido." ;
	break ;
}
 alert (mensaje) ;
 */

//cada hab de un hotel tiene un precio, hay promociones segun el tìpo
// de pago, si es con tarjeta visa un 10 % , si es por paypal un 15 %
//por mercado pago un 10 %,
//efectivo 20 %
//cualquier otro medio solo un 5 %,
//si compraste el paquete "todoincluido" y pagas con paypal se te suma un 10 % al descuento
//si pagas en efectivo, tenes varias opciones, el paquete "solodesayunos" te suma un 10 % al descuento
//si el paquete es todo incluido te suma un 15% y para el resto de los paquete no tiene descuento adicional.

var precio = prompt ("Ingrese el monto de la habitaciòn.") ;
var pago = prompt ("Ingrese el tipo de pago :visa, paypal, mercadopago, efectivo y otro para cualquier otro medio de pago.") ;
var paquete = prompt ("Ingrese el paquete comprado: todoincluido o solodesayunos.") ;
var mensaje ;
var total ;

precio = parseInt (precio) ;


switch (pago)
{
	case "visa" :
	total = precio * 0.90 ;
	mensaje = "Usted pago " +total ;
	break;
	case "mercadopago " :
	total = precio * 0.90 ;
	mensaje = "Usted pago " +total ;
	case "paypal" :
	total = precio * 0.85 ;
		switch (paquete)

		{
		case "todoincluido" :
		total = precio * 0.75 ;
		break;
		}
	mensaje = "Usted pago " +total ;
	break;
	case "efectivo" :
	total = precio * 0.80 ;
		switch (paquete)
		{
		case "solodesayunos" :
		total = precio * 0.70 ;
		case "todoincluido" :
		total = precio * 0.65 ;
		}
	mensaje = "Usted pago " +total ;
	break;
	case "otro" :
	total = precio * 0.95 ;
	mensaje = "Usted pago " +total ;
	break ;
}
alert (mensaje) ;




}
