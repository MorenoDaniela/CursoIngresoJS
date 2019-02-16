/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparas ;
 	var variedad ;
 	var precio ;
 	var precioFinal ;
 	var precioconIIBB ;

 	lamparas = document.getElementById('Cantidad').value ;
 	variedad = document.getElementById('Marca').value ;

 	lamparas = parseInt (lamparas) ;
 	precio = parseInt (precio) ;

 	precio = lamparas * 35 ;

 	if (lamparas >= 6)
 	{
 		precioFinal = precio * 0.5 ;
 	}
 		else 
 		{

 	
 			if (lamparas == 5)
 			{
 				if (variedad == "ArgentinaLuz")
 				{ 
 					precioFinal = precio * 0.6 ;
 				}
 				else 
 				{
 					precioFinal = precio * 0.7 ;
 				}

 			}
 			if (lamparas == 4)
 			{
 				if (variedad == "ArgentinaLuz"  || variedad == "FelipeLamparas")
 				{ 
 					precioFinal = precio * 0.75 ;
 				}
 				else 
 				{
 					precioFinal = precio * 0.8 ;
 				}
 			}
 			if (lamparas == 3)
 			{
 				if (variedad == "ArgentinaLuz")
 				{
 					precioFinal = precio * 0.85 ;
 				}
 				else 
 				{	
 					if (variedad == "FelipeLamparas")
 					{
 						precioFinal = precio * 0.9 ;
 					}
 					else 
 					{ 
 						precioFinal = precio * 0.95 ;
 					}
 				}
 			}
 		}
 	if (precioFinal <= 120)
 	{
 		precioconIIBB = precioFinal * 1.1 ;

 		//alert ("IIBB Usted pago " +precioconIIBB+ " siendo " +precioFinal+ " el impuesto que se pago.") ;
 	}


 	document.getElementById('precioDescuento').value = precioFinal ;

}
