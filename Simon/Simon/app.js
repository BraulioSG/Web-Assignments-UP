const colors = ['red', 'green', 'blue', 'yellow'];
let pattern = [];
let clicked = [];
let level = 0;

function playSound(color) {
    const audio = new Audio(`./sounds/${color}.mp3`);
    audio.play();
}

function nextSequence() {
    let num = Math.floor(Math.random() * 4);
    pattern.push(colors[num]);
}
function animatePress(color) {
    const button = document.getElementById(color);
    button.classList.toggle('pressed');
    setTimeout(() => {
        button.classList.toggle('pressed');
    }, 100);
}

function showPattern(num = 0) {
    setTimeout(() => {
        let color = pattern[num];
        let button = document.getElementById(color);
        button.classList.toggle('blink');
        playSound(color);
        setTimeout(() => {
            button.classList.toggle('blink');
        }, 250);

        num += 1;
        if (num < pattern.length) {
            showPattern(num);
        }
    }, 500);
}

function getLevel() {
    level++;
    pattern = [];
    clicked = [];
    for (let i = 0; i < level; i++) nextSequence();
    showPattern();
    document.getElementById('level-title').innerHTML = `Lvl: ${level}`;
}

function checkAnswer() {
    const idx = clicked.length - 1;
    if (clicked[idx] === pattern[idx]) {
        console.log(true);
        if (clicked.length === pattern.length) {
            getLevel();
        }
    } else {
        //GAME OVER
        let audio = new Audio('./sounds/wrong.mp3');
        audio.play();
        document.getElementById(
            'level-title'
        ).innerHTML = `Game over, Press Any Key to Restart`;
        level = 0;
    }
}

$(document).ready(() => {
    $(this).keypress((evt) => {
        const key = String.fromCharCode(evt.charCode);
        if (key === 'a') {
            if (level === 0) getLevel();
        }
    });

    $('div[type=button]').click((e) => {
        const target = e.currentTarget;
        const color = target.id;
        clicked.push(color);
        animatePress(color);
        playSound(color);
        checkAnswer();
    });
});
