const menu =  {
    "palito de helado de agua": 0.6, 
    "palito de helado de crema": 1,
    "Bombom helado marca heladix": 1.6,
    "bombom helado marca heladovich": 1.7, 
    "bombom helado marca helardo": 1.8, 
    "potecito de helado con confetis": 2.9,
    "pote de 1./4": 2.9
}

const arra = Object.entries(menu)
console.log(arra)

const aa = (dd) => {
    let cofra = prompt("Monto condecimales")
    let monto = parseFloat(cofra)
    console.log(monto)

    for (let i = 0; i < arra.length+1; i++) {
        console.log(monto >= arra[i][1] && monto < arra[i+1][1])
        if (monto >= arra[i][1] && monto < arra[i+1][1]) {
           console.log(monto > arra[i][1], monto, arra[i][1]) 
            alert(`${dd} Monto es ${monto.toFixed(2)} ,precio es ${arra[i][1]},  devuleta es ${parseFloat(monto - arra[i][1]).toFixed(2)}`)
            return
        }
    }
    alert(`Monto es ${monto}, precio maximo es 7,  no hay capacidad de pago`)

}

aa("Jhoni")
2