const seriesurl = "https://peticiones.online/api/series"

async function getAllSeries(url) {
    //funcion fetch para llamar api
    try {
        const peticion = await fetch(url, { method: 'GET' })
        //descomprimir los datos en json
        const data = await peticion.json()
        return data;
    } catch (err) {
        console.log(err)
    }
}

