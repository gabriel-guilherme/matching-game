import './style.css';
import CardFrontBack from '../../CardFrontBack';
import cards from "./data";

let checkData = [];

window.BoardGame = {};
window.BoardGame.handleClick = (event) =>{
    if(event.target.closest(".card-front-back").classList[1] != '-solid-active'){   
        const $boardGame = document.querySelector('.board-game');
        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');
        const $playerArrow = document.querySelector('.arrow-down')
        const $playerScore = document.querySelector(`.player-score[data-player="${$playerArrow.getAttribute('data-currentplayer')}"]`)
        //checkData.push($cardsActive.data)
        $cardsActive.forEach((card) => checkData.push(card.getAttribute('data-check')))
        if($cardsActive.length >= 2){
            if(checkData.every(item => item == checkData[0])){
                $cardsActive.forEach((card) => {
                    card.classList.add('-solid-active')
                    card.classList.remove('-active')
                    card.removeAttribute('onclick')
                })
                $playerScore.setAttribute('data-points',parseInt($playerScore.getAttribute('data-points'))+1)



            }else{

                if($playerArrow.getAttribute('data-currentplayer')==1){
                    $playerArrow.setAttribute('data-currentplayer', 2)
                }else{
                    $playerArrow.setAttribute('data-currentplayer', 1)
                }
                setTimeout(()=>{
                    $cardsActive.forEach((card) => card.classList.remove('-active'));
                }, 1000);
            }
            checkData = []
            if(document.querySelectorAll('.card-front-back.-solid-active').length==6){
                let player1 = document.querySelector('.player-score[data-player="1"]')
                let player2 = document.querySelector('.player-score[data-player="2"]')
                if(player1.getAttribute('data-points')>player2.getAttribute('data-points')){
                    document.querySelector('.end-screen').classList.add('-active')
                    document.querySelector('.player-winner').innerHTML = 'Player1'
                }else{
                    document.querySelector('.end-screen').classList.add('-active')
                    document.querySelector('.player-winner').innerHTML = 'Player2'
                }
            }
        }
    }
}

window.shuffleArray = cards =>{
    for(let i = cards.length - 1; i > 0;i--){
        const j = Math.floor(Math.random()*(i+1))
        const temp = cards[i]
        cards[i] = cards[j]
        cards[j] = temp;
    }
}

function BoardGame(amountCards){
    shuffleArray(cards)
    
    const htmlCardsList = cards.map((card)=>CardFrontBack(card.icon, card.altIcon, card.data));
    const $htmlCards = htmlCardsList.join('');

    

    return /*html*/`
    <section class="board-game" onclick="BoardGame.handleClick(event)">
    ${$htmlCards}
    </section>
    
    `
}

export default BoardGame;