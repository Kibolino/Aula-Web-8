let tablets = ["Note 7", "iPad mini", "Asus 123"];
let eletronicos = ["Tv", ...tablets, "Rádio"];
console.log(eletronicos);

function download() {
  // 1. Create a new XMLHttpRequest object
  let xhr = new XMLHttpRequest();

  // 2. Configure it: GET-request for the URL /article/.../load
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  // 3. Send the request over the network
  xhr.send();

  // 4. This will be called after the response is received
  xhr.onload = function () {
    if (xhr.status != 200) {
      // analyze HTTP status of the response
      alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else {
      // show the result
      alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
    }
  };

  xhr.onprogress = function (event) {
    if (event.lengthComputable) {
      alert(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      alert(`Received ${event.loaded} bytes`); // no Content-Length
    }
  };

  xhr.onerror = function () {
    alert("Request failed");
  };
}
var usuarios;

function pegadados(dados) {
  //console.log(dados[0].id);
  //console.log(dados[0].address.street);
  let tbody = document.getElementById("tbody");
  for (let i = 0; i < dados.length; i++) {
    let tr = tbody.insertRow();

    let td_usuario = tr.insertCell();
    let td_nome = tr.insertCell();
    let td_email = tr.insertCell();
    let td_endereco = tr.insertCell();

    td_usuario.innerHTML = dados[i].id;
    console.log(td_usuario);
    td_nome.innerHTML = dados[i].name;
    td_email.innerHTML = dados[i].email;
    td_endereco.innerHTML = dados[i].address.street;
  }
}

function getUsuariosByFetch() {
  console.log("Antes do fetch");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => pegadados(json))
    //.then((json) => console.log(json))
    .catch((e) => console.log("ERRO na requisição" + e));

  console.log("Depois do fetch");
}


