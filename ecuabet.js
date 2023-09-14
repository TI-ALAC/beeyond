const URI = "https://apibeeyond.alacoohperu.pe/api/ecuabet";
var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
var content3 = document.getElementById('contenido3');
var reproductor = document.getElementById("reproductor");

const URL = window.location.href;

async function init() {
  await getUser();
}

init();

async function getUser() {

  const resp = await axios.get(URI);
  const xmlData = resp.data.entry;

  console.log(xmlData)

  reproductor.innerHTML = `<video muted="" autoplay preload="auto" ><source src="${xmlData}" type="video/mp4"></video>`;  // if (xmlData) {
  //   // America
  //   const dataItem1  = xmlData.competidores[0].Name;
  //   document.getElementById('cuota3').innerHTML = dataItem5;
  // }
}