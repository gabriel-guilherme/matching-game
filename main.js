import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css';

import BoardGame from './src/components/objects/BoardGame';
import ScoreBoard from './src/components/objects/ScoreBoard';


const $root = document.querySelector("#root");


$root.insertAdjacentHTML("afterend", 
`
${ScoreBoard()}
${BoardGame(6)}
`
);
