import getHash from "../utils/getHash";
import {getPlayList} from "../utils/getDataMusic";



const PlayList = async () => {
  const id = getHash();
  const radio = await getPlayList(id);
  const view = `
    <div class="container">
      <h2>Radio Page<h2>
      <h2>${radio.title}<h2>
      <p>About radio</p>
      <img src="${radio.picture_medium}">
    </div>
  `;
  return view;
}

export default PlayList;