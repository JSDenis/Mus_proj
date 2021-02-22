//const GENRE = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre';
const LOCAL_GENRE = 'https://raw.githubusercontent.com/JSDenis/Mus_proj/main/src/data/genre.json';
const LOCAL_RADIO = 'https://raw.githubusercontent.com/JSDenis/Mus_proj/main/src/data/radio.json';
const LOCAL_PLAYLIST = "https://raw.githubusercontent.com/JSDenis/Mus_proj/main/src/data/playlist.json";
//const RADIO = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio&output=json';
/* const JSON_RADIO = 'http://localhost:3006/radio';
const JSON_PLAYLIST = 'http://localhost:3006/playlist'; */

console.log(LOCAL_RADIO);

/* "https://raw.githubusercontent.com/JSDenis/Mus_proj/main/src/data/genre.json"
"https://jsdenis.github.io/src/data/genre.json" */


const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error code////////// ${res.status}`);
  }

  return res.json();
}

const getAllRadio = async () => {
  debugger;
  const res = await getResource(LOCAL_RADIO);
  return res.data.map(_transformRadio).slice(0, 5);
}

const getRadio = async (id) => {
  debugger;
  const res = await getResource(`${LOCAL_RADIO}`);
  return res.data.map((item, index) => {
    _transformConcreteRadio(item, id)
  });
}

const getRadioCurrent = async (id) => {
  debugger;
  const res = await getResource(`${LOCAL_RADIO}`);
  return res.data.map((item, index) => {
    _transformConcreteRadio(item, id)
  }).tracklistLocal[0].preview;
}

const getAllPlaylist = async () => {
  debugger;
  const res = await getResource(LOCAL_PLAYLIST);
  return res.tracks.data.map(_transformPlayList).slice(0, 5);
}

const getPlayList = async (id) => {
  debugger;
  const res = await getResource(`${LOCAL_PLAYLIST}/${id}`);
  return res.tracks.data[id];
}

const _transformRadio = (item) => {
  return {
    id: item.id,
    title: item.title,
    picture: item.picture,
    pictureBig: item.picture_big
  }
}

const _transformPlayList = (item) => {
  return {
    id: item.id,
    title: item.title,
    artist: item.artist,
    album: item.album,
    picture: item.picture,
    pictureBig: item.picture_big
  }
}

const _transformConcreteRadio = (item, id) => {
  if(item.id == id){
    console.log(item);
    return item;
  }
}

export { getAllRadio, getRadio, getAllPlaylist, getPlayList, getRadioCurrent };