function uuidv4(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

// Constructor de Usuarios
class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = uuidv4();
    }
};


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
});


// // Al recargar la pagina vuelve a cargar el array de usuarios
// window.addEventListener('load', (e) => {
//         console.log('page is fully loaded');
//         usuarios = JSON.parse(localStorage.getItem("Usuarios"));
//       });




      // $('#formulario').submit ((e) => {
//         e.preventDefault();
//         let inputNombreUsuario = document.getElementsByClassName('input-ingresa-nombre-usuario');
//         let inputApellidoUsuario = document.getElementsByClassName('input-ingresa-apellido-usuario');
//         console.log(inputNombreUsuario);
    
//         // Usuarios
//         usuarios.push(new Usuario(inputNombreUsuario[0].value, inputApellidoUsuario[0].value, Usuario.id));
    
//         localStorage.setItem('Usuarios', JSON.stringify(usuarios));

//         $("#formulario")[0].reset();        
// });


