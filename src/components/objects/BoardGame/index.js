import './style.css';
import CardFrontBack from '../../CardFrontBack';
import cards from "./data";

window.BoardGame = {};
window.BoardGame.handleClick = () =>{
    const $boardGame = document.querySelector('.board-game');
    const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');

    if($cardsActive.length === 2){
        setTimeout(()=>{
            $cardsActive.forEach((card) => card.classList.remove('-active'));
        }, 1000);
    }
}

function BoardGame(amountCards){
    
    
    const htmlCardsList = cards.map((card)=>CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = htmlCardsList.join('');

    

    return /*html*/`
    <section class="board-game" onclick="BoardGame.handleClick(event)">
    ${$htmlCards}
    </section>
    `
}

export default BoardGame;