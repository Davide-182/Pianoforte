// Definizione delle scale musicali
const scaleDefinitions = {
    // Scale maggiori
    "C Major": ["C", "D", "E", "F", "G", "A", "B"],
    "C# Major": ["C#", "D#", "F", "F#", "G#", "A#", "C"],
    "D Major": ["D", "E", "F#", "G", "A", "B", "C#"],
    "D# Major": ["D#", "F", "G", "G#", "A#", "C", "D"],
    "E Major": ["E", "F#", "G#", "A", "B", "C#", "D#"],
    "F Major": ["F", "G", "A", "A#", "C", "D", "E"],
    "F# Major": ["F#", "G#", "A#", "B", "C#", "D#", "F"],
    "G Major": ["G", "A", "B", "C", "D", "E", "F#"],
    "G# Major": ["G#", "A#", "C", "C#", "D#", "F", "G"],
    "A Major": ["A", "B", "C#", "D", "E", "F#", "G#"],
    "A# Major": ["A#", "C", "D", "D#", "F", "G", "A"],
    "B Major": ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    // Scale minori naturali
    "C Minor": ["C", "D", "D#", "F", "G", "G#", "A#"],
    "C# Minor": ["C#", "D#", "E", "F#", "G#", "A", "B"],
    "D Minor": ["D", "E", "F", "G", "A", "A#", "C"],
    "D# Minor": ["D#", "F", "F#", "G#", "A#", "B", "C#"],
    "E Minor": ["E", "F#", "G", "A", "B", "C", "D"],
    "F Minor": ["F", "G", "G#", "A#", "C", "C#", "D#"],
    "F# Minor": ["F#", "G#", "A", "B", "C#", "D", "E"],
    "G Minor": ["G", "A", "A#", "C", "D", "D#", "F"],
    "G# Minor": ["G#", "A#", "B", "C#", "D#", "E", "F#"],
    "A Minor": ["A", "B", "C", "D", "E", "F", "G"],
    "A# Minor": ["A#", "C", "C#", "D#", "F", "F#", "G#"],
    "B Minor": ["B", "C#", "D", "E", "F#", "G", "A"],
    // Scale pentatoniche
    "C Pentatonic Major": ["C", "D", "E", "G", "A"],
    "C# Pentatonic Major": ["C#", "D#", "F", "G#", "A#"],
    "D Pentatonic Major": ["D", "E", "F#", "A", "B"],
    "D# Pentatonic Major": ["D#", "F", "G", "A#", "C"],
    "E Pentatonic Major": ["E", "F#", "G#", "B", "C#"],
    "F Pentatonic Major": ["F", "G", "A", "C", "D"],
    "F# Pentatonic Major": ["F#", "G#", "A#", "C#", "D#"],
    "G Pentatonic Major": ["G", "A", "B", "D", "E"],
    "G# Pentatonic Major": ["G#", "A#", "C", "D#", "F"],
    "A Pentatonic Major": ["A", "B", "C#", "E", "F#"],
    "A# Pentatonic Major": ["A#", "C", "D", "F", "G"],
    "B Pentatonic Major": ["B", "C#", "D#", "F#", "G#"],
    "C Pentatonic Minor": ["C", "D#", "F", "G", "A#"],
    "C# Pentatonic Minor": ["C#", "E", "F#", "G#", "B"],
    "D Pentatonic Minor": ["D", "F", "G", "A", "C"],
    "D# Pentatonic Minor": ["D#", "F#", "G#", "A#", "C#"],
    "E Pentatonic Minor": ["E", "G", "A", "B", "D"],
    "F Pentatonic Minor": ["F", "G#", "A#", "C", "D#"],
    "F# Pentatonic Minor": ["F#", "A", "B", "C#", "E"],
    "G Pentatonic Minor": ["G", "A#", "C", "D", "F"],
    "G# Pentatonic Minor": ["G#", "B", "C#", "D#", "F#"],
    "A Pentatonic Minor": ["A", "C", "D", "E", "G"],
    "A# Pentatonic Minor": ["A#", "C#", "D#", "F", "G#"],
    "B Pentatonic Minor": ["B", "D", "E", "F#", "A"],
    // Aggiungi altre scale se necessario...
};

// Funzione per ottenere le note di una scala specifica
const getScaleNotes = (scaleName) => {
    return scaleDefinitions[scaleName] || [];
};

// Funzione per aggiornare le opzioni del menu a tendina con le scale disponibili
const updateScaleOptions = () => {
    const scaleSelect = document.getElementById("scaleSelect");
    scaleSelect.innerHTML = ""; // Pulisce le opzioni attuali
    Object.keys(scaleDefinitions).forEach(scaleName => {
        const option = document.createElement("option");
        option.value = scaleName;
        option.textContent = scaleName;
        scaleSelect.appendChild(option);
    });
};

// Funzione per visualizzare le note della scala selezionata
const displaySelectedScaleNotes = () => {
    const scaleSelect = document.getElementById("scaleSelect");
    const selectedScale = scaleSelect.value;
    const scaleNotes = getScaleNotes(selectedScale);
    const scaleNotesDisplay = document.getElementById("scaleNotesDisplay");
    if (scaleNotesDisplay) {
        scaleNotesDisplay.textContent = `Note della scala: ${scaleNotes.join(", ")}`;
    }
};

// Inizializzazione e gestione degli eventi
document.addEventListener('DOMContentLoaded', () => {
    updateScaleOptions(); // Inizializza le opzioni del menu a tendina all'avvio della pagina
    displaySelectedScaleNotes(); // Mostra le note della scala predefinita selezionata
    
    // Aggiunge un listener per il cambiamento della selezione della scala
    document.getElementById("scaleSelect").addEventListener("change", displaySelectedScaleNotes);
});

// Assumi che scaleDefinitions sia già definita come nel tuo file scale.js

// Mappa le scale alle loro progressioni di accordi
const scaleToChordProgressions = {
    "C Major": ["I - C", "ii - Dm", "iii - Em", "IV - F", "V - G", "vi - Am", "vii° - Bdim"],
    "C# Major": ["I - C#", "ii - D#m", "iii - E#m", "IV - F#", "V - G#", "vi - A#m", "vii° - B#dim"],
    "D Major": ["I - D", "ii - Em", "iii - F#m", "IV - G", "V - A", "vi - Bm", "vii° - C#dim"],
    "D# Major": ["I - D#", "ii - Fm", "iii - Gm", "IV - G#", "V - A#", "vi - Cm", "vii° - Ddim"],
    "E Major": ["I - E", "ii - F#m", "iii - G#m", "IV - A", "V - B", "vi - C#m", "vii° - D#dim"],
    "F Major": ["I - F", "ii - Gm", "iii - Am", "IV - Bb", "V - C", "vi - Dm", "vii° - Edim"],
    "F# Major": ["I - F#", "ii - G#m", "iii - A#m", "IV - B", "V - C#", "vi - D#m", "vii° - Fdim"],
    "G Major": ["I - G", "ii - Am", "iii - Bm", "IV - C", "V - D", "vi - Em", "vii° - F#dim"],
    "G# Major": ["I - G#", "ii - A#m", "iii - Cm", "IV - C#", "V - D#", "vi - Fm", "vii° - Gdim"],
    "A Major": ["I - A", "ii - Bm", "iii - C#m", "IV - D", "V - E", "vi - F#m", "vii° - G#dim"],
    "A# Major": ["I - A#", "ii - Cm", "iii - Dm", "IV - D#", "V - F", "vi - Gm", "vii° - Adim"],
    "B Major": ["I - B", "ii - C#m", "iii - D#m", "IV - E", "V - F#", "vi - G#m", "vii° - A#dim"],
    "C Minor": ["i - Cm", "ii° - Ddim", "III - Eb", "iv - Fm", "v - Gm", "VI - Ab", "VII - Bb"],
    "C# Minor": ["i - C#m", "ii° - D#dim", "III - E", "iv - F#m", "v - G#m", "VI - A", "VII - B"],
    "D Minor": ["i - Dm", "ii° - Edim", "III - F", "iv - Gm", "v - Am", "VI - Bb", "VII - C"],
    "D# Minor": ["i - D#m", "ii° - Fdim", "III - F#", "iv - G#m", "v - A#m", "VI - B", "VII - C#"],
    "E Minor": ["i - Em", "ii° - F#dim", "III - G", "iv - Am", "v - Bm", "VI - C", "VII - D"],
    "F Minor": ["i - Fm", "ii° - Gdim", "III - Ab", "iv - Bbm", "v - Cm", "VI - Db", "VII - Eb"],
    "F# Minor": ["i - F#m", "ii° - G#dim", "III - A", "iv - Bm", "v - C#m", "VI - D", "VII - E"],
    "G Minor": ["i - Gm", "ii° - Adim", "III - Bb", "iv - Cm", "v - Dm", "VI - Eb", "VII - F"],
    "G# Minor": ["i - G#m", "ii° - A#dim", "III - B", "iv - C#m", "v - D#m", "VI - E", "VII - F#"],
    "A Minor": ["i - Am", "ii° - Bdim", "III - C", "iv - Dm", "v - Em", "VI - F", "VII - G"],
    "A# Minor": ["i - A#m", "ii° - Cdim", "III - Db", "iv - D#m", "v - Fm", "VI - Gb", "VII - Ab"],
    "B Minor": ["i - Bm", "ii° - C#dim", "III - D", "iv - Em", "v - F#m", "VI - G", "VII - A"],
    // Le scale pentatoniche non seguono le stesse progressioni di accordi tradizionali.
  };

  
  // Funzione per aggiornare le progressioni di accordi nel riquadro laterale
  function updateChordProgressions() {
    const scaleSelect = document.getElementById('scaleSelect');
    const selectedScale = scaleSelect.value;
    const progressions = scaleToChordProgressions[selectedScale];
    
    const chordProgressionsDiv = document.getElementById('chordProgressions');
    chordProgressionsDiv.innerHTML = ''; // Pulisce il contenuto esistente
  
    if (progressions) {
      const list = document.createElement('ul');
      progressions.forEach(prog => {
        const item = document.createElement('li');
        item.textContent = prog;
        list.appendChild(item);
      });
      chordProgressionsDiv.appendChild(list);
    } else {
      chordProgressionsDiv.textContent = 'Nessuna progressione di accordi disponibile per questa scala.';
    }
  }
  
  // Aggiorna le progressioni di accordi al cambio della selezione
  document.getElementById('scaleSelect').addEventListener('change', updateChordProgressions);
  