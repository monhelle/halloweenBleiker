// Nettlesere blokkerer lyd før bruker har klikket/trykt
const audio = document.getElementById("scary-audio");
const playBtn = document.getElementById("play-sound");

function playScarySound() {
  if (!audio) return;

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(function () {
      // Autoplay blokkert — venter på klikk
    });
  }
}

function toggleSound() {
  if (!audio) return;

  if (audio.paused) {
    playScarySound();
  } else {
    audio.pause();
  }
}

document.body.addEventListener("click", playScarySound, { once: true });

if (playBtn) {
  playBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleSound();
  });
}
