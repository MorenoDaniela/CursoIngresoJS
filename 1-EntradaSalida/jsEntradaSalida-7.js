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

	
	alert ("La division es:" +dividir) ;
	
}

