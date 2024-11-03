const seccionPeliculas = document.getElementById("contenedor");

const axios=require("axios");

const apiPeliculas = async () => {
    const response = await axios.get(
        'https://students-api.up.railway.app/movies'
    );

    const data = response.data;
    console.log(data);
    data.forEach((pelicula) => {
        const div = document.createElement("div");
        const titulo = document.createElement("h2");
        const año = document.createElement("h3");
        const director = document.createElement("h3");
        const duracion = document.createElement("h3");
        const puntuacion = document.createElement("h2");
        const poster = document.createElement("img");

        div.classList.add("movie");

        titulo.innerHTML = pelicula.title;
        año.innerHTML = pelicula.year;
        director.innerHTML = pelicula.director;
        duracion.innerHTML = pelicula.duration;
        puntuacion.innerHTML = pelicula.rate;
        poster.src = pelicula.poster;

        div.appendChild(titulo);
        div.appendChild(año);
        div.appendChild(director);
        div.appendChild(duracion);
        div.appendChild(puntuacion);
        div.appendChild(poster);

        pelicula.genre.forEach(g => {
            const generoHeader = document.createElement("h3");
            generoHeader.innerHTML = "Género";
            div.appendChild(generoHeader);

            const genero = document.createElement("p");
            genero.innerHTML = g;
            div.appendChild(genero);
        });

        seccionPeliculas.appendChild(div);
    });
};

module.exports = apiPeliculas;