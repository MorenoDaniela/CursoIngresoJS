//al realizar una compra, si compra de mas de dos productos realiza un descuento del 10% y si supera los $2000 se agrega un descuento adicional del 15 %, si el pago es con tarjeta y no efectivo al precio final se le agrega un 10 % de recargo
function mostrar()
{

 /* var compra ;
var cantidadProductos ;
var pagoEfectivoTarjeta ;

compra = prompt ("Por favor ingrese el monto de su compra") ;
cantidadProductos = prompt ("Por favor ingrese la cantidad de productos comprados") ;
pagoEfectivoTarjeta = prompt ("Si realiza su compra con efectivo ponga el numero 1, si es con tarjeta ingrese el numero 2") ;

// un solo alert en todo el codigo//
//parsear
 compra = parseInt (compra) ;
 cantidadProductos = parseInt (cantidadProductos) ;
 pagoEfectivoTarjeta = parseInt (pagoEfectivoTarjeta) ;


	if (cantidadProductos > 2)
	{
		
		if (compra > 2000)
		{
			compra = compra * 0.75 ;
		}
		else
		{
			compra =  compra * 0.9 ;
		}
	}
	if (pagoEfectivoTarjeta == 2)
		{
			compra = compra * 1.1 ;
			// compra = compra * 1,1 ; numero con coma no va
		}

		alert ("Precio final" +compra) ;
*/

var numeroUno = prompt ("Ingrese el importe") ;
var numeroDos = prompt ("Ingrese el importe") ;
var numeroTres = prompt ("Ingrese el importe") ;
var numeroCuatro = prompt ("Ingrese el importe") ;
var suma ;
var descuento ;
//var mensaje ;

 numeroUno = parseInt (numeroUno) ;
 numeroDos = parseInt (numeroDos) ;
 numeroTres = parseInt (numeroTres) ;
 numeroCuatro = parseInt (numeroCuatro) ;
//descuento = parseInt (descuento) ;

 suma = numeroUno + numeroDos + numeroTres + numeroCuatro ;

if (suma > 100)
{
	descuento = suma * 0.9 ;
	alert ("Precio final es " +descuento) ;

	else 
		{
			if (suma < 50 && suma < 100)
			{
			descuento = suma * 0.95 ;
			alert ("Precio final es" +descuento) ;

				else
				{
					descuento = suma * 1.15 ;
					alert ("Precio final es" +descuento) ;
				}
			}

		}
}

	
	






}