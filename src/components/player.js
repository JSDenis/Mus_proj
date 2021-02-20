import { getRadioCurrent } from "../utils/getDataLocal";

const getVariable = () => {
  const audioFile = document.querySelector('#audio');
  const musicPlayToggle = document.querySelector('#playAudio');
  const percentage = document.querySelector('#percentage');
  const currentTime = document.querySelector('#currentTime');
  const seekObj = document.querySelector('#seekObj');
  const iconsPlay = document.querySelector('.icons__play');

  return {
    audioFile: audioFile,
    musicPlayToggle: musicPlayToggle,
    percentage,
    currentTime,
    seekObj,
    iconsPlay
  }
};

const togglePlay = () => {
  let { audioFile, musicPlayToggle } = getVariable();
  if (audioFile.paused === false) {
    audioFile.pause();
    musicPlayToggle.innerHTML = '<i class="material-icons small">play_arrow</i>';
  } else {
    audioFile.play();
    musicPlayToggle.innerHTML = '<i class="material-icons small">pause</i>';
  }
}

const indicatorPlayed = () => {
  const { percentage, audioFile } = getVariable();
  let percentageCurrent = (audioFile.currentTime / audioFile.duration).toFixed(2) * 100;
  percentage.style.width = `${percentageCurrent}%`;
}

const calculateCurrentValue = (currentTime) => {
  const currentMinute = parseInt(currentTime / 60) % 60;
  const currentSecond = currentTime % 60;
  const currentSec = currentSecond.toFixed();
  const currentTimeFormat = `${currentMinute < 10 ?
    `0${currentMinute}` : currentMinute}: 
     ${currentSec < 10 ? `0${currentSec}` : currentSec} `;

  return currentTimeFormat;
};

const initProgressBar = () => {
  let { audioFile, currentTime, seekObj, musicPlayToggle, percentage }
    = getVariable();
  const currentTimeActual = calculateCurrentValue(audioFile.currentTime);
  currentTime.innerHTML = currentTimeActual;

  audioFile.addEventListener('ended', () => {
    percentage.style.width = 0;
    currentTime.innerHTML = '00:00';
  });

  /* const seek = (e) => {
    const percent = e.offsetX / this.offsetWidth
  } */

  indicatorPlayed();
}

const trackPlaying = async (e) => {
  const currentRadio = await getRadioCurrent(e.target.dataset.id);

  console.log(currentRadio);
  let { audioFile } = getVariable();
  const isPlayButton = e.target.classList.contains('item__play__music');

  audioFile.innerHTML = `
  <source src="${currentRadio}" type="audio/mp3">
  `;

  if (isPlayButton) {
    if (e.target.innerHTML === 'play_arrow') {
      e.target.innerHTML = 'pause';
      audioFile.play();
    } else {
      e.target.innerHTML = 'play_arrow';
      audioFile.pause();
    }
  }
}

export { getVariable, togglePlay, initProgressBar, trackPlaying };