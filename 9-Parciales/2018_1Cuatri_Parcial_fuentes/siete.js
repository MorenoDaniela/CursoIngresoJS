function mostrar()
{	
	var nota;
	var sexo;
	var contador=0;
	var acumuladorNotas=0;
	var promedio=0;
	var contadorVarones=0;
	var notaMin=11
	var sexoMin;

	while (contador<5)
	{
		contador++;
		nota = prompt ("Ingrese la nota, entre 0 y 10.");
		nota = parseInt (nota);

		while (isNaN(nota) || nota<0 || nota>10)
		{
			nota = prompt ("ERROR, ingrese nota válida entre 0 y 10.");
			nota = parseInt (nota);
		}

		sexo = prompt ("Ingrese f para sexo femenimo o m para sexo masculino.");

		while (sexo!="f" && sexo!="m")
		{
			sexo = prompt ("ERROR, ingrese sexo válido, f o m.");
		}

		if (nota>0)
		{
			acumuladorNotas = acumuladorNotas + nota;
		}

		if (nota>=6 && sexo=="m")
		{
			contadorVarones++;
		}

		if (nota<notaMin)
		{
			notaMin=nota;
			sexoMin=sexo;
		}
	}

	promedio = acumuladorNotas / contador;

	alert ("El promedio de las notas totales es "+promedio);
	alert ("La nota más baja es "+notaMin+ " y el sexo de esa persona es "+sexoMin);
	alert ("La cantidad de varones que su nota haya sido mayor o igual a 6 es "+contadorVarones);
}
/*
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
 el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/