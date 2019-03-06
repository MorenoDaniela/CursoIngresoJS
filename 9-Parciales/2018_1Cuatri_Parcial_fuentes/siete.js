function mostrar()
{	
	var nota;
	var sexo;
	var contador = 0;
	var promedio;
	var acumulador= 0;
	var notaBaja;
	var sexoBaja;
	var contadorVarones = 0;

	while (contador<5)
	{
		contador++;
		nota = prompt ("Ingrese una nota entre 0 y 10.");
		nota = parseInt (nota);

		while (nota>10 || nota<0)
		{
			nota = prompt ("ERROR, ingrese una nota válida entre 0 y 10.");
			nota = parseInt (nota);

		}

		sexo = prompt ("Ingrese el sexo, f o m.");

		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt ("ERROR, ingrese sexo válido, f o m.");
		}

		if (contador==1)
		{
			notaBaja=nota;
			sexoBaja=sexo;
		}
			else
			{
				if (nota<notaBaja)
				{
					notaBaja=nota;
					sexoBaja=sexo;
				}
			}
		

		if (nota>=6 && sexo == "m")
		{
			contadorVarones++;
		}

		acumulador = acumulador + nota;

	}

		

	promedio = acumulador / contador;

	alert ("El promedio de las notas totales es:"+promedio);
	alert ("La nota mas baja es " +notaBaja+ " y el sexo de esa persona es "+sexoBaja);
	alert ("La cantidad de varones que su nota haya sido mayor o igual a 6 es: "+contadorVarones);
}
/*
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
 el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/