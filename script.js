// 1. ARC HIERARCHY
const arcOrder = {
    "introduction": 1,
    "haibara": 2,
    "vermouth": 3,
    "kir": 4,
    "bourbon": 5,
    "scarlet": 6,
    "rum": 7
};

// 2. CHARACTER DATABASE 
// Added 'searchNames' property for aliases
const characters = [
    { 
        name: "Rei Furuya", gender: "Male", age: 29, height: 180, arc: "Bourbon", origin: "Japan", alias: "BO / Police", img: "rei.png",
        searchNames: ["Bourbon", "Amuro Tooru", "Zero", "Furuya Rei", "Tooru Amuro"] 
    },
    { 
        name: "Rum", gender: "Male", age: "Unknown", height: "Unknown", arc: "Rum", origin: "Japan", alias: "BO", img: "rum.png",
        searchNames: ["Wakita Kanenori", "Kanenori Wakita", "Rum"] 
    },
    { 
        name: "Hiromitsu Morofushi", gender: "Male", age: 26, height: "Unknown", arc: "Bourbon", origin: "Japan", alias: "BO / Police", img: "hiromitsu.png",
        searchNames: ["Scotch", "Hiromitsu Morofushi", "Morofushi Hiromitsu"] 
    },
    { 
        name: "Hidemi Hondou", gender: "Female", age: 27, height: "Unknown", arc: "Kir", origin: "Japan", alias: "CIA / BO", img: "hidemi.png",
        searchNames: ["Mizunashi Rena", "Rena Mizunashi", "Kir", "Hidemi Hondou"] 
    },
    { 
        name: "Shuichi Akai", gender: "Male", age: 32, height: 188, arc: "Vermouth", origin: "UK / Japan", alias: "FBI / BO", img: "akai.png",
        searchNames: ["Akai Shuichi", "Dai Moroboshi", "Rye", "Subaru Okiya"] 
    },
{ "name": "Shinichi Kudo", "gender": "Male", "age": "17", "height": "174cm", "arc": "introduction", "origin": "Japan", "alias": "high school detective", "img": "shinichi.png" },
  { "name": "Conan Edogawa", "gender": "Male", "age": "7", "height": "102cm", "arc": "introduction", "origin": "Japan", "alias": "detective boys", "img": "conan.png" },
  { "name": "Ran Mouri", "gender": "Female", "age": "17", "height": "160cm", "arc": "introduction", "origin": "Japan", "alias": "high school", "img": "ran.png" },
  { "name": "Kogoro Mouri", "gender": "Male", "age": "38", "height": "181cm", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "kogoro.png" },
  { "name": "Eri Kisaki", "gender": "Female", "age": "38", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "other", "img": "eri.png" },
  { "name": "Hiroshi Agasa", "gender": "Male", "age": "52", "height": "160cm", "arc": "introduction", "origin": "Japan", "alias": "detective boys", "img": "agasa.png" },
  { "name": "Ai Haibara", "gender": "Female", "age": "7", "height": "104cm", "arc": "haibara", "origin": "Japan", "alias": "detective boys", "img": "haibara.png" },

  // --- Detective Boys ---
  { "name": "Ayumi Yoshida", "gender": "Female", "age": "7", "height": "107cm", "arc": "introduction", "origin": "Japan", "alias": "detective boys", "img": "ayumi.png" },
  { "name": "Mitsuhiko Tsuburaya", "gender": "Male", "age": "7", "height": "110cm", "arc": "introduction", "origin": "Japan", "alias": "detective boys", "img": "mitsuhiko.png" },
  { "name": "Genta Kojima", "gender": "Male", "age": "7", "height": "120cm", "arc": "introduction", "origin": "Japan", "alias": "detective boys", "img": "genta.png" },

  // --- Black Organization & Undercover Agents ---
  { "name": "Gin", "gender": "Male", "age": "Unknown", "height": "190cm", "arc": "introduction", "origin": "Unknown", "alias": "BO", "img": "gin.png" },
  { "name": "Vodka", "gender": "Male", "age": "Unknown", "height": "180cm", "arc": "introduction", "origin": "Unknown", "alias": "BO", "img": "vodka.png" },
  { "name": "Vermouth", "gender": "Female", "age": "Unknown", "height": "170cm", "arc": "vermouth", "origin": "USA", "alias": "BO", "img": "vermouth.png" },
  { "name": "Chianti", "gender": "Female", "age": "Unknown", "height": "165cm", "arc": "vermouth", "origin": "Japan", "alias": "BO", "img": "chianti.png" },
  { "name": "Korn", "gender": "Male", "age": "Unknown", "height": "Unknown", "arc": "vermouth", "origin": "Japan", "alias": "BO", "img": "korn.png" },
  { "name": "Renya Karasuma", "gender": "Male", "age": "99+", "height": "Unknown", "arc": "rum", "origin": "Japan", "alias": "BO", "img": "karasuma.png" },
  

  // --- FBI & Law Enforcement ---
  { "name": "Jodie Starling", "gender": "Female", "age": "28", "height": "Unknown", "arc": "vermouth", "origin": "USA", "alias": "fbi", "img": "jodie.png" },
  { "name": "James Black", "gender": "Male", "age": "Unknown", "height": "Unknown", "arc": "vermouth", "origin": "UK/USA", "alias": "fbi", "img": "james.png" },
  { "name": "Andre Camel", "gender": "Male", "age": "27", "height": "Unknown", "arc": "barboun", "origin": "USA", "alias": "fbi", "img": "camel.png" },

  // --- Osaka Characters ---
  { "name": "Heiji Hattori", "gender": "Male", "age": "17", "height": "174cm", "arc": "introduction", "origin": "Japan", "alias": "high school detective", "img": "heiji.png" },
  { "name": "Kazuha Toyama", "gender": "Female", "age": "17", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "other", "img": "kazuha.png" },
  { "name": "Heizo Hattori", "gender": "Male", "age": "Unknown", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "heizo.png" },

  // --- Police Force ---
  { "name": "Juzo Megure", "gender": "Male", "age": "Unknown", "height": "166cm", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "megure.png" },
  { "name": "Wataru Takagi", "gender": "Male", "age": "26", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "takagi.png" },
  { "name": "Miwako Sato", "gender": "Female", "age": "28", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "sato.png" },
  { "name": "Ninzaburo Shiratori", "gender": "Male", "age": "30", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "shiratori.png" },
  { "name": "Kazunobu Chiba", "gender": "Male", "age": "24", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "chiba.png" },
  { "name": "Hyoue Kuroda", "gender": "Male", "age": "50", "height": "Unknown", "arc": "rum", "origin": "Japan", "alias": "police", "img": "kuroda.png" },

  // --- Magic Kaito Characters ---
  { "name": "Kaito Kuroba", "gender": "Male", "age": "17", "height": "174cm", "arc": "introduction", "origin": "Japan", "alias": "high school", "img": "kaito.png" },
  { "name": "Toichi Kuroba", "gender": "Male", "age": "38", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "other", "img": "toichi.png" },
  { "name": "Saguru Hakuba", "gender": "Male", "age": "17", "height": "180cm", "arc": "introduction", "origin": "UK/Japan", "alias": "high school detective", "img": "hakuba.png" },

  // --- Police & Investigators ---
  { "name": "Misao Yamamura", "gender": "Male", "age": "Unknown", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "yamamura.png" },
  { "name": "Kansuke Yamato", "gender": "Male", "age": "35", "height": "Unknown", "arc": "barboun", "origin": "Japan", "alias": "police", "img": "yamato.png" },
  { "name": "Yui Uehara", "gender": "Female", "age": "29", "height": "Unknown", "arc": "barboun", "origin": "Japan", "alias": "police", "img": "uehara.png" },
  { "name": "Takaaki Morofushi", "gender": "Male", "age": "35", "height": "Unknown", "arc": "barboun", "origin": "Japan", "alias": "police", "img": "morofushi_t.png" },
  { "name": "Sango Yokomizo", "gender": "Male", "age": "Unknown", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "sango.png" },
  { "name": "Juggo Yokomizo", "gender": "Male", "age": "Unknown", "height": "Unknown", "arc": "vermouth", "origin": "Japan", "alias": "police", "img": "juggo.png" },
  { "name": "Ginshiro Toyama", "gender": "Male", "age": "Unknown", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "toyama_g.png" },
  { "name": "Goro Otaki", "gender": "Male", "age": "Unknown", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "otaki.png" },
  { "name": "Kiyonaga Matsumoto", "gender": "Male", "age": "54", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "matsumoto.png" },
  { "name": "Fumimaro Ayanokoji", "gender": "Male", "age": "28", "height": "Unknown", "arc": "movies", "origin": "Japan", "alias": "police", "img": "ayanokoji.png" },

  // --- Rum Arc & Related ---
  { "name": "Rumi Wakasa", "gender": "Female", "age": "37", "height": "Unknown", "arc": "rum", "origin": "Japan", "alias": "high school", "img": "wakasa.png" },
  { "name": "Masumi Sera", "gender": "Female", "age": "17", "height": "Unknown", "arc": "barboun", "origin": "Japan/UK", "alias": "high school detective", "img": "sera.png" },
  { "name": "Subaru Okiya", "gender": "Male", "age": "27", "height": "Unknown", "arc": "barboun", "origin": "Japan", "alias": "high school", "img": "subaru.png" },
  { "name": "Mary Sera", "gender": "Female", "age": "Unknown", "height": "Unknown", "arc": "rum", "origin": "UK", "alias": "mi6", "img": "mary.png" },
  { "name": "Tsutomu Akai", "gender": "Male", "age": "Unknown", "height": "Unknown", "arc": "rum", "origin": "Japan/UK", "alias": "cia", "img": "tsutomu.png" },
  { "name": "Shukichi Haneda", "gender": "Male", "age": "28", "height": "Unknown", "arc": "barboun", "origin": "Japan", "alias": "high school", "img": "shukichi.png" },
  { "name": "Kohji Haneda", "gender": "Male", "age": "17", "height": "Unknown", "arc": "rum", "origin": "Japan", "alias": "high school", "img": "kohji.png" },

  // --- Kudo & Mouri Families/Associates ---
  { "name": "Yukiko Kudo", "gender": "Female", "age": "37", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "other", "img": "yukiko.png" },
  { "name": "Yusaku Kudo", "gender": "Male", "age": "38", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "other", "img": "yusaku.png" },
  { "name": "Eisuke Hondou", "gender": "Male", "age": "17", "height": "Unknown", "arc": "barboun", "origin": "Japan", "alias": "cia", "img": "eisuke.png" },
  { "name": "Midori Kuriyama", "gender": "Female", "age": "Unknown", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "other", "img": "kuriyama.png" },
  { "name": "Sakurako Yonehara", "gender": "Female", "age": "23", "height": "Unknown", "arc": "barboun", "origin": "Japan", "alias": "other", "img": "sakurako.png" },
  { "name": "Tomoaki Araide", "gender": "Male", "age": "25", "height": "Unknown", "arc": "vermouth", "origin": "Japan", "alias": "high school", "img": "araide.png" },
  { "name": "Azusa Enomoto", "gender": "Female", "age": "23", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "other", "img": "azusa.png" },

  // --- Traffic Department & Friends ---
  { "name": "Yumi Miyamoto", "gender": "Female", "age": "28", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "yumi.png" },
  { "name": "Naeko Miike", "gender": "Female", "age": "24", "height": "Unknown", "arc": "rum", "origin": "Japan", "alias": "police", "img": "naeko.png" },
  { "name": "Chihaya Hagiwara", "gender": "Female", "age": "31", "height": "Unknown", "arc": "rum", "origin": "Japan", "alias": "police", "img": "chihaya.png" },
  { "name": "Makoto Kyogoku", "gender": "Male", "age": "18", "height": "184cm", "arc": "introduction", "origin": "Japan", "alias": "high school", "img": "makoto.png" },
  { "name": "Sonoko Suzuki", "gender": "Female", "age": "17", "height": "162cm", "arc": "introduction", "origin": "Japan", "alias": "high school", "img": "sonoko.png" },
  { "name": "Jirokichi Suzuki", "gender": "Male", "age": "72", "height": "Unknown", "arc": "vermouth", "origin": "Japan", "alias": "other", "img": "jirokichi.png" },

  // --- Magic Kaito / Hattori Related ---
  { "name": "Akako Koizumi", "gender": "Female", "age": "17", "height": "163cm", "arc": "introduction", "origin": "Japan", "alias": "high school", "img": "akako.png" },
  { "name": "Ginzo Nakamori", "gender": "Male", "age": "41", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "nakamori.png" },
  { "name": "Aoko Nakamori", "gender": "Female", "age": "17", "height": "160cm", "arc": "introduction", "origin": "Japan", "alias": "high school", "img": "aoko.png" },
  { "name": "Shizuka Hattori", "gender": "Female", "age": "42", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "other", "img": "shizuka.png" },
  { "name": "Momiji Ooka", "gender": "Female", "age": "17", "height": "Unknown", "arc": "rum", "origin": "Japan", "alias": "other", "img": "momiji.png" },
  { "name": "Muga Iori", "gender": "Male", "age": "30", "height": "Unknown", "arc": "rum", "origin": "Japan", "alias": "police", "img": "iori.png" },

  // --- Black Organization / Wild Police Story ---
  { "name": "Akemi Miyano", "gender": "Female", "age": "24", "height": "161cm", "arc": "introduction", "origin": "Japan", "alias": "BO", "img": "akemi.png" },
  { "name": "Atsushi Miyano", "gender": "Male", "age": "Unknown", "height": "Unknown", "arc": "barboun", "origin": "Japan", "alias": "BO", "img": "atsushi.png" },
  { "name": "Elena Miyano", "gender": "Female", "age": "Unknown", "height": "Unknown", "arc": "barboun", "origin": "UK", "alias": "BO", "img": "elena.png" },
  { "name": "Tequila", "gender": "Male", "age": "Unknown", "height": "200cm+", "arc": "introduction", "origin": "Unknown", "alias": "BO", "img": "tequila.png" },
  { "name": "Pisco", "gender": "Male", "age": "71", "height": "Unknown", "arc": "haibara", "origin": "Japan", "alias": "BO", "img": "pisco.png" },
  { "name": "Calvados", "gender": "Male", "age": "Unknown", "height": "Unknown", "arc": "vermouth", "origin": "Unknown", "alias": "BO", "img": "calvados.png" },
  { "name": "Curaçao", "gender": "Female", "age": "Unknown", "height": "Unknown", "arc": "movies", "origin": "Unknown", "alias": "BO", "img": "curacao.png" },
  { "name": "Irish", "gender": "Male", "age": "Unknown", "height": "Unknown", "arc": "movies", "origin": "Unknown", "alias": "BO", "img": "irish.png" },
  { "name": "Jinpei Matsuda", "gender": "Male", "age": "26", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "matsuda.png" },
  { "name": "Kenji Hagiwara", "gender": "Male", "age": "22", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "police", "img": "hagiwara_k.png" },
  { "name": "Wataru Date", "gender": "Male", "age": "28", "height": "Unknown", "arc": "barboun", "origin": "Japan", "alias": "police", "img": "date.png" },

  // --- Others / Movie Specific ---
  { "name": "Sumiko Kobayashi", "gender": "Female", "age": "26", "height": "Unknown", "arc": "introduction", "origin": "Japan", "alias": "other", "img": "kobayashi.png" }
];

let target = characters[Math.floor(Math.random() * characters.length)];
let guessedNames = [];
let isGameOver = false;

const searchInput = document.getElementById('charSearch');
const suggestionBox = document.getElementById('suggestionBox');
const guessList = document.getElementById('guessList');
const giveUpBtn = document.getElementById('giveUpBtn');
const placeholder = "https://placehold.co/100x100/333/white?text=No+Img";

giveUpBtn.onclick = () => { if (!isGameOver) endTheGame(false); };

searchInput.addEventListener('input', () => {
    if (isGameOver) return;
    const val = searchInput.value.toLowerCase().trim();
    suggestionBox.innerHTML = '';
    if (val) {
        const filtered = characters.filter(c => {
            const nameMatch = c.name.toLowerCase().includes(val);
            const aliasMatch = c.searchNames && c.searchNames.some(a => a.toLowerCase().includes(val));
            return (nameMatch || aliasMatch) && !guessedNames.includes(c.name);
        });
        filtered.forEach(c => {
            const div = document.createElement('div');
            div.className = 'suggest-item';
            div.innerHTML = `<img src="images/${c.img}" onerror="this.src='${placeholder}'"><span>${c.name}</span>`;
            div.onclick = () => handleGuess(c);
            suggestionBox.appendChild(div);
        });
    }
});

function getComparison(guessVal, targetVal, type) {
    if (String(guessVal).toLowerCase() === String(targetVal).toLowerCase()) return { class: 'correct', arrow: '' };

    if (type === 'number') {
        if (guessVal === "Unknown" || targetVal === "Unknown") return { class: 'wrong', arrow: '' };
        const gNum = parseFloat(guessVal);
        const tNum = parseFloat(targetVal);
        return { class: 'wrong', arrow: gNum < tNum ? '<span class="arrow">↑</span>' : '<span class="arrow">↓</span>' };
    }

    if (type === 'arc') {
        const gArc = guessVal.toLowerCase();
        const tArc = targetVal.toLowerCase();
        if (arcOrder[gArc] && arcOrder[tArc]) {
            return { class: 'wrong', arrow: arcOrder[gArc] < arcOrder[tArc] ? '<span class="arrow">↑</span>' : '<span class="arrow">↓</span>' };
        }
    }
    return { class: 'wrong', arrow: '' };
}

function handleGuess(guess) {
    if (guessedNames.includes(guess.name) || isGameOver) return;
    guessedNames.push(guess.name);
    searchInput.value = '';
    suggestionBox.innerHTML = '';
    
    const row = document.createElement('div');
    row.className = 'row';
    const schema = [
        { key: 'img', type: 'img' }, { key: 'gender', type: 'text' }, { key: 'age', type: 'number' },
        { key: 'height', type: 'number' }, { key: 'arc', type: 'arc' }, { key: 'origin', type: 'text' }, { key: 'alias', type: 'text' }
    ];

    schema.forEach(item => {
        const span = document.createElement('span');
        const res = getComparison(guess[item.key], target[item.key], item.type);
        if (item.type === 'img') {
            span.innerHTML = `<img src="images/${guess[item.key]}" onerror="this.src='${placeholder}'">`;
        } else {
            span.className = res.class;
            let display = guess[item.key];
            if (item.key === 'height' && display !== "Unknown") display += "cm";
            span.innerHTML = `<div>${display}</div>${res.arrow}`;
        }
        row.appendChild(span);
    });
    guessList.prepend(row);
    if (guess.name === target.name) endTheGame(true);
}

function endTheGame(won) {
    isGameOver = true;
    searchInput.disabled = true;
    document.getElementById('pinnedResult').classList.remove('hidden');
    document.getElementById('pImg').src = `images/${target.img}`;
    document.getElementById('pName').innerText = target.name;
    document.getElementById('pDetails').innerText = `${target.age} | ${target.height}cm | ${target.arc}`;
    if (won) {
        document.getElementById('resultHeader').innerText = "CASE SOLVED! 🔍";
        confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
    } else {
        document.getElementById('resultHeader').innerText = "FAILED! CULPRIT:";
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
