const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const baton1 = document.querySelector('#p1Button');
const baton2 = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const slc = document.querySelector('#playto');
let score1 = 0;
let score2 = 0;
let winScore = 3;
let gameOver = false;

baton1.addEventListener('click', function () {
    if (!gameOver) {
        score1 += 1;
        if (score1 === winScore) {
            gameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            baton1.disabled = true;
            baton2.disabled = true;
        }
        p1Display.textContent = score1;
    }

});

baton2.addEventListener('click', function () {
    if (!gameOver) {
        score2 += 1;
        if (score2 === winScore) {
            gameOver = true;
            p1Display.classList.add('loser');
            p2Display.classList.add('winner');
            baton1.disabled = true;
            baton2.disabled = true;
        }
        p2Display.textContent = score2;
    }

});

slc.addEventListener('change', function () {
    winScore = parseInt(this.value);
    resetF();
});

reset.addEventListener('click', resetF);

function resetF() {
    gameOver = false;
    score1 = 0;
    score2 = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
    baton1.disabled = false;
    baton2.disabled = false;
};