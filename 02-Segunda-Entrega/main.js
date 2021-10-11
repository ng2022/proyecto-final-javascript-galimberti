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