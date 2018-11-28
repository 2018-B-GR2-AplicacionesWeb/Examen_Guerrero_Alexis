//1 BUSCAR TIPO GENDER, EYE COLOR, SKIN COLOR, HAIR COLOR EN ARREGLO JSON
const fs = require('fs');
function leerArchivo(nombreArchivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (error, contenidoPeople) => {
            if (error) {
                reject(error);
            }
            else {
                const starwars = JSON.parse(contenidoPeople);
                resolve(starwars);
            }
        });
    } //fin resolve y reject
    ); //fin promesa
} //fin funcion
function identificarGenres(lista) {
    return new Promise((resolve) => {
        resolve(lista);
    });
}
leerArchivo('people.json')
    .then((ok) => {
    return identificarGenres(ok);
})
    .then((contenido) => {
    console.log('GENRES: \n');
    let genres = [];
    contenido.forEach((element) => {
        genres.push(element.gender);
    });
    console.log(genres);
    console.log('EYE COLOR: \n');
    let eyeColor = [];
    contenido.forEach((element) => {
        eyeColor.push(element.eye_color);
        //  
    });
    console.log(eyeColor);
    console.log('SKIN COLOR: \n');
    let skin = [];
    contenido.forEach((element) => {
        skin.push(element.skin_color);
        //   
    });
    console.log(skin);
    console.log('HAIR COLOR: \n');
    let hair = [];
    contenido.forEach((element) => {
        hair.push(element.hair_color);
    });
    console.log(hair);
});
