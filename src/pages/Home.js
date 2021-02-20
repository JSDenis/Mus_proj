import firstImage from "../images/5eb63513bf879image.jpg";
import secondImage from "../images/WhatsGoodnewsimage.jpg";
import thirdImage from "../images/best-dance-clubs-lisbon-portugal.jpg";
import fourthImage from "../images/underground2.jpg";
import fifthImage from "../images/How-to-Make-a-Good-Spotify-Playlist-e1559562327608.jpeg";
import "../styles/css/materialize.min.css";
import "../styles/scss/main2.css";
import "../styles/css/player.css";
import regeneratorRuntime from "regenerator-runtime";

import { createRadioList, createPlayList } from "../components/music";





const Home = async () => {
  const radioList = await createRadioList();
  const playList = await createPlayList();
  const view = `
    <div class="preloader-wrapper active main__preloader" id="main-preloader">
    <div class="spinner-layer spinner-red-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="gap-patch">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>

  <div id="root">
    <nav class="top__nav">
      <div class="header__menu">
        <div class="first__temp"></div>
        <div id="menu-toggle" class="menu__toggle active__element">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>
        <div class="menu__content">
          <div class="sign__in">Войти</div>
          <div class="menu__content__items">
            <div>
              <a href="#">
                <span class="item__icon material-icons">home</span>
                <span class="item__text">Home page</span>
              </a>
            </div>
          </div>
          <div class="menu__content__items">
            <div>
              <a href="#">
                <span class="item__icon material-icons">radio</span>
                <span class="item__text">Radio channels</span>
              </a>
            </div>
          </div>
          <div class="menu__content__items">
            <div>
              <a href="#">
                <span class="item__icon material-icons">library_music</span>
                <span class="item__text">Podcasts</span>
              </a>
            </div>
          </div>
          <div class="menu__content__items">
            <div>
              <a href="#">
                <span class="item__icon material-icons">event_note</span>
                <span class="item__text">Events</span>
              </a>
            </div>
          </div>
          <div class="menu__content__items more__items">
            <div>
              <span class="item__list">
                <span class="item__text">More</span>
                <span class="item__icon material-icons">chevron_right</span>
              </span>
              <div class="sub__menu">
                <div class="sub__items">
                  <div>
                    <a href="#">
                      <span class="item__text">News</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span class="item__text">Vacancies</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span class="item__text">Contacts</span>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span class="item__text">About Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="social__block">
            <div class="items">
              <a href="#" class="material-icons">email</a>
              <a href="#" class="material-icons">call</a>
              <a href="#" class="material-icons">ondemand_video</a>
            </div>
          </div>
        </div>
      </div>
      <div class="logo">
        Your Logo
      </div>
      <div class="sign__in__desktop">
        <p>Войти</p>
      </div>
    </nav>

    <div class="main__wrapper">
      <div class="row">
        <div class="col s12 items__slider">
          <!-- <div class="active__item"> -->
          <div
            class="all__items"
            style="width: 12000px; transform: translate3d(-430px, 0px, 0px);"
          >
            <div class="item__photo prev__item" data-item-photo="-1">
              <img src="${firstImage}" alt="photo1" />
            </div>
            <div class="item__photo active__item" data-item-photo="0">
              <img src="${secondImage}" alt="photo3" />
            </div>
            <div class="item__photo next__item" data-item-photo="1">
              <img
                src="${thirdImage}"
                alt="photo2"
              />
            </div>
            <div class="item__photo" data-item-photo="2">
              <img src="${fourthImage}" alt="photo4" />
            </div>
            <div class="item__photo" data-item-photo="3">
              <img
                src="${fifthImage}"
                alt="photo5"
              />
            </div>
            <!-- loop slides-->
            <div class="item__photo" data-item-photo="4">
              <img src="${firstImage}" alt="photo1" />
            </div>
            <div class="item__photo" data-item-photo="5">
              <img src=".${secondImage}" alt="photo3" />
            </div>
            <div class="item__photo" data-item-photo="6">
              <img
                src="${thirdImage}"
                alt="photo2"
              />
            </div>
            <div class="item__photo" data-item-photo="7">
              <img src="${fourthImage}" alt="photo4" />
            </div>
            <div class="item__photo" data-item-photo="8">
              <img
                src="${fifthImage}"
                alt="photo5"
              />
            </div>
          </div>
          <!-- </div> -->
          This div is 12-columns wide on all screen sizes
          <ul class="items__button">
            <li class="dot__item dot__active">
              <button>1</button>
            </li>
            <li class="dot__item">
              <button>1</button>
            </li>
            <li class="dot__item">
              <button>1</button>
            </li>
            <li class="dot__item">
              <button>1</button>
            </li>
            <li class="dot__item">
              <button>1</button>
            </li>
          </ul>
        </div>
        <!--  <div class="col s6">6-columns (one-half)</div>
              <div class="col s6">6-columns (one-half)</div> -->
      </div>
    </div>

    <div class="info__list">
      <a href="#"
        >Радиоканалы
        <i class="material-icons">chevron_right</i>
      </a>
    </div>

    <ul class="icons__play">
      <li>
        <div class="item__playing">
          <div>
            <i class="material-icons large item__play">library_music</i>
            <div class="play__tumbler">
              <i class="material-icons large item__play__music">play_arrow</i>
            </div>
          </div>
        </div>

        <p>New list</p>
      </li>
      ${radioList}
    </ul>

    <div class="play__list__wrapper">
      <div class="info__list">
        <a href="#"
          >Плейлисты
          <i class="material-icons">chevron_right</i>
        </a>
      </div>
      <!---->
      <div class="play__list">
        <div class="play__items">
          <div class="item">
            <div class="content__item">
              <a class="current__playlist" href="#">
                <div>
                  <img src="${fifthImage}" alt="photo1" />
                </div>
                <span>First item</span>
              </a>
            </div>
          </div>
          <!---->
        </div>
      </div>
    </div>


    <div class="play__list__wrapper">
      <div class="info__list">
        <a href="#"
          >Плейлисты
          <i class="material-icons">chevron_right</i>
        </a>
      </div>
      <!---->
      <div class="play__list">
        <div class="play__items">
          <div class="item">
            <div class="content__item">
              <a class="current__playlist" href="#">
                <div>
                  <img src="${fifthImage}" alt="photo1" />
                </div>
                <span>First item</span>
              </a>
            </div>
          </div>
          ${playList}
          <!---->
        </div>
      </div>
    </div>

    <div class="collection">
      <a href="#!" class="collection-item"
        ><span class="badge">1</span>Alan</a
      >
      <a href="#!" class="collection-item"
        ><span class="new badge">4</span>Alan</a
      >
      <a href="#!" class="collection-item">Alan</a>
      <a href="#!" class="collection-item"
        ><span class="badge">14</span>Alan</a
      >
    </div>


    <div class="row">
      <div class="col s1">1</div>
      <div class="col s1">2</div>
      <div class="col s1">3</div>
      <div class="col s1">4</div>
      <div class="col s1">5</div>
      <div class="col s1">6</div>
      <div class="col s1">7</div>
      <div class="col s1">8</div>
      <div class="col s1">9</div>
      <div class="col s1">10</div>
      <div class="col s1">11</div>
      <div class="col s1">12</div>
    </div>

    
  </div>
    `;
  return view;
}

export default Home;