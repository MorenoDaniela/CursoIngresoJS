function mostrar()
{
	var nota;
	var sexo;
	var contador = 0;
	var promedio=0;
	var notaBaja;
	var sexoBaja;
	var contadorVarones=0;

	while (contador<5)
	{	
		contador++;
		nota = prompt ("Ingrese nota del alumno, entre 0 y 10");
		nota = parseInt (nota);

		while (isNaN(nota) || nota >10 || nota <0 )
		{
			nota = prompt ("ERROR, Ingrese nota del alumno, entre 0 y 10");
			nota = parseInt (nota);
		}

		sexo = prompt ("Ingrese sexo del alumno, f o m.");

		while (sexo !="f" && sexo !="m")
		{
			sexo = prompt ("ERROR, sexo no válido, ingrese f o m");
		}

			if (contador==1)
			{
				notaBaja=nota;
				sexoBaja=sexo;
			}
				else
					if (nota<notaBaja)
					{
						notaBaja=nota;
						sexoBaja=sexo;
					}

			if (nota<10)
			{
				notaBaja = nota;
				sexoBaja = sexo;
			}

			if (sexo == "m" && nota>=6)
			{
				contadorVarones++;
			}

			promedio = promedio + nota;
	}



	promedio = promedio / contador;

	alert ("El promedio de las notas totales es "+promedio);
	alert ("La nota más baja es "+notaBaja+ " y el sexo de esa persona es "+sexoBaja);
	alert ("La cantidad de varones que su nota haya sido mayor o igual a 6 es "+contadorVarones);
}
/*
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/