//capturamos los elementos con los que voy trabajar
const formUser = document.querySelector('#formUser');
const ulUsers = document.querySelector('#user');


//printar todos los datos del array
function printAllUsers(list, dom) {
    list.forEach(usuario => usuario.printData(dom))
}

printAllUsers(usuarios, ulUsers);

function guardarDatos(list, nuevousuario) {
    list.push(nuevousuario);
    nuevousuario.printData(ulUsers)
}

// capturar los datos del usuario a guardarlos en array y pintarlo en el html
function obtenerDatosForm(event) {
    event.preventDefault()
    let nombre = event.target.nombre.value
    let edad = Number(event.target.edad.value);
    const newUser = new Usuario(nombre, edad);
    guardarDatos(usuarios, newUser);

}

formUser.addEventListener('submit', obtenerDatosForm);
