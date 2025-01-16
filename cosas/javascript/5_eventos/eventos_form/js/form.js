//capturar el formulario- querySelector
const formAficiones = document.querySelector('#formulario form');
const usuarios = [];
//const pError = document.querySelector('.error');

function guardarDatos(nuevousuario, lista) {
    //añadir un usuario a lista, comprobar que ese usuario es unico o ya no existe
    let existe = lista.findIndex(user => user.nombre.toLowerCase() === nuevousuario.nombre.toLowerCase() && user.hobbie.toLowerCase() === nuevousuario.hobbie.toLowerCase())
    if (existe === -1) {
        lista.push(nuevousuario);
        console.log(lista)
        return true;
    } else {
        return false;
    }
}

function getDataForm(event) {
    //para form y enlaces tenemos que bloquear la acción por defecto
    event.preventDefault();
    let nombre = event.target.nombre.value;
    let aficion = event.target.aficion.value;
    const newUsuario = {
        nombre: nombre,
        hobbie: aficion
    }
    if (aficion !== "" && nombre !== "") {
        let result = guardarDatos(newUsuario, usuarios);
        if (result) {
            printOneUser(newUsuario, sectionUsers)
            event.target.reset();
        } else {
            alert('Usuario duplicado')
        }
    } else {
        //pError.textContent = 'los campos no pueden estar vacios'
        alert('los campos no pueden estar vacios')
    }
}
//creo el evento con el que interactua el formulario (submit, reset).
formAficiones.addEventListener('submit', getDataForm);

// vamos a pintar una lista de usuarios en la seccion correspodiente
const sectionUsers = document.querySelector('#resultado ul')

function printOneUser(user, dom) {
    const li = document.createElement('li') //<li></li>
    li.textContent = `${user.nombre} - ${user.hobbie}`
    // <li>Juan - Baloncesto</li>
    dom.appendChild(li)
}

function printAllUsers(list, dom) {
    list.forEach(user => printOneUser(user, dom))
}