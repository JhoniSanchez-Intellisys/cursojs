// class Celular {
//   constructor(
//     marca,
//     modelo,
//     color,
//     peso,
//     resolucionPantalla,
//     resolucionCamara,
//     ram
//   ) {
//     (this.marca = marca),
//       (this.color = color),
//       (this.peso = peso),
//       (this.modelo = modelo),
//       (this.resolucionPantalla = resolucionPantalla),
//       (this.resolucionCamara = resolucionCamara),
//       (this.ram = ram),
//       (this.estado = false);
//     this.info = `
//     <b>Marca:</b> ${this.marca},</br>
//     <b>Modelo:</b> ${this.modelo},</br>
//     <b>Color:</b> ${this.color},</br>
//     <b>Peso:</b> ${this.peso},</br>
//     <b>Resolucion de Pantalla:</b> ${this.resolucionPantalla},</br>
//     <b>Rasolucion de Camara:</b> ${this.resolucionCamara},</br>
//     <b>Ram:</b> ${this.ram},</br>
//     <b>Estado:</b> ${this.estado ? "encendido" : "apagado"},</br>
//     </br>
//     </br>
//         `;
//   }
//   encender() {
//     if (this.estado === false) {
//       this.estado = true;
//     } else {
//       this.estado = false;
//     }
//   }
//   reiniciar() {
//     alert("Reiniciando...");
//     if (this.estado === false) {
//       this.estado = true;
//     }
//   }
//   tomarFoto() {
//     alert("Tomar foto...");
//   }
//   grabar() {
//     alert(`${this.marca+this.modelo} Grabando...`);
//   }
//   mostrar() {
//     document.write(this.info);
//   }
// }
// const iphone5 = new Celular("Iphone", "5", "negro", 155, 1080, 100, 16);
// const iphone6 = new Celular("Iphone", "5", "negro", 155, 1080, 100, 16);
// const galaxy21 = new Celular("Galaxy", "21", "negro", 155, 1080, 100, 16);

// iphone5.mostrar();
// iphone6.mostrar();
// galaxy21.mostrar();
// galaxy21.grabar();
// iphone6.grabar();

//
//
//
//
//
//
//
//
////
//
//
//
//
//
//
//
////
//
//
//
//
//
//
//
////
//
//
//
//
//
//
//
//

// ////////////////Ejercicio 2
// //grabarCamaraSuperLenta
// // reconocimeintoFacial
// // camaraExtra

// class Celular {
//   constructor(
//     marca,
//     modelo,
//     color,
//     peso,
//     resolucionPantalla,
//     resolucionCamara,
//     ram
//   ) {
//     (this.marca = marca),
//       (this.color = color),
//       (this.peso = peso),
//       (this.modelo = modelo),
//       (this.resolucionPantalla = resolucionPantalla),
//       (this.resolucionCamara = resolucionCamara),
//       (this.ram = ram),
//       (this.estado = false);
//     this.info = `
//     <b>Marca:</b> ${this.marca},</br>
//     <b>Modelo:</b> ${this.modelo},</br>
//     <b>Color:</b> ${this.color},</br>
//     <b>Peso:</b> ${this.peso},</br>
//     <b>Resolucion de Pantalla:</b> ${this.resolucionPantalla},</br>
//     <b>Rasolucion de Camara:</b> ${this.resolucionCamara},</br>
//     <b>Ram:</b> ${this.ram},</br>
//     <b>Estado:</b> ${this.estado ? "encendido" : "apagado"},</br>
//     </br>
//     </br>
//         `;
//   }
//   encender() {
//     if (this.estado === false) {
//       this.estado = true;
//     } else {
//       this.estado = false;
//     }
//   }
//   reiniciar() {
//     alert("Reiniciando...");
//     if (this.estado === false) {
//       this.estado = true;
//     }
//   }
//   tomarFoto() {
//     alert("Tomar foto...");
//   }
//   grabar() {
//     alert(`${this.marca + this.modelo} Grabando...`);
//   }
//   mostrar() {
//     document.write(this.info);
//   }
// }
// // const iphone5 = new Celular("Iphone", "5", "negro", 155, 1080, 100, 16);
// // const iphone6 = new Celular("Iphone", "5", "negro", 155, 1080, 100, 16);
// // const galaxy21 = new Celular("Galaxy", "21", "negro", 155, 1080, 100, 16);

// // iphone5.mostrar();
// // iphone6.mostrar();
// // galaxy21.mostrar();
// // galaxy21.grabar();
// // iphone6.grabar();

// class AltaGama extends Celular {
//   constructor(camaraExtra, gama, ...arg) {
//     super(...arg);
//     this.camaraExtra = camaraExtra;
//     this.gama = gama;
//     this.infoAlta =
//       `<b>Camara Extra:</b> ${this.camaraExtra},</br>
//     <b>Gama:</b> ${this.gama},</br>` + this.info;
//   }
//   grabarCamaraSuperLenta() {
//     alert("Grabando en camara super lenta " + this.gama);
//   }
//   reconocimeintoFacial() {
//     alert("Activado Reconocimiento Facial " + this.gama);
//   }
//   mostrar() {
//     document.write(this.infoAlta);
//   }
// }

// const Galaxy21s = new AltaGama(
//   1080,
//   "Gama Alta",
//   "Galaxys",
//   "21",
//   "negro",
//   155,
//   1080,
//   100,
//   16
// );
// const Galaxy23s = new AltaGama(
//   2080,
//   "Gama Alta",
//   "Galaxys",
//   "23",
//   "negro",
//   155,
//   2080,
//   100,
//   16
// );

// Galaxy21s.mostrar();
// Galaxy23s.mostrar();
// Galaxy21s.grabarCamaraSuperLenta();
// Galaxy21s.reconocimeintoFacial();

///
//
///
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//Ejercicio 3

class App {
  constructor(nombre, version, peso) {
    this.nombre = nombre;
    this.version = version;
    this.peso = peso;
    this.descargas = 0;
    this.puntuacion = 0;
    this.instalada = false;
    this.estado = false;
    this.info = `

    Nombre: ${this.nombre}
    Version: ${this.version}
    Peso: ${this.peso}
    descargas: ${this.descargas}
    puntuacion: ${this.puntuacion}
    instalada: ${this.instalada}
    estado: ${this.estado}

   `;

  }
  instalar() {
    console.log("Instalando la aplicacion " + this.nombre + this.version);
    this.descargas += 1;
    
      if (this.estado === false) {
      this.estado = true;
      console.log("Abriendo la aplicacion " + this.nombre + this.version);
    } else if ((this.estado = true)) {
      console.warn(
        "La aplicacion" + this.nombre + this.version + " ya esta abierta"
      );
    }
  
  }
  abrir() {
    if (this.estado === false) {
      this.estado = true;
      console.log("Abriendo la aplicacion " + this.nombre + this.version);
    } else if ((this.estado = true)) {
      console.warn(
        "La aplicacion" + this.nombre + this.version + " ya esta abierta"
      );
    }
  }
  cerrar() {
    if (this.estado === true) {
      this.estado = false;
      console.log("Cerrando la aplicacion " + this.nombre + this.version);
    } else if ((this.estado = false)) {
      console.warn(
        "La aplicacion" + this.nombre + this.version + " ya esta cerrada"
      );
    }
  }
  desinstalar() {
    if (this.estado === true) {
      this.estado = false;
      console.log("Desinstalando la aplicacion " + this.nombre + this.version);
    } else if ((this.estado = false)) {
      console.warn(
        "La aplicacion" +
          this.nombre +
          this.version +
          " no esta instalada, no se puede desinstalar"
      );
    }
  }
}
const WhatsApp = new App("WhatsApp", 1.5, 20);

WhatsApp.instalar()
WhatsApp.instalar()
console.log(WhatsApp.info)