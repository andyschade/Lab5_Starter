// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let select = document.getElementById('horn-select');
  let button = document.querySelector("button");
  var image = "assets/images/no-image.png";
  var volumeLevel = 50;
  document.getElementById('volume').oninput = function () {
    let volume = document.getElementById('volume').value;
    let volumeInt = parseInt(volume);
    volumeLevel = volumeInt;
    let volumeImage = document.getElementById('volume-controls').getElementsByTagName('img')[0];
    if (volumeInt == 0) { volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (volumeInt < 34) {  volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (volumeInt < 68) {  volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {  volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  }
  button.addEventListener("click", (event) => {
    let audiofile = document.querySelector('audio');
    if (image == "party-horn") {
      audiofile.src = "assets/audio/party-horn.mp3";
      const fetti = new JSConfetti();
      fetti.addConfetti();
      audiofile.play();
      audiofile.volume = volumeLevel / 100;
    } else if (image == "air-horn") {
      audiofile.src = "assets/audio/air-horn.mp3";
      audiofile.play();
      audiofile.volume = volumeLevel / 100;
    } else {
      audiofile.src = "assets/audio/car-horn.mp3";
      audiofile.play();
      audiofile.volume = volumeLevel / 100;
    }
  });
  select.addEventListener('change', (event) => {
    let img = document.querySelector('img');
    image = event.target.value;
    if (image == "car-horn") {  img.src = 'assets/images/car-horn.svg';
    } else if (image == "air-horn") { img.src = 'assets/images/air-horn.svg';
    } else {  img.src = 'assets/images/party-horn.svg';
    }
  });
}