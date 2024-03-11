// console.log(123);
// document.write("<p>Texto</p>")

// const recursiva = (o) => {
//   console.log(o);
//   if (o < 10) {
//     o++
//     recursiva(o);
//   }
// };

// recursiva(1);

// let numero = 0;

// const aa = () => {
//   while (numero < 100) {
//     numero++;
//     console.log(numero);
//     if (numero == 10) {
//       return;
//     }
//     console.log("Bucle Finalizado.");
//   }
//   console.log("Funcion Finalizada");
// };

// aa()

// const aa = () => {

//   let i = 0;
//   let a = [1, 3, 4, 6, 7, 8, 99];
//   while (i < 100) {
//     i++;
//     if (i === 1 || i === 99|| i === 98 ) {
//       continue;
//     }
//     console.log(i);
//   }
// };

// aa();

// const aa = () => {
//   let i = 0;

//   while (i < 100) {
//     i++;
//     if (i == 6) {
//       return;
//     }
//     console.log(i);
//   }
//    console.log("Finalizado");
// };

// aa();

// const aa = ["casa", "perro", "cama", "calle", "botella", "vino"];
// const bb = [...aa, "perro", "cama", "calle", "botella", "vino"];
// for (ff in aa) {
//   console.log(ff);
// }

// for (ff of bb) {
//   console.log(ff);
// }

// const aa = [11, 55, 88, 445, 475, 96658, 524, 54, 658, 254, 69, 5];
// let i = 0;

// otro: while (i < aa.length) {
//   console.log("Otro", aa[i]);
//   i++;
//   while (i < aa.length) {
//     i++;
//     console.log(aa[i]);
//     if (aa[i] == 475) continue otro;
//   }
// }

const iterable = (...params) => {
  for (const aa of params) {
    console.log(aa * 2);
  }
};

iterable(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
