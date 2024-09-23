const btn = document.querySelector("header nav ul li:last-child");
console.log(btn);

// Imposta il punto dopo il quale cambiare colore (es. 100px dall'inizio)
const changePoint = 200;

// Funzione per controllare lo scroll
window.onscroll = function () {
  if (window.scrollY > changePoint) {
    btn.style = "background-color: green"; // Aggiungi la classe quando supera il punto
  } else {
    btn.style = "background-color: black"; // Rimuovi la classe quando torna sopra il punto
  }
};

const gs = document.querySelectorAll("svg g g g g g path");
console.log(gs);

// Funzione per far apparire/scomparire una lettera in modo casuale
function toggleRandomLetter() {
  const randomIndex = Math.floor(Math.random() * gs.length);
  const randomLetter = gs[randomIndex];

  // Controlla se la lettera è visibile (opacità 1)
  if (randomLetter.style.opacity == 1 || randomLetter.style.opacity === "") {
    randomLetter.style.opacity = 0; // Nascondi la lettera
  } else {
    randomLetter.style.opacity = 1; // Mostra la lettera
  }
}

// Chiama la funzione ogni 1 secondo (1000ms) per far comparire/scomparire casualmente
setInterval(toggleRandomLetter, 1);
