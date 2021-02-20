import { getAllRadio, getAllPlaylist } from "../utils/getDataLocal";

const createRadioList = async () => {
  const dataItems = await getAllRadio();
  /* console.log(dataItems); */
  let list = '';

  dataItems.forEach((item, index) => {
    list += `
            <li>
            <div class="item__playing">
              <div>
                <i class="material-icons large item__play">library_music</i>
                <div class="play__tumbler">
                  <i class="material-icons large item__play__music" data-id="${item.id}">play_arrow</i>
                </div>
              </div>
            </div>
  
            <p>${item.title}</p>
          </li>
      `
  })

  return list;
}

const createPlayList = async () => {
  const dataItems = await getAllPlaylist();
  /* console.log(dataItems); */
  let list = '';

  dataItems.forEach((item, index) => {
    list += `
      <div class="item">
      <div class="content__item">
        <a class="current__playlist" href="#">
          <div>
            <img src="${item.album.cover_medium}" alt="photo1" />
          </div>
          <span>${item.title}</span>
        </a>
      </div>
    </div>
      `
  })

  return list;
}


export { createRadioList, createPlayList };