const character = document.querySelector(".character");
const block = document.querySelector(".block");
const score = document.querySelector(".score");
const score_container = document.querySelector(".score-cont");
const gameOverElement = document.querySelector(".game-over");
const score_result_cont = document.querySelector(".score-cont-result");
const score_result = document.querySelector(".score-result");
let scoreCount = 0;
let count = 0;

// console.log(scoreCount);

function jump(){
    character.classList.add("animated-char");
    setTimeout(function(){
        character.classList.remove("animated-char");
    }, 500);
    
}

// console.log(character.computedStyleMap().getTop());
let prettyScore = 0;
var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft  = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft > 0 && blockLeft <= 30 &&characterTop >= 206){
        block.classList.remove("animated-block");
        // alert("Game Over!");
        score_container.style.display = "none";
        gameOverElement.style.display = "block";
        score_result_cont.style.display = "block";
        score_result.innerHTML = prettyScore;

    }

    count++;

    if(count % 100 == 0){
        scoreCount = count / 100;

        prettyScore = scoreCount;
        if(scoreCount < 10){
            prettyScore = "00" + String(scoreCount);
        }else if(scoreCount < 100){
            prettyScore = "0" + String(scoreCount);
        }

        score.innerHTML = prettyScore;
    }
    


} , 10);


