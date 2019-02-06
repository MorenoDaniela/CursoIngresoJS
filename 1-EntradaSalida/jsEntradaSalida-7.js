/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var primerNumero ;
	var segundoNumero ;
	var suma ;

	primerNumero = numeroUno.value
	segundoNumero = numeroDos.value

	primerNumero = parseInt(primerNumero) ;
	segundoNumero = parseInt(segundoNumero) ;
	suma = primerNumero + segundoNumero ;

	alert (primerNumero + segundoNumero) ;
	alert ("La suma es:" +suma) ;
	
}

function restar()
{
	var primerNumero ;
	var segundoNumero ;
	var resta ;

	primerNumero = numeroUno.value
	segundoNumero = numeroDos.value

	primerNumero = parseInt(primerNumero) ;
	segundoNumero = parseInt(segundoNumero) ;
	resta = primerNumero - segundoNumero ;

	/*para concatenar se utiliza + en todas las funciones y no el simbolo de la funcion en si*/
	/*se quita esta linea 
	alert (primerNumero - segundoNumero) ;
	no es necesaria en esta operaciòn*/

	alert ("La resta es:" +resta) ;
	
}

function multiplicar()
{ 
	var primerNumero ;
	var segundoNumero ;
	var multiplicar ;

	primerNumero = numeroUno.value
	segundoNumero = numeroDos.value

	primerNumero = parseInt(primerNumero) ;
	segundoNumero = parseInt(segundoNumero) ;
	multiplicar = primerNumero * segundoNumero ;

	/*para concatenar se utiliza + en todas las funciones y no el simbolo de la funcion en si*/
	/*se quita esta linea 
	alert (primerNumero * segundoNumero) ;
	no es necesaria en esta operaciòn*/

	alert ("La multiplicacion es:" +multiplicar) ;
	
}

function dividir()
{
	var primerNumero ;
	var segundoNumero ;
	var dividir ;

	primerNumero = numeroUno.value
	segundoNumero = numeroDos.value

	primerNumero = parseInt(primerNumero) ;
	segundoNumero = parseInt(segundoNumero) ;
	dividir = primerNumero / segundoNumero ;

	/*para concatenar se utiliza + en todas las funciones y no el simbolo de la funcion en si*/
	/*se quita esta linea 
	alert (primerNumero / segundoNumero) ;
	no es necesaria en esta operaciòn*/

	alert ("La division es:" +dividir) ;
	
}

