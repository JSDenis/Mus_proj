import getHash from "../utils/getHash";
import {getRadio} from "../utils/getDataMusic";



const RadioItem = async () => {
  const id = getHash();
  const radio = await getRadio(id);
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

export default RadioItem;