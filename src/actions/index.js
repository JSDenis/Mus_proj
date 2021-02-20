import router from "../routes";
import { burgerHandle } from "../../src/components/burger";
import getPreloader from "../components/preloader";
import {
  dots, putActiveDot, getActiveSlide, putActiveSlide,
  getTemplateSlides
} from "../components/slider";
import { createRadioList } from "../components/music";
import { writeAccountData, checkLogIn } from "../components/signin";
import {
  getVariable, togglePlay, initProgressBar,
  trackPlaying
} from "../components/player";



const getContent = async () => {
  // Загрузка страницы Loading page
  await router();
  // Burger click
  let burger = document.querySelector('#menu-toggle');
  if (burger) {
    burger.addEventListener('click', burgerHandle);
  }
  // Preloader
  const preloader = document.querySelector('#main-preloader');
  if (preloader) {
    setTimeout(getPreloader, 2000);
  }
  // Slider
  let dots = document.querySelector('.items__button');
  if (dots) {
    getActiveSlide();
  }


  if (dots) {
    dots.addEventListener('click', getTemplateSlides);
  }

  // List radio
  createRadioList();


  let registerBtn = document.querySelector('#register-form');
  if (registerBtn) {
    registerBtn.addEventListener('submit', writeAccountData);
  }

  let loginFrom = document.querySelector('#login-form');
  if (loginFrom) {
    loginFrom.addEventListener('submit', checkLogIn);
  }

  // Player

  let { musicPlayToggle, audioFile, iconsPlay } = getVariable();
  musicPlayToggle.addEventListener('click', togglePlay);

  audioFile.addEventListener('timeupdate', initProgressBar);

  iconsPlay.addEventListener('click', trackPlaying);
}

export { getContent };