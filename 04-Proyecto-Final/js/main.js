// Boton Anadir Nuevo Alumno
$('#botonAnadirAlumno').on('click', () => {

    // Efecto Modal
    $('.modal-anadir-alumno').fadeIn('slow');
    // Cierre Modal
    $('.boton-cierre-nuevo-alumno-modal').on('click', () =>{
    $('.modal-anadir-alumno').fadeOut('slow');
    location.reload();
    });
});