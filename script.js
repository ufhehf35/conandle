// DATA SECTION - Double check your image extensions (.png or .jpg?)
const characters = [
    { name: "Shinichi Kudo", gender: "Male", age: "17", height: "174cm", arc: "Introduction", origin: "Japan", alias: "Detective", img: "shinichi.png" },
    { name: "Conan Edogawa", gender: "Male", age: "7", height: "102cm", arc: "Introduction", origin: "Japan", alias: "Detective Boys", img: "conan.png" },
    { name: "Ran Mouri", gender: "Female", age: "17", height: "160cm", arc: "Introduction", origin: "Japan", alias: "Teitan High", img: "ran.png" },
    { name: "Ai Haibara", gender: "Female", age: "7", height: "104cm", arc: "Haibara", origin: "Japan", alias: "Detective Boys", img: "haibara.png" },
    { name: "Rei Furuya", gender: "Male", age: "29", height: "180cm", arc: "Bourbon", origin: "Japan", alias: "BO", img: "rei.png" }
];

let target = characters[Math.floor(Math.random() * characters.length)];
let guessedNames = [];
let gameOver = false;

const input = document.getElementById('charInput');
const suggestions = document.getElementById('suggestions');
const giveUpBtn = document.getElementById('giveUpBtn');

// 1. GIVE UP BUTTON FIX
giveUpBtn.addEventListener('click', () => {
    if (!gameOver) {
        endGame(false);
    }
});

// 2. SEARCH & DUPLICATE PREVENTION
input.addEventListener('input', () => {
    if (gameOver) return;
    const val = input.value.toLowerCase().trim();
    suggestions.innerHTML = '';
    
    if (val.length > 0) {
        // Only show characters that match name AND have NOT been guessed yet
        const filtered = characters.filter(c => 
            c.name.toLowerCase().includes(val) && !guessedNames.includes(c.name)
        );

        filtered.forEach(c => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            // Path must be exactly 'images/filename.png'
            div.innerHTML = `
                <img src="images/${c.img}" onerror="this.src='https://via.placeholder.com/40'">
                <span>${c.name}</span>
            `;
            div.onclick = () => makeGuess(c);
            suggestions.appendChild(div);
        });
    }
});

function makeGuess(guess) {
    if (gameOver) return;
    
    // Add to list of guessed names so it disappears from search
    guessedNames.push(guess.name);
    input.value = '';
    suggestions.innerHTML = '';
    
    const row = document.createElement('div');
    row.className = 'row';
    
    const props = ['img', 'gender', 'age', 'height', 'arc', 'origin', 'alias'];
    
    props.forEach(prop => {
        const span = document.createElement('span');
        if (prop === 'img') {
            span.innerHTML = `<img src="images/${guess.img}" onerror="this.src='https://via.placeholder.com/40'">`;
        } else {
            span.innerHTML = guess[prop];
            // Compare against target
            if (guess[prop] === target[prop]) {
                span.classList.add('correct');
            } else {
                span.classList.add('wrong');
            }
        }
        row.appendChild(span);
    });

    document.getElementById('guesses').prepend(row);

    if (guess.name === target.name) {
        endGame(true);
    }
}

function endGame(win) {
    gameOver = true;
    input.disabled = true;
    const resultArea = document.getElementById('resultArea');
    resultArea.classList.remove('hidden');
    
    document.getElementById('targetImg').src = `images/${target.img}`;
    document.getElementById('targetName').innerText = target.name;
    
    if (win) {
        document.getElementById('resultStatus').innerText = "CASE CLOSED! 🔍";
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    } else {
        document.getElementById('resultStatus').innerText = "FAILED! THE CULPRIT WAS:";
    }
}
