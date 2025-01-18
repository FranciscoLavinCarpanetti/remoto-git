const buttons = document.querySelectorAll('.flex button'); //array de botones
const sectionGrid = document.querySelector('#characters .grid'); //seccion donde pinto los characters
const selectStatus = document.querySelector('#statusSelect');

//añado a los botones el listener
function goToPage(event) {
    // aqui necesito saber la pagina de api a la que voy a conectar
    init(event.target.dataset.url)
}

buttons.forEach(button => button.addEventListener('click', goToPage))


// selector evento para recoger el status
function obtenerStatus(event) {
    let status = event.target.value;
    //https://rickandmortyapi.com/api/character/?status=alive
    let urlStatus = `${url}?status=${status}`;
    init(urlStatus)
    //tendremos que llamar a api para obtener el listado con ese status, y posteriormente pintar
}

statusSelect.addEventListener('change', obtenerStatus);


function printOneCharacter(character, dom) {
    const article = document.createElement('article');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = character.image
    img.alt = character.name

    const h3 = document.createElement('h3');
    h3.textContent = character.name;

    const p = document.createElement('p');
    p.textContent = `Estado: ${character.status}`

    figure.appendChild(img)
    article.append(figure, h3, p);
    dom.appendChild(article)

}

function printAllCharacters(list, dom) {
    dom.innerHTML = "";
    list.forEach(character => printOneCharacter(character, dom))
}


//cargar los primeros 20 personajes
async function init(url) {
    const data = await getAllCharacters(url)
    buttons[0].dataset.url = data.info.prev;
    buttons[1].dataset.url = data.info.next;
    printAllCharacters(data.results, sectionGrid)
}

//carga inicial cuando cargo el script por primera vez
init(url)