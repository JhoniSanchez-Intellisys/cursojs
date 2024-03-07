// const menu = {
//     "palito de helado de agua": 0.6,
//     "palito de helado de crema": 1,
//     "Bombom helado marca heladix": 1.6,
//     "bombom helado marca heladovich": 1.7,
//     "bombom helado marca helardo": 1.8,
//     "potecito de helado con confetis o pote de 1./4": 2.9,
//     "Limite": 1000000
// }

// const arra = Object.entries(menu)

// const aa = (dd) => {
//     let cofra = prompt("Ingresar monto disponible para comprar")
//     let monto = parseFloat(cofra)
//     for (let i = 0; i < arra.length; i++) {
//         if (monto >= arra[i][1] && monto < arra[i + 1][1]) {
//             alert(`${dd} Para el monto ${monto.toFixed(2)}, el eleado mas caro a comprar es ${arra[i][0]}, por el precio de ${arra[i][1]},  devuleta es ${parseFloat(monto - arra[i][1]).toFixed(2)}`)
//             return
//         }
//     }
//     alert(`Para el monto ${monto}, no hay elados disponibles`)
// }

// aa("Cliente:_____,")

const a = prompt("Ingresar monto a regalar para compra de al menos 3 boletos");
const b = 100;
const c = 3;

const compraboleto = (disponible, boleto, limite) => {
  if (disponible / boleto >= limite + 1) {
    let devuelta = disponible - 3 * boleto;
    console.log("caso2", 3, devuelta);
    alert("La cantidad de boletos a comprar es: " +3+ "y la devuelta es: " + devuelta)
  } else if (disponible / boleto >= 1) {
    let cantidadboleto = Math.floor(disponible / boleto);
    let devuelta = disponible - boleto * cantidadboleto;
    alert("La cantidad de boletos a comprar es: " +cantidadboleto+ "y la devuelta es: " + devuelta)
    console.log("caso1", cantidadboleto, devuelta);
  } else {
    alert(
      "el monto: " + disponible + " es insuficiente para comprar",
      "el precio de un boleto es: " + boleto
    );
  }
};

compraboleto(a, b, c);
