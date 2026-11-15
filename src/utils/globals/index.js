import { datasLocalstorage, locationAmount, container } from "../const/index.js";
import { remove, edit } from "../crud/index.js";
////////////////////////////// CONTADOR TOTAL //////////////////////////////////////

export function totalAMount() {
  if (datasLocalstorage.length === 0) {
    return (locationAmount.innerHTML = `<h4>total de atividades : <p>0</p></h4>`);
  }
  locationAmount.innerHTML = `<h4>total de atividades : <p>${datasLocalstorage.length}</p></h4>`;
}
////////////////////////////// SALVAR //////////////////////////////////////////////////

export function salvar() {
  const globalTitle = document.getElementById("title");
  const globalDate = document.getElementById("date");
  const globalDescription = document.getElementById("description");
  localStorage.setItem("atividade", JSON.stringify(datasLocalstorage));
  globalTitle.value = "";
  globalDate.value = "";
  globalDescription.value = "";
}

/////////////////////////////// RENDERIZAR //////////////////////////////////////

export function renderizar() {
  container.innerHTML = "";

  datasLocalstorage.forEach((element) => {
    // divs
    const div = document.createElement("div");
    const containerBotoes = document.createElement("div");
    div.className = "container_element";
    containerBotoes.className = "contaner_btn";

    // botoes
    const editar = document.createElement("button");
    const status = document.createElement("button");
    const excluir = document.createElement("button");
    status.className = "status_btn";
    editar.textContent = "Editar";
    editar.className = "btn_modifier";
    excluir.type = "button";
    excluir.innerText = "excluir";
    excluir.onclick = () => remove(element.id);
    editar.onclick = () => edit(element.id);

    // ul
    const ul = document.createElement("ul");

    // li
    const li = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    const priority = element.priority ? `${element.priority}` : "";

    li.innerHTML = `Título:<br> ${element.title}`;
    li2.innerHTML = `Data: <br>${element.date}`;
    li3.innerHTML = `Descrição:<br> ${element.description}`;
    status.textContent = `${priority}`;

    container.appendChild(div);
    div.appendChild(ul);
    div.appendChild(containerBotoes);
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    containerBotoes.appendChild(editar);
    containerBotoes.appendChild(status);
    containerBotoes.appendChild(excluir);
  });

  totalAMount();
}
