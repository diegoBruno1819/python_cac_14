
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

fun