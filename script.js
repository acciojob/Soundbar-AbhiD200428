const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.remove();
    }

    const sound = btn.textContent.trim();

    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}.mp3`;
    audio.autoplay = true;

    document.body.appendChild(audio);

    currentAudio = audio;
  });
});

stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.remove();
    currentAudio = null;
  }
});