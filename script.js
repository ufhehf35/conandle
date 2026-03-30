const characters = [
    { name: "Shinichi Kudo", gender: "Male", age: "17", height: "174cm", arc: "Introduction", origin: "Japan", alias: "Detective", img: "shinichi.png" },
    { name: "Conan Edogawa", gender: "Male", age: "7", height: "102cm", arc: "Introduction", origin: "Japan", alias: "Detective Boys", img: "conan.png" },
    { name: "Ai Haibara", gender: "Female", age: "7", height: "104cm", arc: "Haibara", origin: "Japan", alias: "Detective Boys", img: "haibara.png" },
    { name: "Rei Furuya", gender: "Male", age: "29", height: "180cm", arc: "Bourbon", origin: "Japan", alias: "BO", img: "rei.png" },
    { name: "Ran Mouri", gender: "Female", age: "17", height: "160cm", arc: "Introduction", origin: "Japan", alias: "Teitan High", img: "ran.png" }
    // Add all other characters here...
];

let target = characters[Math.floor(Math.random() * characters.length)];
let guessedNames = [];
let gameOver = false;

const input = document.getElementById('charInput');
const suggestions = document.getElementById('suggestions');
const guessesContainer = document.getElementById('guesses');
const giveUpBtn = document.getElementById('giveUpBtn');

// SEARCH LOGIC
input.addEventListener('input', () => {
    if (gameOver) return;
    const val = input.value.toLowerCase();
    suggestions.innerHTML = '';
    
    if (val) {
        // Filter: Must match name AND NOT be in guessedNames
        const filtered = characters.filter(c => 
            c.name.toLowerCase().includes(val) && !guessedNames.includes(c.name)
        );

        filtered.forEach(c => {
            const div = document.createElement('div');
            div.classList.add('suggestion-item');
            div.innerHTML = `
                <img src="images/${c.img}">
                <span>${c.name}</span>
            `;
            div.onclick = () => makeGuess(c);
            suggestions.appendChild(div);
        });
    }
});

// GUESS LOGIC
function makeGuess(guess) {
    if (gameOver) return;
    
    guessedNames.push(guess.name);
    input.value = '';
    suggestions.innerHTML = '';
    
    const row = document.createElement('div');
    row.classList.add('row');
    
    const props = ['img', 'gender', 'age', 'height', 'arc', 'origin', 'alias'];
    
    props.forEach(prop => {
        const span = document.createElement('span');
        if (prop === 'img') {
            span.innerHTML = `<img src="images/${guess.img}">`;
        } else {
            span.innerHTML = guess[prop];
            if (guess[prop] === target[prop]) {
                span.classList.add('correct');
            } else {
                span.classList.add('wrong');
            }
        }
        row.appendChild(span);
    });

    guessesContainer.prepend(row);

    if (guess.name === target.name) {
        endGame(true);
    }
}

// END GAME LOGIC
function endGame(win) {
    gameOver = true;
    input.disabled = true;
    document.getElementById('resultArea').classList.remove('hidden');
    document.getElementById('targetImg').src = `images/${target.img}`;
    document.getElementById('targetName').innerText = target.name;
    
    if (win) {
        document.getElementById('resultStatus').innerText = "CASE CLOSED! YOU WIN!";
        document.getElementById('resultStatus').style.color = "#4caf50";
        // Confetti effect
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        document.getElementById('resultStatus').innerText = "YOU GAVE UP! THE CULPRIT WAS:";
        document.getElementById('resultStatus').style.color = "#f44336";
    }
}

giveUpBtn.onclick = () => {
    if(!gameOver) endGame(false);
};
