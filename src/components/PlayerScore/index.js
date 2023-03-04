import './style.css'

function PlayerScore(points=0, player){

    return /*html*/`
    <ol class="player-score" data-points="${points}" data-player=${player}>
      <li class="pointer">Um</li>
      <li class="pointer">Dois</li>
      <li class="pointer">Três</li>
    </ol>

    `
}


export default PlayerScore;