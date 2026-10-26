// hvis man ønsker at man skal ha mulighet til å spille av lyden via knapp også


const audio = document.getElementById("scary-audio");
const playBtn = document.getElementById("play-sound");

function playScarySound() {
  audio.play();
}

window.addEventListener("load", playScarySound);
document.body.addEventListener("click", playScarySound, { once: true });
playBtn.addEventListener("click", playScarySound);
