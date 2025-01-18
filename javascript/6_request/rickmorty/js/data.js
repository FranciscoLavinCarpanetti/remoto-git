
const url = 'https://rickandmortyapi.com/api/character/';
/**
 recibe un url y devuelve un objeto con la info de la paginacion y results con los 20 personajes de esa pagina
 */
async function getAllCharacters(url) {
    try {
        const peticion = await fetch(url, { method: 'get' })
        const data = await peticion.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

