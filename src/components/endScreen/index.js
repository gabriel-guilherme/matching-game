import './style.css'

window.endScreen = {}
window.endScreen.restartFunc = (init) => {
    let body = document.querySelector('body')
    body.textContent = ''
    const $root = document.createElement('div')
    $root.setAttribute('id', 'root')
    body.appendChild($root)
    init();
}

function endScreen(initGame){
    window.endScreen.initGame = initGame
    return /*html*/`
    <div class="end-screen">
    <div class="box-winner">
    <h2 class="player-winner"></h2>
    <div class="winner">
        <span style="--i:1">W</span>
        <span style="--i:2">I</span>
        <span style="--i:3">N</span>
        <span style="--i:4">N</span>
        <span style="--i:5">E</span>
        <span style="--i:6">R</span>
        <span style="--i:7">!</span>
        <span style="--i:8">!</span>
        <span style="--i:9">!</span>
    </div>
    <div class="trophy-image"></div>
    <button class="restart-button" onclick="endScreen.restartFunc(endScreen.initGame)">restart</button>
    </div>
    </div>
    `
}

export default endScreen;