// Data del dia actual
let diaActual = new Date();
let horarioToma = diaActual.getUTCHours() + ':' + diaActual.getUTCMinutes();


// Boton Guardar todos los datos
let buttonGuardar = document.getElementById('button');
let clickTomas = buttonGuardar.addEventListener('click', guardarToma);
let clickPortadas = buttonGuardar.addEventListener('click', guardarPortadas);
let guardarTodo = clickTomas + clickPortadas;


// Guardar Tomas de leche
function guardarToma () {
    let mlToma = document.getElementsByClassName("input-ml-toma-leche");
    let dia1Toma = [];

    // Ml toma de leche
    for (i=0; i<mlToma.length; i++) {
        if (mlToma[i].value) {
            console.log(mlToma[i].id + mlToma[i].value);
            dia1Toma.push({ml: mlToma[i].value, toma: mlToma[i].name, dia: diaActual.getDate(), hora: horarioToma})
        }
    }

    localStorage.setItem('dia1-Toma', JSON.stringify(dia1Toma));
}

// Guardar Portadas
function guardarPortadas () {
    let containerComidas = document.getElementsByClassName('input-comidas');
    let dia1Portadas = [];

    // Comidas
    for (i=0; i<containerComidas.length; i++) {
        if (containerComidas[i].checked) {
            console.log(containerComidas[i].name + containerComidas[i].value);
            dia1Portadas.push({portada: containerComidas[i].name, cantidad: containerComidas[i].value, dia: diaActual})
        }
    }
    localStorage.setItem('dia1-Portadas', JSON.stringify(dia1Portadas));
}



// Modal Visualizar Ficha Niño

// Click en el boton
$('#buttonFicha').on('click', () => {
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
    $('.boton-cierre-modal').on('click', () =>{
    $('.modal').fadeOut('slow');
});

    // Ficha de datos
    const fichaToma = JSON.parse(localStorage.getItem('dia1-Toma'));
    const fichaPortadas = JSON.parse(localStorage.getItem('dia1-Portadas'));

    for (const datos of fichaToma) {
        $('.div-toma').append(`
        <h3 class="titulo-toma-ficha">${datos.toma}</h3>
        <h4>Hora: ${datos.hora}</h4>
        <h4>Ml: ${datos.ml}</h4>`);
    }

    for (const datos of fichaPortadas) {
        $('.div-portadas').append(`
        <h3>${datos.portada}</h3>
        <h4>${datos.cantidad}</h4>`);
    }
});


// Enviar datos al servidor con AJAX
const URLPOST = 'https://jsonplaceholder.typicode.com/users';
const infoPost = {nombre:'Gabriel', apellidos:'Batistuta'};
$('#button').click(() => {
    $.post(URLPOST, infoPost, (respuesta, estado) => {
        if(estado == 'success') {
            $('.confirmacion-datos-guardados').prepend(
                $(`<h4 class="mensaje-datos-guardados">Datos guardados para ${respuesta.nombre}</h4>`).delay(1000).fadeOut(1500)
            );
        }
    });
});

