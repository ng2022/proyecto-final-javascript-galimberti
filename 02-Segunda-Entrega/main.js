// let datosDiaNino = document.getElementById('datosAlmuerzo');
// datosDiaNino.addEventListener('submit', validarDatos);

// function validarDatos(e) {
//     e.preventDefault();
//     let datosAlmuerzo = e.target
//     console.log(datosAlmuerzo.children[0].value);
// }


let btn = document.querySelector('#btnUno');

btn.onclick = function () {
let rbs = document.querySelectorAll('input[name="almuerzo"]');
let selectedValue;
for (let rb of rbs) {
    if (rb.checked) {
        selectedValue = rb.value;
        break;
    }
}

console.log('Almuerzo ' + selectedValue);

}



let btnDos = document.querySelector('#btnDos');

btnDos.onclick = function () {
let rbs = document.querySelectorAll('input[name="primer-plato"]');
let selectedValue;
for (let rb of rbs) {
    if (rb.checked) {
        selectedValue = rb.value;
        break;
    }
}

console.log('Primer plato ' + selectedValue);

}


let btnTres = document.querySelector('#btnTres');

btnTres.onclick = function () {
let rbs = document.querySelectorAll('input[name="segundo-plato"]');
let selectedValue;
for (let rb of rbs) {
    if (rb.checked) {
        selectedValue = rb.value;
        break;
    }
}

console.log('Segundo plato ' + selectedValue);

}