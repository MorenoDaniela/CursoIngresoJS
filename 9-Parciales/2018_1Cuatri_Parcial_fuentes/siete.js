function mostrar()
{	

	var numero = prompt ("Ingrese nota entre 0 y 10.") ;
	var sexo = prompt ("Ingrese f ó m .") ;
	var contador=0 ;
	var promedio ;

	numero = parseInt (numero) ;

while (contador < 5)
	{
		numero = prompt ("Ingrese nota entre 0 y 10.") ;
		if (numero >10)
		{
			numero = prompt ("Ingrese una nota entre 0 y 10.")
		}
		sexo = prompt ("ingrese f ó m .") ;
		if (sexo != "f" && sexo != "m")
		{
			sexo = prompt ("Ingrese f ó m.")
		}
		contador++;
		acumulador+=numero;
	}

}
