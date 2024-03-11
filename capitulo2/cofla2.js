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




let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
	alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
	let presencia = prompt(nombre);
	if (presencia == "p" || presencia == "P") {
	    alumnosTotales[p][1]++;
	}
}