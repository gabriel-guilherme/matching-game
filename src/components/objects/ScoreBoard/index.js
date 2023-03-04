import ArrowDown from "../../ArrrowDown";
import playerName from "../../PlayerName";
import PlayerScore from "../../PlayerScore";
import VsPlayer from "../../VsPlayer";
import './style.css'

function ScoreBoard(){

    return /*html*/`
    <header class="score-board">
    ${ArrowDown()}
    ${playerName('player 1')}
    ${PlayerScore(0,1)}
    ${VsPlayer()}
    ${PlayerScore(0,2)}
    ${playerName('player 2')}
    </header>
    `;
}

export default ScoreBoard;