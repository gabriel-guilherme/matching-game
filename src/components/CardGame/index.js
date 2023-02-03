import './style.css'

function cardGame (icon="alura-pixel", alt="Logo da Alura"){
    return /*html*/`
    <article class = "card-game">
    <img src="images/${icon}.png" alt="${alt}">
    </article>
    `
}


export default cardGame;