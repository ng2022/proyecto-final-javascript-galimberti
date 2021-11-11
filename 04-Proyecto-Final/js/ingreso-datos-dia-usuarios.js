// Data del dia actual
let diaActual = new Date();
let horarioToma = diaActual.getUTCHours() + ':' + diaActual.getUTCMinutes();


// Boton Guardar todos los datos
let buttonGuardarTomas = document.getElementById('buttonTomasFicha');
buttonGuardarTomas.addEventListener('click', guardarToma);

let buttonGuardar = document.getElementById('button');
buttonGuardar.addEventListener('click', guardarPortadas);


// Guardar Tomas de leche
function guardarToma () {
    alumnosHome = JSON.parse(localStorage.getItem('Usuarios'));
    let nino = document.getElementById('idHome').textContent;
    let ninoficha = alumnosHome.find(x => x.id == nino);

    let mlToma = document.getElementsByClassName("input-ml-toma-leche");

    // Ml toma de leche
    ninoficha.tomas = [];
    for (i=0; i<mlToma.length; i++) {
        if (mlToma[i].value) {
            console.log(mlToma[i].id + mlToma[i].value);
            ninoficha.tomas.push({ml: mlToma[i].value, toma: mlToma[i].name, dia: diaActual.getDate(), hora: horarioToma});
        }
    }
    localStorage.setItem('Usuarios', JSON.stringify(alumnosHome));
    alert('Datos Tomas Guardados Correctamente');
}

// Guardar Portadas
function guardarPortadas () {
    alumnosHome = JSON.parse(localStorage.getItem('Usuarios'));
    let nino = document.getElementById('idHome').textContent;
    let ninoficha = alumnosHome.find(x => x.id == nino);

    let containerComidas = document.getElementsByClassName('input-comidas');


    // Comidas
    ninoficha.comidas = [];
    for (i=0; i<containerComidas.length; i++) {
        if (containerComidas[i].checked) {
            console.log(containerComidas[i].name + containerComidas[i].value);
            ninoficha.comidas.push({portada: containerComidas[i].name, cantidad: containerComidas[i].value, dia: diaActual})
        }
    }
    localStorage.setItem('Usuarios', JSON.stringify(alumnosHome));
    alert('Datos Comidas Guardados Correctamente');
}



// Modal Visualizar Ficha Niño
// Click en el boton
$('#buttonFicha').on('click', () => {
    alumnosHome = JSON.parse(localStorage.getItem('Usuarios'));
    let nino = document.getElementById('idHome').textContent;
    let ninoficha = alumnosHome.find(x => x.id == nino);
    console.log(ninoficha);
        $('body').append(`
        <div class="modal">
        <div class="modal-content">
        <h2>Resumen ficha:</h2>
        <div class="div-toma"></div>
        <div class="div-portadas"></div>
        <button class="boton-cierre-modal">Cerrar</button>
        </div>
        </div>`);
        // Efecto Modal
        $('.modal').fadeIn('slow');
        // Cierre Modal
        $('.boton-cierre-modal').on('click', () => {
        $('.modal').fadeOut('slow');
    })
    agregarDatos();

});

    // Ficha de datos
    function agregarDatos () {

    alumnosHome = JSON.parse(localStorage.getItem('Usuarios'));
    let nino = document.getElementById('idHome').textContent;
    let ninoficha = alumnosHome.find(x => x.id == nino);
    console.log(ninoficha);

    if (ninoficha.tomas.length && !ninoficha.comidas.length) {
        for (const datos of ninoficha.tomas) {
            $('.div-toma').append(`
            <h3 class="titulo-toma-ficha">${datos.toma}</h3>
            <h4>Hora: ${datos.hora}</h4>
            <h4>Ml: ${datos.ml}</h4>`);
        }
        
        $('.div-portadas').append(`
        <h3>Comida: no hay datos guardados</h3>`);
    } else if (!ninoficha.tomas.length && ninoficha.comidas.length) {
        for (const datos of ninoficha.comidas) {
            $('.div-portadas').append(`
            <h3>${datos.portada}</h3>
            <h4>${datos.cantidad}</h4>`);
        }
        $('.div-portadas').append(`
        <h3>Tomas: no hay datos guardados</h3>`);
    } 
    else if (ninoficha.tomas.length && ninoficha.comidas.length){
        for (const datos of ninoficha.tomas) {
            $('.div-toma').append(`
            <h3 class="titulo-toma-ficha">${datos.toma}</h3>
            <h4>Hora: ${datos.hora}</h4>
            <h4>Ml: ${datos.ml}</h4>`);
        }
        for (const datos of ninoficha.comidas) {
            $('.div-portadas').append(`
            <h3>${datos.portada}</h3>
            <h4>${datos.cantidad}</h4>`);
        }
    }
    else {
        $('.div-portadas').append(`
        <h3>No hay ningun dato guardado</h3>`);
    };

};


// Cerrar Perfil Alumnno
$('.button-cerrar-perfil').on('click', () =>{
    location.reload();
    });