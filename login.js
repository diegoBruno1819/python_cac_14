
const formulario = document.querySelector("#form")

formulario.addEventListener("submit", validar)
formulario.addEventListener("submit", traerUsuarioAPI)


function validar(e) {
    e.preventDefault();
    const mail = document.querySelector("#mail").value
    const contrasena = document.querySelector("#contraseña").value
    console.log(mail, contrasena);
    
}

function traerUsuarioAPI() {
    fetch('https://randomuser.me/api')

        .then(datos => datos.json())


        // traer el usuario de la api
        .then(datos => {
            var user = datos.results[0].login.username
            localStorage.setItem('usuario', user)
            console.log(user)
            alert("Bienvenido "  + user)
            usuario1 = localStorage.getItem('usuario')
            login.innerHTML = `<li><a href="../pages/login.html" id="login">"${usuario1}"</a></li>`
            
        })
}

// document.getElementById("miFormulario").addEventListener("submit", function(event) {

//     // Obtenemos los valores de los campos
//     var nombre = document.getElementById("Nombre").value;
//     var email = document.getElementById("Mail").value;
//     var apellido = document.getElementById("Apellido").value;
//     var comentario = document.getElementById("comentario").value;
//     console.log(nombre, email, apellido, comentario)
//     // Validación simple: comprobar que los campos no estén vacíos
//     if (nombre === "" || email === "" || apellido==="" || comentario==="") {
//       alert("Por favor, completa todos los campos.");
//       event.preventDefault(); // Evitar que el formulario se envíe
//     } else {
//       // Aquí puedes agregar má validaciones según tus necesidades
//       // Por ejemplo, validar el formato del correo electrónico
//       var emailRegExp = /\S+@\S+\.\S+/;
//       if (!emailRegExp.test(email)) {
//         alert("Por favor, ingresa un correo electrónico válido.");
//         event.preventDefault();
//       }
//     }
//   });