const characters = [
 // --- Protagonists & Close Allies ---
  { name: "Shinichi Kudo", gender: "Male", age: "17", height: "174cm", arc: "Introduction", origin: "Japan", alias: "Detective", img: "shinichi.png" },
  { name: "Conan Edogawa", gender: "Male", age: "7", height: "102cm", arc: "Introduction", origin: "Japan", alias: "Detective Boys", img: "conan.png" },
  { name: "Ran Mouri", gender: "Female", age: "17", height: "160cm", arc: "Introduction", origin: "Japan", alias: "Teitan High", img: "ran.png" },
  { name: "Kogoro Mouri", gender: "Male", age: "38", height: "181cm", arc: "Introduction", origin: "Japan", alias: "Sleeping Kogoro", img: "kogoro.png" },
  { name: "Eri Kisaki", gender: "Female", age: "38", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Queen of the Bar", img: "eri.png" },
  { name: "Hiroshi Agasa", gender: "Male", age: "52", height: "160cm", arc: "Introduction", origin: "Japan", alias: "Professor", img: "agasa.png" },
  { name: "Ai Haibara", gender: "Female", age: "7", height: "104cm", arc: "Haibara", origin: "Japan", alias: "Ex-BO", img: "haibara.png" },

 // --- Detective Boys ---
  { name: "Ayumi Yoshida", gender: "Female", age: "7", height: "107cm", arc: "Introduction", origin: "Japan", alias: "Detective Boys", img: "ayumi.png" },
  { name: "Mitsuhiko Tsuburaya", gender: "Male", age: "7", height: "110cm", arc: "Introduction", origin: "Japan", alias: "Detective Boys", img: "mitsuhiko.png" },
  { name: "Genta Kojima", gender: "Male", age: "7", height: "120cm", arc: "Introduction", origin: "Japan", alias: "Detective Boys", img: "genta.png" },

 // --- Black Organization & Undercover Agents ---
  { name: "Gin", gender: "Male", age: "Unknown", height: "190cm", arc: "Introduction", origin: "Unknown", alias: "BO", img: "gin.png" },
  { name: "Vodka", gender: "Male", age: "Unknown", height: "180cm", arc: "Introduction", origin: "Unknown", alias: "BO", img: "vodka.png" },
  { name: "Vermouth", gender: "Female", age: "Unknown", height: "170cm", arc: "Vermouth", origin: "USA", alias: "BO", img: "vermouth.png" },
  { name: "Chianti", gender: "Female", age: "Unknown", height: "165cm", arc: "Black Impact", origin: "Japan", alias: "BO Sniper", img: "chianti.png" },
  { name: "Korn", gender: "Male", age: "Unknown", height: "Unknown", arc: "Black Impact", origin: "Japan", alias: "BO Sniper", img: "korn.png" },
  { name: "Renya Karasuma", gender: "Male", age: "99+", height: "Unknown", arc: "Black Bunny's Revenge", origin: "Japan", alias: "The Boss/Anokata", img: "karasuma.png" },
  { name: "Rum", gender: "Male", age: "Unknown", height: "Unknown", arc: "Rum", origin: "Japan", alias: "BO Second-in-Command", img: "rum.png" },
  { name: "Rei Furuya", gender: "Male", age: "29", height: "180cm", arc: "Bourbon", origin: "Japan", alias: "Bourbon/Zero", img: "rei.png" },
  { name: "Hidemi Hondou", gender: "Female", age: "27", height: "Unknown", arc: "Black Impact", origin: "Japan", alias: "Kir", img: "hidemi.png" },

 // --- FBI & Law Enforcement ---
  { name: "Shuichi Akai", gender: "Male", age: "32", height: "188cm", arc: "Vermouth", origin: "USA", alias: "Silver Bullet", img: "akai.png" },
  { name: "Jodie Starling", gender: "Female", age: "28", height: "Unknown", arc: "Vermouth", origin: "USA", alias: "FBI", img: "jodie.png" },
  { name: "James Black", gender: "Male", age: "Unknown", height: "Unknown", arc: "Vermouth", origin: "UK/USA", alias: "FBI Chief", img: "james.png" },
  { name: "Andre Camel", gender: "Male", age: "27", height: "Unknown", arc: "Clash of Red and Black", origin: "USA", alias: "FBI", img: "camel.png" },

 // --- Osaka Characters ---
  { name: "Heiji Hattori", gender: "Male", age: "17", height: "174cm", arc: "Diplomat Murder Case", origin: "Japan", alias: "Detective of the West", img: "heiji.png" },
  { name: "Kazuha Toyama", gender: "Female", age: "17", height: "Unknown", arc: "Naniwa Serial Murder Case", origin: "Japan", alias: "Aikido Expert", img: "kazuha.png" },
  { name: "Heizo Hattori", gender: "Male", age: "Unknown", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Osaka Police Chief", img: "heizo.png" },

 // --- Police Force (Tokyo & Others) ---
  { name: "Juzo Megure", gender: "Male", age: "Unknown", height: "166cm", arc: "Introduction", origin: "Japan", alias: "Inspector", img: "megure.png" },
  { name: "Wataru Takagi", gender: "Male", age: "26", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Detective", img: "takagi.png" },
  { name: "Miwako Sato", gender: "Female", age: "28", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Detective", img: "sato.png" },
  { name: "Ninzaburo Shiratori", gender: "Male", age: "30", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Inspector", img: "shiratori.png" },
  { name: "Kazunobu Chiba", gender: "Male", age: "24", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Detective", img: "chiba.png" },
  { name: "Hyoue Kuroda", gender: "Male", age: "50", height: "Unknown", arc: "Rum", origin: "Japan", alias: "NPA Superintendant", img: "kuroda.png" },

 // --- Magic Kaito Characters ---
  { name: "Kaito Kuroba", gender: "Male", age: "17", height: "174cm", arc: "Kaito Kid", origin: "Japan", alias: "Kaitou Kid", img: "kaito.png" },
  { name: "Toichi Kuroba", gender: "Male", age: "38 (deceased)", height: "Unknown", arc: "Kaito Kid", origin: "Japan", alias: "Original Kid", img: "toichi.png" },
  { name: "Saguru Hakuba", gender: "Male", age: "17", height: "180cm", arc: "Gathered Detectives", origin: "UK/Japan", alias: "Detective", img: "hakuba.png" }
     
 // --- Police & Investigators ---
  { name: "Misao Yamamura", gender: "Male", age: "Unknown", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Gunma Police", img: "yamamura.png" },
  { name: "Kansuke Yamato", gender: "Male", age: "35", height: "Unknown", arc: "Nagano Police", origin: "Japan", alias: "Nagano Police", img: "yamato.png" },
  { name: "Yui Uehara", gender: "Female", age: "29", height: "Unknown", arc: "Nagano Police", origin: "Japan", alias: "Nagano Police", img: "uehara.png" },
  { name: "Takaaki Morofushi", gender: "Male", age: "35", height: "Unknown", arc: "Nagano Police", origin: "Japan", alias: "Komei", img: "morofushi_t.png" },
  { name: "Sango Yokomizo", gender: "Male", age: "Unknown", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Shizuoka Police", img: "sango.png" },
  { name: "Juggo Yokomizo", gender: "Male", age: "Unknown", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Kanagawa Police", img: "juggo.png" },
  { name: "Ginshiro Toyama", gender: "Male", age: "Unknown", height: "Unknown", arc: "Osaka Police", origin: "Japan", alias: "Osaka Police", img: "toyama_g.png" },
  { name: "Goro Otaki", gender: "Male", age: "Unknown", height: "Unknown", arc: "Osaka Police", origin: "Japan", alias: "Osaka Police", img: "otaki.png" },
  { name: "Kiyonaga Matsumoto", gender: "Male", age: "54", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "MPD Superintendent", img: "matsumoto.png" },
  { name: "Fumimaro Ayanokoji", gender: "Male", age: "28", height: "Unknown", arc: "Kyoto Police", origin: "Japan", alias: "The Noble Inspector", img: "ayanokoji.png" },

  // --- Rum Arc & Related ---
  { name: "Rumi Wakasa", gender: "Female", age: "37", height: "Unknown", arc: "Rum", origin: "Japan", alias: "Elementary Teacher", img: "wakasa.png" },
  { name: "Kanenori Wakita", gender: "Male", age: "56", height: "Unknown", arc: "Rum", origin: "Japan", alias: "Sushi Chef", img: "wakita.png" },
  { name: "Masumi Sera", gender: "Female", age: "17", height: "Unknown", arc: "Bourbon", origin: "Japan/UK", alias: "Jeet Kune Do Master", img: "sera.png" },
  { name: "Subaru Okiya", gender: "Male", age: "27", height: "Unknown", arc: "Bourbon", origin: "Japan", alias: "Graduate Student", img: "subaru.png" },
  { name: "Mary Sera", gender: "Female", age: "Unknown", height: "Unknown", arc: "Rum", origin: "UK", alias: "Sister from Outside Domain", img: "mary.png" },
  { name: "Tsutomu Akai", gender: "Male", age: "Unknown", height: "Unknown", arc: "Rum", origin: "Japan/UK", alias: "MI6 Agent", img: "tsutomu.png" },
  { name: "Shukichi Haneda", gender: "Male", age: "28", height: "Unknown", arc: "Bourbon", origin: "Japan", alias: "Taiko Meijin", img: "shukichi.png" },
  { name: "Kohji Haneda", gender: "Male", age: "17 (deceased)", height: "Unknown", arc: "Rum", origin: "Japan", alias: "Shogi Player", img: "kohji.png" },

  // --- Kudo & Mouri Families/Associates ---
  { name: "Yukiko Kudo", gender: "Female", age: "37", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Night Baroness", img: "yukiko.png" },
  { name: "Yusaku Kudo", gender: "Male", age: "38", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Mystery Writer", img: "yusaku.png" },
  { name: "Eisuke Hondou", gender: "Male", age: "17", height: "Unknown", arc: "Clash of Red and Black", origin: "Japan", alias: "Student", img: "eisuke.png" },
  { name: "Midori Kuriyama", gender: "Female", age: "Unknown", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Eri Kisaki's Secretary", img: "kuriyama.png" },
  { name: "Sakurako Yonehara", gender: "Female", age: "23", height: "Unknown", arc: "Bourbon", origin: "Japan", alias: "Housekeeper", img: "sakurako.png" },
  { name: "Tomoaki Araide", gender: "Male", age: "25", height: "Unknown", arc: "Vermouth", origin: "Japan", alias: "Doctor", img: "araide.png" },
  { name: "Azusa Enomoto", gender: "Female", age: "23", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Cafe Poirot Waitress", img: "azusa.png" },

  // --- Traffic Department & Friends ---
  { name: "Yumi Miyamoto", gender: "Female", age: "28", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Traffic Department", img: "yumi.png" },
  { name: "Naeko Miike", gender: "Female", age: "24", height: "Unknown", arc: "Rum", origin: "Japan", alias: "Traffic Department", img: "naeko.png" },
  { name: "Chihaya Hagiwara", gender: "Female", age: "31", height: "Unknown", arc: "Rum", origin: "Japan", alias: "Kanagawa Police", img: "chihaya.png" },
  { name: "Makoto Kyogoku", gender: "Male", age: "18", height: "184cm", arc: "Introduction", origin: "Japan", alias: "Prince of Kicks", img: "makoto.png" },
  { name: "Sonoko Suzuki", gender: "Female", age: "17", height: "162cm", arc: "Introduction", origin: "Japan", alias: "Teitan High", img: "sonoko.png" },
  { name: "Jirokichi Suzuki", gender: "Male", age: "72", height: "Unknown", arc: "Kaito Kid", origin: "Japan", alias: "Suzuki Advisor", img: "jirokichi.png" },

  // --- Magic Kaito / Hattori Related ---
  { name: "Akako Koizumi", gender: "Female", age: "17", height: "163cm", arc: "Kaito Kid", origin: "Japan", alias: "Witch", img: "akako.png" },
  { name: "Ginzo Nakamori", gender: "Male", age: "41", height: "Unknown", arc: "Kaito Kid", origin: "Japan", alias: "Inspector", img: "nakamori.png" },
  { name: "Aoko Nakamori", gender: "Female", age: "17", height: "160cm", arc: "Kaito Kid", origin: "Japan", alias: "Student", img: "aoko.png" },
  { name: "Shizuka Hattori", gender: "Female", age: "42", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Heiji's Mother", img: "shizuka.png" },
  { name: "Momiji Ooka", gender: "Female", age: "17", height: "Unknown", arc: "Rum", origin: "Japan", alias: "Karuta Champion", img: "momiji.png" },
  { name: "Muga Iori", gender: "Male", age: "30", height: "Unknown", arc: "Rum", origin: "Japan", alias: "Butler / Ex-Public Security", img: "iori.png" },
  { name: "Chikage Kuroba", gender: "Female", age: "Unknown", height: "Unknown", arc: "Kaito Kid", origin: "Japan", alias: "Phantom Lady", img: "chikage.png" },
  { name: "Konosuke Jii", gender: "Male", age: "61", height: "Unknown", arc: "Kaito Kid", origin: "Japan", alias: "Kid's Assistant", img: "jii.png" },

  // --- Black Organization / Wild Police Story ---
  { name: "Akemi Miyano", gender: "Female", age: "24 (deceased)", height: "161cm", arc: "Introduction", origin: "Japan", alias: "Masami Hirota", img: "akemi.png" },
  { name: "Atsushi Miyano", gender: "Male", age: "Deceased", height: "Unknown", arc: "Bourbon", origin: "Japan", alias: "The Mad Scientist", img: "atsushi.png" },
  { name: "Elena Miyano", gender: "Female", age: "Deceased", height: "Unknown", arc: "Bourbon", origin: "UK", alias: "Hell Angel", img: "elena.png" },
  { name: "Tequila", gender: "Male", age: "Deceased", height: "200cm+", arc: "Introduction", origin: "Unknown", alias: "BO", img: "tequila.png" },
  { name: "Pisco", gender: "Male", age: "71 (deceased)", height: "Unknown", arc: "Haibara", origin: "Japan", alias: "BO", img: "pisco.png" },
  { name: "Calvados", gender: "Male", age: "Deceased", height: "Unknown", arc: "Vermouth", origin: "Unknown", alias: "BO Sniper", img: "calvados.png" },
  { name: "Curaçao", gender: "Female", age: "Deceased", height: "Unknown", arc: "Movie 20", origin: "Unknown", alias: "BO", img: "curacao.png" },
  { name: "Irish", gender: "Male", age: "Deceased", height: "Unknown", arc: "Movie 13", origin: "Unknown", alias: "BO", img: "irish.png" },
  { name: "Scotch", gender: "Male", age: "Deceased", height: "Unknown", arc: "Bourbon", origin: "Japan", alias: "Hiromitsu Morofushi", img: "scotch.png" },
  { name: "Jinpei Matsuda", gender: "Male", age: "26 (deceased)", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Explosives Handling", img: "matsuda.png" },
  { name: "Kenji Hagiwara", gender: "Male", age: "22 (deceased)", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Explosives Handling", img: "hagiwara_k.png" },
  { name: "Wataru Date", gender: "Male", age: "28 (deceased)", height: "Unknown", arc: "Bourbon", origin: "Japan", alias: "Detective", img: "date.png" },

  // --- Others / Movie Specific ---
  { name: "Hiroki Sawada", gender: "Male", age: "10 (deceased)", height: "Unknown", arc: "Movie 6", origin: "USA/Japan", alias: "Noah's Ark", img: "hiroki.png" },
  { name: "Fusae Campbell", gender: "Female", age: "Unknown", height: "Unknown", arc: "Introduction", origin: "UK/Japan", alias: "Fashion Designer", img: "fusae.png" },
  { name: "Sumiko Kobayashi", gender: "Female", age: "26", height: "Unknown", arc: "Introduction", origin: "Japan", alias: "Class 1-B Teacher", img: "kobayashi.png" }
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
