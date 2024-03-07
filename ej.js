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

const aa = () => {

  let i = 0;
  let a = [1, 3, 4, 6, 7, 8, 99];
  while (i < 100) {
    i++;
    if (i === 1 || i === 99|| i === 98 ) {
      continue;
    }
    console.log(i);
  }
};

aa();
