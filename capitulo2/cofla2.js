// let primera2am = 0;

// const fiesta = (b) => {
//   const edad = prompt("Cual es tu edad");
//   if (edad < 18) {
//     return alert("Tu edad es " + edad + " No talcansas los " + 18);
//   }

//   if (b > 1 && b < 7 && primera2am === 0) {
//     primera2am = 1;
//     return alert(
//       "Felicidades eres la primera persona en entrar despues 2 tu pago es gratis"
//     );
//   }

//   return alert("Bienvenido tu pago es 100");
// };

// fiesta(1);
// fiesta(1);
// fiesta(2);
// fiesta(2);
// fiesta(2);

// let cantidad = prompt("¿Cantidad de Alumnos?");
// let total = [];

// for (let i = 0; i < cantidad; i++) {
// 	let alumnoN = prompt("Nombre del alumno " + (i+1))
// 	total[i] = [alumnoN, 0];
// }

// const Asistencia = (nombre,p) => {
// 	let presencia = prompt(nombre);
// 	if (presencia == "p" || presencia == "P") {
// 	    total[p][1]++;
// 	}
// }

// for (i = 0; i < 2; i++) {
// 	for (alumno in total) {
// 	Asistencia(total[alumno][0],alumno);
// 	}
// }

// for (alumno in total) {
// 	let resultado = `${total[alumno][0]}:<br>
//     ________Presentes: <b>${total[alumno][1]}</b> <br>
//     ________Ausencias: <b>${30 - total[alumno][1]} </b>`;
// 	if (30 - total[alumno][1] > 18) {
// 	resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
// 	} else {
// 	resultado+= "<br><br>"
// 	}
// 	document.write(resultado)
// }





// const suma = (a, b) => {
//   alert(a + b);
// };

// const resta = (a, b) => {
//   alert(a - b);
// };

// const multiplicacion = (a, b) => {
//   alert(a * b);
// };

// const division = (a, b) => {
//   if (a == 0 || b == 0) {
// 	alert("Uno de los operandos es Cero")
//     return 0;
//   }
//   alert(a / b);
// };

// const pregunta = alert("Escriba el numero de la operacion a realizar");
// const res = prompt("1 suma, 2 resta, 3 multiplicaion, 4 division");

// if (res == 1) {
//   const a = prompt("Primer numero");
//   const b = prompt("Segundo numero");
//   suma(parseInt(a), parseInt(b));
// } else if (res == 2) {
//   const a = prompt("Primer numero");
//   const b = prompt("Segundo numero");
//   resta(parseInt(a), parseInt(b));
// } else if (res == 3) {
//   const a = prompt("Primer numero");
//   const b = prompt("Segundo numero");
//   multiplicacion(parseInt(a), parseInt(b));
// } else if (res == 4) {
//   const a = prompt("Primer numero");
//   const b = prompt("Segundo numero");
//   division(parseInt(a), parseInt(b));
// }
