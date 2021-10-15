// Data del dia actual
let diaActual = document.getElementById('diaActual');
diaActual.textContent = new Date();
let diaValue = diaActual.innerHTML;


// Boton Guardar todos los datos
let buttonGuardar = document.getElementById('button');
buttonGuardar.addEventListener('click', guardarTodo);

function guardarTodo () {
    let containerComidas = document.getElementsByClassName('input-comidas');
    let horaToma = document.getElementsByClassName("input-hora-toma-leche");
    let mlToma = document.getElementsByClassName("input-ml-toma-leche");
    let dia1 = [];

    // Hora toma de leche
    for (i=0; i<horaToma.length; i++) {
        if (horaToma[i].value) {
            console.log(horaToma[i].id + horaToma[i].value);
            dia1.push({tipologia: horaToma[i].id, hora: horaToma[i].value, toma: horaToma[i].name,  dia: diaValue})
        }
    }

    // Ml toma de leche
    for (i=0; i<mlToma.length; i++) {
        if (mlToma[i].value) {
            console.log(mlToma[i].id + mlToma[i].value);
            dia1.push({tipologia: mlToma[i].id, ml: mlToma[i].value, toma: mlToma[i].name, dia: diaValue})
        }
    }

    // Comidas
    for (i=0; i<containerComidas.length; i++) {
        if (containerComidas[i].checked) {
            console.log(containerComidas[i].name + containerComidas[i].value);
            dia1.push({portada: containerComidas[i].name, cantidad: containerComidas[i].value, dia: diaValue})
        }
    }
    localStorage.setItem('dia1', JSON.stringify(dia1));
}

// 1 Datos del JSON
// 2 boton
// 3 si clicco boton aparecen los datos


// Traigo los datos del JSON

// console.log('Parseado' + fichaNino[0].cantidad);




$('#buttonFicha').on('click', () => {
    const fichaNino = JSON.parse(localStorage.getItem('dia1'));

    for (const datos of fichaNino) {
        $('body').append(`
        <div class="pop-up-ficha">
        <h4>${datos.toma}</h4>
        <h4>${datos.hora}</h4>
        <h4>${datos.ml}</h4>
        <h4>${datos.portada}</h4>
        <h4>${datos.cantidad}</h4>
        </div>`);
    }
});