//const GENRE = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre';
const LOCAL_GENRE = 'https://raw.githubusercontent.com/JSDenis/Mus_proj/main/src/data/genre.json';
const LOCAL_RADIO = 'https://raw.githubusercontent.com/JSDenis/Mus_proj/main/src/data/radio.json';
const LOCAL_PLAYLIST = "https://raw.githubusercontent.com/JSDenis/Mus_proj/main/src/data/playlist.json";
//const RADIO = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio&output=json';
/* const JSON_RADIO = 'http://localhost:3006/radio';
const JSON_PLAYLIST = 'http://localhost:3006/playlist'; */
const LOCAL_DATA = 'https://raw.githubusercontent.com/JSDenis/Mus_proj/main/src/data/data.json';

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
  const res = await getResource(LOCAL_DATA);
  //return res.data.map(_transformRadio).slice(0, 5);
  return res.radio.map(_transformRadio).slice(0, 5);
}

const getRadio = async (id) => {
  const res = await getResource(`${LOCAL_DATA}`);
  // return res.data.map((item, index) => {
  //   _transformConcreteRadio(item, id)
  // });
  return res.radio.map((item, index) => {
    _transformConcreteRadio(item, id)
  });
}

const getRadioCurrent = async (id) => {
  const res = await getResource(`${LOCAL_DATA}`);
  console.log(res.radio.find((item, index) => {
    if(item.id == id){
      //console.log(item);
      return item;
    }
  }));
  return res.radio.find((item, index) => {
    //_transformConcreteRadio(item, id)
    if(item.id == id){
      //console.log(item);
      return item;
    }
  }).tracklistLocal[0].preview;
}

const getAllPlaylist = async () => {
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