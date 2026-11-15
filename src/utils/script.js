import { form, datasLocalstorage, idEdit } from "./const/index.js";
import { saveEdit } from "./crud/index.js";
import { salvar, renderizar, totalAMount } from "./globals/index.js";
flatpickr("#date", {
  inline: true, // calendário sempre aberto na tela
  locale: "pt", // meses e dias em português
  dateFormat: "Y-m-d", // valor salvo: 2026-11-15
  altInput: true, // mostra para o usuário em outro formato...
  altFormat: "d/m/Y", // ...15/11/2026
  onChange: (datas, dataTexto) => {
    localStorage.setItem("date", dataTexto); // salva quando escolhe um dia
  },
});
// evento de clique
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (idEdit) {
    return saveEdit();
  }
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;
  const priority = document.querySelector(".qualifications.active").textContent;

  const newAtiviment = {
    id: Date.now(),
    title: title,
    date: date,
    description: description,
    priority: priority,
  };

  datasLocalstorage.push(newAtiviment);
  salvar();

  renderizar();
});
renderizar();
totalAMount();
