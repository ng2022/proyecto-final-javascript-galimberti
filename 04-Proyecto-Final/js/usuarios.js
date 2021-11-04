// // Constructor de Usuarios
// class Usuario {
//     constructor(nombre, apellido) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.id = nombre + apellido + Math.random(1, 100);
//     }
// };

// // Array de usuarios
// let usuarios = [];


// // Boton Submit -- registra los datos de un nuevo usuario
// $('#formulario').submit ((e) => {
//         e.preventDefault();
//         let inputNombreUsuario = document.getElementsByClassName('input-ingresa-nombre-usuario');
//         let inputApellidoUsuario = document.getElementsByClassName('input-ingresa-apellido-usuario');
//         console.log(inputNombreUsuario);
    
//         // Añade Usuarios al array usuarios
//         usuarios.push(new Usuario(inputNombreUsuario[0].value, inputApellidoUsuario[0].value, Usuario.id));

//         // Convierte en string el array usuarios y lo carga en el Local Storage
//         localStorage.setItem('Usuarios', JSON.stringify(usuarios));

//         // Limpia los inputs del formulario
//         $("#formulario")[0].reset();        
// });


// // Al recargar la pagina vuelve a cargar el array de usuarios
// window.addEventListener('load', (e) => {
//         console.log('page is fully loaded');
//         usuarios = JSON.parse(localStorage.getItem("Usuarios"));
//       });




//       // $('#formulario').submit ((e) => {
// //         e.preventDefault();
// //         let inputNombreUsuario = document.getElementsByClassName('input-ingresa-nombre-usuario');
// //         let inputApellidoUsuario = document.getElementsByClassName('input-ingresa-apellido-usuario');
// //         console.log(inputNombreUsuario);
    
// //         // Usuarios
// //         usuarios.push(new Usuario(inputNombreUsuario[0].value, inputApellidoUsuario[0].value, Usuario.id));
    
// //         localStorage.setItem('Usuarios', JSON.stringify(usuarios));

// //         $("#formulario")[0].reset();        
// // });


