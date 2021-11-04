
// Boton Anadir Nuevo Alumno
$('#botonAnadirAlumno').on('click', () => {
    $('.container-cabecera').append(`
    <div class="modal-anadir-alumno">
        <h3 class="titulo-seccion">Nuevo Usuario</h3>
        <section class="container-ingresar-usuarios">
                    <form id="formulario">
                        <h4 class="titulo-toma">Nuevo Alumno</h4>
                        <input type="text" id="nombreUsuario" name="nombreUsuario" class="input-ingresa-nombre-usuario"
                            placeholder="Nombre" minlength="2" maxlength="20" required>
                        <input type="text" id="apellidoUsuario" name="" class="input-ingresa-apellido-usuario"
                            placeholder="Apellido" minlength="2" maxlength="30" required>
                        <button id="buttonNuevoUsuario" class="button-form-user" type="submit">Enviar</button>                       
                    </form>
        </section>
        <button class="boton-cierre-modal">Cerrar</button>
    </div>`);
    
    // Efecto Modal
    $('.modal-anadir-alumno').fadeIn('slow');
    // Cierre Modal
    $('.boton-cierre-modal').on('click', () =>{
    $('.modal-anadir-alumno').fadeOut('slow');
    });


// Constructor de Usuarios
class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = nombre + apellido + Math.random(1, 100);
    }
};

// Array de usuarios
let usuarios = [];


// Boton Submit -- registra los datos de un nuevo usuario
$('#formulario').submit ((e) => {
        e.preventDefault();
        let inputNombreUsuario = document.getElementsByClassName('input-ingresa-nombre-usuario');
        let inputApellidoUsuario = document.getElementsByClassName('input-ingresa-apellido-usuario');
        console.log(inputNombreUsuario);
    
        // Añade datos al array usuarios
        usuarios.push(new Usuario(inputNombreUsuario[0].value, inputApellidoUsuario[0].value, Usuario.id));

        // Convierte en string el array usuarios y lo carga en el Local Storage
        localStorage.setItem('Usuarios', JSON.stringify(usuarios));

        // Limpia los inputs del formulario
        $("#formulario")[0].reset();        
});

});

// Al recargar la pagina vuelve a cargar el array de usuarios
window.addEventListener('load', (e) => {
    console.log('page is fully loaded');
    usuarios = JSON.parse(localStorage.getItem("Usuarios"));
  });