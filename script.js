const pianoKeys = document.querySelectorAll(".piano-keys .key"),
      volumeSlider = document.querySelector(".volume-slider input"),
      keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
    keysPressed = {}, // Oggetto per tenere traccia dei tasti attualmente premuti
    currentNotes = new Set(); // Set per tenere traccia delle note attualmente suonate

const audioObjects = {};
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    audioObjects[key.dataset.key] = new Audio(`tunes/${key.dataset.key}.wav`);
    audioObjects[key.dataset.key].preload = "auto";
    keysPressed[key.dataset.key] = false; // Inizializza ogni tasto come non premuto
});

// Definizioni degli accordi
const chordDefinitions = {
    // Accordi Maggiori
    "C Major": ["a", "d", "g"],
    "D Major": ["s", "f", "h"],
    "E Major": ["d", "y", "j"],
    "F Major": ["f", "h", "k"],
    "G Major": ["g", "j", "l"],
    "A Major": ["h", "k", "m"],
    "B Major": ["j", "l", "ò"],
  
    // Accordi Minori
    "C Minor": ["a", "e", "g"],
    "D Minor": ["s", "a", "h"],
    "E Minor": ["d", "g", "j"],
    "F Minor": ["f", "j", "k"],
    "G Minor": ["g", "k", "l"],
    "A Minor": ["h", "l", "m"],
    "B Minor": ["j", "m", "ò"],
  
    // Accordi di Settima
    "C7": ["a", "d", "g", "k"],
    "D7": ["s", "f", "h", "l"],
    "E7": ["d", "g", "j", "l"],
    "F7": ["f", "h", "k", "ò"],
    "G7": ["g", "j", "l", "a"],
    "A7": ["h", "k", "m", "s"],
    "B7": ["j", "l", "ò", "d"],
  
    // Accordi Maggiori Settima
    "CMaj7": ["a", "d", "g", "j"],
    "DMaj7": ["s", "f", "h", "l"],
    "EMaj7": ["d", "g", "j", "ò"],
    "FMaj7": ["f", "h", "k", "ò"],
    "GMaj7": ["g", "j", "l", "a"],
    "AMaj7": ["h", "k", "m", "s"],
    "BMaj7": ["j", "l", "ò", "d"],
  };
  
  

const updateChordDisplay = () => {
  let chordName = "Nessuno";
  Object.keys(chordDefinitions).forEach(chord => {
    const notes = chordDefinitions[chord];
    if (notes.every(note => currentNotes.has(note)) && notes.length === currentNotes.size) {
      chordName = chord;
    }
  });
  document.getElementById("chordName").textContent = chordName;
};

const playTune = (key) => {
    if (!keysPressed[key]) {
        const audio = audioObjects[key].cloneNode();
        audio.volume = volumeSlider.value;
        audio.play();

        const clickedKey = document.querySelector(`[data-key="${key}"]`);
        clickedKey.classList.add("active");
        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);

        keysPressed[key] = true; // Segna il tasto come premuto
        currentNotes.add(key); // Aggiunge la nota corrente al set
        updateChordDisplay(); // Aggiorna il display dell'accordo
    }
};

pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    Object.values(audioObjects).forEach(audio => {
        audio.volume = e.target.value;
    });
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
    const key = e.key.toLowerCase();
    if (allKeys.includes(key) && !keysPressed[key]) {
        playTune(key);
    }
};

const releasedKey = (e) => {
    const key = e.key.toLowerCase();
    if (allKeys.includes(key)) {
        keysPressed[key] = false; // Reimposta il tasto come non premuto
        currentNotes.delete(key); // Rimuove la nota dal set delle note attuali
        updateChordDisplay(); // Aggiorna il display dell'accordo
    }
};

document.addEventListener("keydown", pressedKey);
document.addEventListener("keyup", releasedKey);
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);

// Inserisci questo elemento nel tuo HTML per visualizzare l'accordo
// <div id="chordName">Nessuno</div>
