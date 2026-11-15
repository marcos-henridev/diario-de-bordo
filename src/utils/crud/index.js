import {
  idEdit,
  setIdEdit,
  datasLocalstorage,
  ediatarAtividade,
  removeElemente,
} from "../const/index.js";
import { renderizar, salvar } from "../globals/index.js";

export const edit = (id) => {
  const setTitle = document.getElementById("title");
  const setDate = document.getElementById("date");
  const setDescription = document.getElementById("description");
  const idCapter = datasLocalstorage.find((element) => element.id === id);

  setTitle.value = idCapter.title;
  setDate.value = idCapter.date;
  setDescription.value = idCapter.description;

  setIdEdit(idCapter.id);
  console.log(idEdit);
};

// salvar edição
export function saveEdit() {
  const newtitle = document.getElementById("title").value;
  const newDate = document.getElementById("date").value;
  const newDescription = document.getElementById("description").value;

  const objetoEditado = {
    title: newtitle,
    date: newDate,
    description: newDescription,
  };

  ediatarAtividade(objetoEditado);
  salvar();
  renderizar();
  setIdEdit(null);
}

export const remove = (id) => {
  removeElemente(id);

  salvar();

  renderizar();
};
