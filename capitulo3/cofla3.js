class Celular {
  constructor(
    marca,
    modelo,
    color,
    peso,
    resolucionPantalla,
    resolucionCamara,
    ram
  ) {
    (this.marca = marca),
      (this.color = color),
      (this.peso = peso),
      (this.modelo = modelo),
      (this.resolucionPantalla = resolucionPantalla),
      (this.resolucionCamara = resolucionCamara),
      (this.ram = ram),
      (this.estado = false);
    this.info = `
    <b>Marca:</b> ${this.marca},</br>
    <b>Modelo:</b> ${this.modelo},</br>
    <b>Color:</b> ${this.color},</br>
    <b>Peso:</b> ${this.peso},</br>
    <b>Resolucion de Pantalla:</b> ${this.resolucionPantalla},</br>
    <b>Rasolucion de Camara:</b> ${this.resolucionCamara},</br>
    <b>Ram:</b> ${this.ram},</br>
    <b>Estado:</b> ${this.estado ? "encendido" : "apagado"},</br>     
    </br>
    </br>
        `;
  }
  encender() {
    if (this.estado === false) {
      this.estado = true;
    } else {
      this.estado = false;
    }
  }
  reiniciar() {
    alert("Reiniciando...");
    if (this.estado === false) {
      this.estado = true;
    }
  }
  tomarFoto() {
    alert("Tomar foto...");
  }
  grabar() {
    alert(`${this.marca+this.modelo} Grabando...`);
  }
  mostrar() {
    document.write(this.info);
  }
}
const iphone5 = new Celular("Iphone", "5", "negro", 155, 1080, 100, 16);
const iphone6 = new Celular("Iphone", "5", "negro", 155, 1080, 100, 16);
const galaxy21 = new Celular("Galaxy", "21", "negro", 155, 1080, 100, 16);

iphone5.mostrar();
iphone6.mostrar();
galaxy21.mostrar();
galaxy21.grabar();
iphone6.grabar();

