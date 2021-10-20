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


// Boton Visualizar los datos
// $('#buttonFicha').on('click', () => {
//     const fichaToma = JSON.parse(localStorage.getItem('dia1-Toma'));
//     const fichaPortadas = JSON.parse(localStorage.getItem('dia1-Portadas'));

//     for (const datos of fichaToma) {
//         $('body').append(`
//         <div class="pop-up-ficha">
//         <h4>${datos.toma}</h4>
//         <h4>${datos.hora}</h4>
//         <h4>${datos.ml}</h4>
//         </div>`);
//     }

//     for (const datos of fichaPortadas) {
//         $('body').append(`
//         <div class="pop-up-ficha">
//         <h4>${datos.portada}</h4>
//         <h4>${datos.cantidad}</h4>
//         </div>`);
//     }
// });







// // Modal
// let modal = document.getElementById("modalFichaNino");

// // Click en el boton
// $('#buttonFicha').on('click', () => {
//     modal.style.display = "block";
//     const fichaToma = JSON.parse(localStorage.getItem('dia1-Toma'));
//     const fichaPortadas = JSON.parse(localStorage.getItem('dia1-Portadas'));

//     $('modal').show();

//     for (const datos of fichaToma) {
//         $('.modal-content').append(`
//         <h4>Toma: ${datos.toma}</h4>
//         <h4>Hora: ${datos.hora}</h4>
//         <h4>Ml: ${datos.ml}</h4>`);
//     }

//     for (const datos of fichaPortadas) {
//         $('.modal-content').append(`
//         <h4>${datos.portada}</h4>
//         <h4>${datos.cantidad}</h4>`);
//     }
// });

// // Cerrar Modal
// let span = document.getElementsByClassName("close")[0];

// // Click en cerrar X
// $('#cierra-modal').on('click', () =>{
//     modal.style.display = "none";
// });

// // Click fuera del modal
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }




// Modal

// Click en el boton
$('#buttonFicha').on('click', () => {
    $('body').append(`
    <div class="modal">
    <div class="modal-content">
    <span id="cierra-modal" class="close">&times;</span>
    </div>
    </div>`);
    $('.modal').fadeIn('slow');
    // Click en cerrar X
$('#cierra-modal').on('click', () =>{
    $('.modal').fadeOut('slow');
});
    const fichaToma = JSON.parse(localStorage.getItem('dia1-Toma'));
    const fichaPortadas = JSON.parse(localStorage.getItem('dia1-Portadas'));

    for (const datos of fichaToma) {
        $('.modal-content').append(`
        <h4>Toma: ${datos.toma}</h4>
        <h4>Hora: ${datos.hora}</h4>
        <h4>Ml: ${datos.ml}</h4>`);
    }

    for (const datos of fichaPortadas) {
        $('.modal-content').append(`
        <h4>${datos.portada}</h4>
        <h4>${datos.cantidad}</h4>`);
    }
});




// // Click fuera del modal
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }