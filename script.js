const characters = [
    { name: "Shinichi Kudo", gender: "Male", age: "17", height: "174cm", arc: "Introduction", origin: "Japan", alias: "Detective", img: "shinichi.png" },
    { name: "Conan Edogawa", gender: "Male", age: "7", height: "102cm", arc: "Introduction", origin: "Japan", alias: "Detective Boys", img: "conan.png" },
    { name: "Ai Haibara", gender: "Female", age: "7", height: "104cm", arc: "Haibara", origin: "Japan", alias: "Detective Boys", img: "haibara.png" },
    { name: "Rei Furuya", gender: "Male", age: "29", height: "180cm", arc: "Bourbon", origin: "Japan", alias: "BO", img: "rei.png" },
    // ADD MORE CHARACTERS HERE FOLLOWING THE SAME FORMAT
];

let target = characters[Math.floor(Math.random() * characters.length)];
const input = document.getElementById('charInput');
const suggestions = document.getElementById('suggestions');
const guessesContainer = document.getElementById('guesses');

input.addEventListener('input', () => {
    const val = input.value.toLowerCase();
    suggestions.innerHTML = '';
    if (val) {
        const filtered = characters.filter(c => c.name.toLowerCase().includes(val));
        filtered.forEach(c => {
            const div = document.createElement('div');
            div.classList.add('suggestion-item');
            div.innerHTML = c.name;
            div.onclick = () => makeGuess(c);
            suggestions.appendChild(div);
        });
    }
});

function makeGuess(guess) {
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
}