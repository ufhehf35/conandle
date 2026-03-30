const characters = [
    { name: "Shinichi Kudo", gender: "Male", age: "17", height: "174cm", arc: "Introduction", origin: "Japan", alias: "Detective", img: "shinichi.png" },
    { name: "Conan Edogawa", gender: "Male", age: "7", height: "102cm", arc: "Introduction", origin: "Japan", alias: "Detective Boys", img: "conan.png" },
    { name: "Ai Haibara", gender: "Female", age: "7", height: "104cm", arc: "Haibara", origin: "Japan", alias: "Ex-BO", img: "haibara.png" },
    { name: "Rei Furuya", gender: "Male", age: "29", height: "180cm", arc: "Bourbon", origin: "Japan", alias: "BO/NPA", img: "rei.png" },
    { name: "Ran Mouri", gender: "Female", age: "17", height: "160cm", arc: "Introduction", origin: "Japan", alias: "Teitan High", img: "ran.png" },
    { name: "Gin", gender: "Male", age: "Unknown", height: "190cm", arc: "Introduction", origin: "Unknown", alias: "BO", img: "gin.png" },
    { name: "Vermouth", gender: "Female", age: "Unknown", height: "170cm", arc: "Vermouth", origin: "USA", alias: "BO", img: "vermouth.png" },
    { name: "Shuichi Akai", gender: "Male", age: "32", height: "188cm", arc: "Vermouth", origin: "USA", alias: "FBI", img: "akai.png" }
    // Add more here following the pattern
];

let target = characters[Math.floor(Math.random() * characters.length)];
let guessedNames = [];
let isGameOver = false;

// ELEMENTS
const searchInput = document.getElementById('charSearch');
const suggestionBox = document.getElementById('suggestionBox');
const guessList = document.getElementById('guessList');
const giveUpBtn = document.getElementById('giveUpBtn');

// 1. GIVE UP FUNCTION
giveUpBtn.onclick = function() {
    if (!isGameOver) {
        endTheGame(false);
    }
};

// 2. SEARCH & SUGGESTION LOGIC
searchInput.addEventListener('input', () => {
    if (isGameOver) return;
    const val = searchInput.value.toLowerCase().trim();
    suggestionBox.innerHTML = '';
    
    if (val) {
        // FILTER: Name matches AND NOT already guessed
        const filtered = characters.filter(c => 
            c.name.toLowerCase().includes(val) && !guessedNames.includes(c.name)
        );

        filtered.forEach(c => {
            const div = document.createElement('div');
            div.className = 'suggest-item';
            div.innerHTML = `
                <img src="images/${c.img}" onerror="this.src='https://via.placeholder.com/35'">
                <span>${c.name}</span>
            `;
            div.onclick = () => handleGuess(c);
            suggestionBox.appendChild(div);
        });
    }
});

// 3. HANDLING THE GUESS
function handleGuess(charObj) {
    // Stop duplicate guesses
    if (guessedNames.includes(charObj.name) || isGameOver) return;
    
    guessedNames.push(charObj.name);
    searchInput.value = '';
    suggestionBox.innerHTML = '';
    
    const row = document.createElement('div');
    row.className = 'row';
    
    const fields = ['img', 'gender', 'age', 'height', 'arc', 'origin', 'alias'];
    
    fields.forEach(f => {
        const span = document.createElement('span');
        if (f === 'img') {
            span.innerHTML = `<img src="images/${charObj.img}" onerror="this.src='https://via.placeholder.com/45'">`;
        } else {
            span.innerText = charObj[f];
            if (charObj[f] === target[f]) {
                span.classList.add('correct');
            } else {
                span.classList.add('wrong');
            }
        }
        row.appendChild(span);
    });

    guessList.prepend(row);

    if (charObj.name === target.name) {
        endTheGame(true);
    }
}

// 4. END GAME (PINNING THE RESULT)
function endTheGame(won) {
    isGameOver = true;
    searchInput.disabled = true;
    
    const resultDiv = document.getElementById('pinnedResult');
    resultDiv.classList.remove('hidden');
    
    document.getElementById('pImg').src = `images/${target.img}`;
    document.getElementById('pName').innerText = target.name;
    document.getElementById('pDetails').innerText = `${target.gender} | ${target.age} | ${target.height} | First Arc: ${target.arc}`;
    
    if (won) {
        document.getElementById('resultHeader').innerText = "CASE SOLVED! 🔍";
        document.getElementById('resultHeader').style.color = "#27ae60";
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    } else {
        document.getElementById('resultHeader').innerText = "YOU GAVE UP! THE CULPRIT WAS:";
        document.getElementById('resultHeader').style.color = "#c0392b";
    }
    
    // Scroll to the top to see the pinned result
    window.scrollTo({ top: 0, behavior: 'smooth' });
}