import './style.css'
import CardGame from "../CardGame";

window.CardFrontBack={};
window.CardFrontBack.handleClick = (event) =>{
    event.target.closest(".card-front-back").classList.toggle("-active");
};

function CardFrontBack(icon, altIcon){
    

    return /*html*/`
    <article class="card-front-back" onclick="CardFrontBack.handleClick(event)">
    <div class="card -front">
    ${CardGame()}
    </div>

    <div class="card -back">
    ${CardGame(icon, altIcon)}
    </div>
    </article>
    `
}

export default CardFrontBack;