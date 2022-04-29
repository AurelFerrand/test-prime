let prime = [];
let colab = [];
const fetchJson = fetch("./public/name.json").then((data) => data.json());

const populateSelect = async () => {
  colab = await fetchJson;
  console.log(colab);

  const ele = document.getElementById("personn");

  for (let i = 0; i < colab.length; i++) {
    ele.innerHTML =
      ele.innerHTML +
      '<option value="' +
      colab[i]["dayAlc"] +
      '">' +
      colab[i]["name"] +
      "</option>";
  }
};

const show = (ele) => {
  let entrie = colab.find(
    (f) => f.name === ele.options[ele.selectedIndex].text
  );

  entrie = Object.assign(entrie);

  const msg = document.getElementById("msg");

  msg.innerHTML =
    "</br>" +
    "Nom-Prenom: <b>" +
    entrie.name.toString() +
    "</b> </br></br>" +
    "liquide : <b>" +
    entrie.dayLip.toString() +
    "</b></br></br>" +
    "Alcool : <b>" +
    entrie.dayAlc.toString() +
    "</b></br></br>" +
    "Epicerie : <b>" +
    entrie.dayEpi.toString() +
    "</b></br></br>" +
    "Dph : <b>" +
    entrie.dayDph.toString() +
    "</b></br></br>" +
    "Jour travailler: <b>" +
    (entrie.dayDph.length +
      entrie.dayEpi.length +
      entrie.dayAlc.length +
      entrie.dayLip.length) +
    "</b></br>";
};
