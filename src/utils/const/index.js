// botões de prioridade: só um fica ativo por vez
export const priorityButtons = document.querySelectorAll(".qualifications");
priorityButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    priorityButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
export const form = document.querySelector(".form");
export const container = document.querySelector(".datas-entries");
export let datasLocalstorage =
  JSON.parse(localStorage.getItem("atividade")) || [];
export const locationAmount = document.querySelector(".amount");
export let idEdit;

export function setIdEdit(novoValor) {
  idEdit = novoValor;
}
export function ediatarAtividade(objetoEditado) {
  datasLocalstorage = datasLocalstorage.map((item) =>
    item.id === idEdit ? { ...item, ...objetoEditado } : item,
  );
}
export function removeElemente(id) {
  datasLocalstorage = datasLocalstorage.filter((element) => {
    return element.id !== id;
  });
}
