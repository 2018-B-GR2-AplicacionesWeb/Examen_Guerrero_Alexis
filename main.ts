

//1 BUSCAR TIPO GENDER, EYE COLOR, SKIN COLOR, HAIR COLOR EN ARREGLO JSON

const fs = require('fs');

function leerArchivo(nombreArchivo: string) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (error, contenidoPeople) => { // CALLBACK
                    if (error) {

                        reject(error);

                    } else {

                        const starwars = JSON.parse(contenidoPeople);
                        resolve(starwars);
                    }
                }
            )

        }//fin resolve y reject
    )//fin promesa
}//fin funcion




function identificarGenres(lista:any) {
    return new Promise(
        (resolve) => {
            

            resolve(lista);
        }
    )
}


leerArchivo('people.json')
    .then(
        (ok) => {
            return identificarGenres(ok);
        }
    )
    .then(
        (contenido:any)=>{
            console.log('GENRES: \n');
            let genres = [];
            contenido.forEach((element:any) => {
                
                genres.push(element.gender);

               
                
            });
            console.log(genres);
            
            console.log('EYE COLOR: \n');
            let eyeColor = [];


            contenido.forEach((element:any) => {

                eyeColor.push(element.eye_color);
                

              //  
                
            });
            console.log(eyeColor);

            console.log('SKIN COLOR: \n');
            let skin = [];


            contenido.forEach((element:any) => {

                skin.push(element.skin_color);
                

             //   
                
            });
            console.log(skin);

            console.log('HAIR COLOR: \n');
            let hair = [];


            contenido.forEach((element:any) => {

                hair.push(element.hair_color);
                

              
                
            });
            console.log(hair);


        }

    )


//6 


interface objeto {

    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: [

    ],
    species: [

    ],
    vehicles: [

    ],
    starships: [

    ],
    created: string,
    edited: string,
    url: string

}
