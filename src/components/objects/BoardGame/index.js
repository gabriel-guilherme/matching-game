import './style.css'
import CardFrontBack from '../../CardFrontBack';


function BoardGame(amountCards){
    const $CardGame = CardFrontBack();
    const $boardGame= $CardGame.repeat(amountCards);

    return /*html*/`
    <section class="board-game">
    ${$boardGame}
    </section>
    `
}

export default BoardGame;