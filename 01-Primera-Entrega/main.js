


// La escuela ingresa los datos del niño

class nino {
    constructor(nombre, apellidos, edad, clase, seccion, padre, madre, id) {
        this.nombre = nombre = prompt('Nombre nino');
        this.apellidos = apellidos = prompt('Apellidos nino');
        this.edad = edad = Number(prompt('Edad'));
        this.clase = clase = Number(prompt('Clase'));
        this.seccion = seccion = prompt('Seccion de la clase');
        this.padre = padre = prompt('Nombre Padre');
        this.madre = madre = prompt('Nombre Madre');
        this.id = id = prompt('Id');}
    }

    const nino1 = new nino();

    console.log(nino1);