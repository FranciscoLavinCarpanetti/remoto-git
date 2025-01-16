//tenemos capturar los elementos con los interactuar. HTML, Botones, form
const sectionGrid = document.querySelector('#series .grid');


/*
    <article>
        <figure>
            <img src="https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg">
        </figure>
        <h3>Juego de Tronos</h3>
        <p>Puntuacion: <span class="good">7.9</span></p>
    </article> 

*/

function printOneSerie(serie, dom) {
    const article = document.createElement('article'); //<article></article>
    const figure = document.createElement('figure'); // <figure></figure>
    const img = document.createElement('img'); // <img>
    img.src = serie.image
    img.alt = serie.title
    figure.appendChild(img);

    const h3 = document.createElement('h3'); // <h3></h3>
    h3.textContent = serie.title;

    const p = document.createElement('p');
    p.textContent = "Puntuacion: "
    const span = document.createElement('span');
    span.textContent = serie.rating;
    let clase = serie.rating >= 7 ? 'good' : 'bad'
    span.classList.add(clase)
    p.appendChild(span);
    article.append(figure, h3, p)

    dom.appendChild(article)

}

function printAllSeries(list, dom) {
    list.forEach(serie => printOneSerie(serie, dom))
}

async function init() {
    const seriesList = await getAllSeries(seriesurl)
    printAllSeries(seriesList, sectionGrid)
}
init()