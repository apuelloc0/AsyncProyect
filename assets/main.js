// import fetch  from 'node-fetch';

const API = 'https://rickandmortyapi.com/api'
const container = document.getElementById('trick__container')

const characters = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16'

async function rickMorty (urlApi) {
    const app = await fetch(urlApi)
    const response = await app.json()
    return response
}


(async (urlApi) => {
    try{
        const rick = await rickMorty(`${urlApi}/character/${characters}`)
        // console.log(rick)

        let view = `
        ${rick.map(character => `
        <div class="trick__content">   
                <img src=${character.image} alt=${character.name} class="trick__img" />
  
            <div class="div-trick">
                <h3 class="trick__title">${character.name}</h3>
                <span class="trick__subtitle">${character.species}</span>
            </div>
        </div>
        `)}
        `
      

        container.innerHTML = view;
    } catch (error) {
      console.log(error)
    }
})(API);


const sr = ScrollReveal({
    origin: 'top', //PARA QUE INICIE DESDE ARRIBA
    distance: '60px', //ES EL RECORRIDO QUE VA A HACER LA ANIMACION DESDE QUE INICIA
    duration: 2500, //EL TIEMPO QUE VA A DURAR LA ANIMACION
    delay: 400, //RETRASO DE 400mls, PARA  QUE NO APAREZCA DE GOLPE
    reset: true  //PARA QUE CUANDO VOLVAMOS A HACER SCROLL SE EJECUTE DE NUEVO
})

sr.reveal('.trick__content', {interval:500})
//EL INTERVAL ES PARA QUE AFECTE A CADA UNO DE LOS ITEMS DE UNA LISTA, PARA DAR EL EFECTO DE APARECER 1 POR 1, NO TODOS DE GOLPE


