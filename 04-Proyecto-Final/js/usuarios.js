
// Constructor de Usuarios
class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = uuidv4();
        this.tomas = [];
        this.comidas = [];
    }
};


// Generacion de UID de cada Usuario
function uuidv4(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
};

// Array contenedor de Usuarios
let usuarios = [];


// Boton Submit -- registra los datos de un nuevo usuario
$('#formulario').submit ((e) => {
    e.preventDefault();
    let usuariosGuardados = JSON.parse(localStorage.getItem("Usuarios"));
    
    if (usuariosGuardados) {
            let inputNombreUsuario = document.getElementsByClassName('input-ingresa-nombre-usuario');
            let inputApellidoUsuario = document.getElementsByClassName('input-ingresa-apellido-usuario');
            console.log(inputNombreUsuario);
        
            // Añade Usuarios al array usuarios
            usuariosGuardados.push(new Usuario(inputNombreUsuario[0].value, inputApellidoUsuario[0].value));
    
            // Convierte en string el array usuarios y lo carga en el Local Storage
            localStorage.setItem('Usuarios', JSON.stringify(usuariosGuardados));
    
            // Limpia los inputs del formulario
            $("#formulario")[0].reset();
    } else {
            let inputNombreUsuario = document.getElementsByClassName('input-ingresa-nombre-usuario');
            let inputApellidoUsuario = document.getElementsByClassName('input-ingresa-apellido-usuario');
            console.log(inputNombreUsuario);
        
            // Añade Usuarios al array usuarios
            usuarios.push(new Usuario(inputNombreUsuario[0].value, inputApellidoUsuario[0].value));
    
            // Convierte en string el array usuarios y lo carga en el Local Storage
            localStorage.setItem('Usuarios', JSON.stringify(usuarios));
    
            // Limpia los inputs del formulario
            $("#formulario")[0].reset();
    }

    // Cierre Modal
    $('.modal-anadir-alumno').fadeOut('slow');
    location.reload();

});



// Visualizacion en Home de lo Usuarios guardados
let alumnosHome = JSON.parse(localStorage.getItem('Usuarios'));

    if (alumnosHome) { 
    for (const alumnos of alumnosHome) {
    $('#container-cabecera-app').append(`
        <section class="contenedor-datos-alumno-home">
            <div class="imagen-perfil-alumno-home">
                <img src=".//imagenes/alumno-icon.jpg" alt="">
            </div>
            <div class="nombre-dia-alumno-home">
                <span id="nombreAlumno" class="font-nombre-home" name="apwellido">${alumnos.nombre}</span>
                <span id="${alumnos.apellido}" class="font-apellido-home">${alumnos.apellido}</span>
            </div>
            <div class="boton-dia-alumno-home">
                <button id="${alumnos.id}" class="boton-ir-a-ficha-nino">Dia</button>
            </div>
        </section>`);
    }    
    } else {
        $('#container-cabecera-app').append(`
        <h2 class="titulo-pagina-vacia">¡No hay alumnos registrados!</h3>
        <h4 class="texto-pagina-vacia">Registra el primer alumno con el boton "Nuevo Alumno" en la parte superior de la página.</h4>`);
    };

    

    

    // Boton Registrar el Dia del Alumno
    $('.boton-ir-a-ficha-nino').on('click', (e) =>{
        alumnosHome = JSON.parse(localStorage.getItem('Usuarios'));
        let alumnoBoton = alumnosHome.find(alumnos => alumnos.id === e.target.id);
        // console.log(alumnoBoton);
        $('#datos-alumno-ficha').fadeIn('slow');
        $('.nombreApellidoInterno').append(`
        <h2 id="nombreHome">${alumnoBoton.nombre}</h2> 
        <h2 id="apellidoHome">${alumnoBoton.apellido}</h2>
        <h2 id="idHome" class="idEscondido">${alumnoBoton.id}</h2>
        `);
    });
