// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Same bed but it feels just a little bit bigger now", time: 11 },
  { text: "Our song on the radio but it don't sound the same", time: 18 },
  { text: "When our friends talk about you, all it does is just tear me down", time: 25 },
  { text: "Cause my heart breaks a little when I hear your name", time: 31 },
  { text: "It all just sounds like ooh, ooh, ooh, ooh, ooh", time: 33 },
  { text: "Mmm, too young, too dumb to realize", time: 44 },
  { text: "That I should have bought you flowers", time: 48 },
  { text: "And held your hand", time: 51 },
  { text: "Should have gave you all my hours", time: 53 },
  { text: "When I had the chance", time: 59 },
  { text: "Take you to every party 'cause all you wanted to do was dance", time: 60 },
  { text: "Now my baby's dancing", time: 69 },
  { text: "But she's dancing with another man", time: 72 },
  { text: "My pride, my ego, my needs, and my selfish ways", time: 81 },
  { text: "Caused a good strong woman like you to walk out my life", time: 87 },
  { text: "Now I never, never get to clean up the mess I made", time: 93 },
  { text: "And it haunts me every time I close my eyes", time: 101 },
  { text: "It all just sounds like ooh, ooh, ooh, ooh, ooh", time: 105 },
  { text: "Mmm, too young, too dumb to realize", time: 114 },
  { text: "That I should have bought you flowers", time: 118 },
  { text: "And held your hand", time: 122 },
  { text: "Should have gave you all my hours", time: 125 },
  { text: "When I had the chance", time: 127 },
  { text: "Take you to every party 'cause all you wanted to do was dance", time: 129 },
  { text: "Now my baby's dancing", time: 137 },
  { text: "But she's dancing with another man", time: 141 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Mostrar el botón después de 14 segundos
setTimeout(function() {
  var btn = document.getElementById('btn-carta');
  btn.classList.add('visible');
}, 14000);

// Mostrar la carta
document.getElementById('btn-carta').onclick = function() {
  document.getElementById('carta-modal').classList.add('active');
};
// Cerrar la carta
document.getElementById('carta-cerrar').onclick = function() {
  document.getElementById('carta-modal').classList.remove('active');
};
// Cerrar al hacer click fuera del contenido
document.getElementById('carta-modal').onclick = function(e) {
  if(e.target === this) this.classList.remove('active');
};