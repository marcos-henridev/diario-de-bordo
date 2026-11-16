// botões de prioridade: só um fica ativo por vez

export const priorityButtons = document.querySelectorAll(".qualifications");
priorityButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    priorityButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
export const iconsPerfil = [
  "Robozinho@1x.png",
  "Cacto@1x.png",
  "Cafezinho@1x.png",
  "Planeta@1x.png",
  "Sorvete@1x.png",
];
export const pastaIcons = "../public/iconsPerfil/";
export const fotoPerfil = document.querySelector(".foto_perfil");
export const SubMenuToggle = document.querySelector(".subm-menu");
export const seta_sub_subMenu = document.querySelector(".btn_seta-SubMenu");
export const iconSub = document.querySelector(".icons");
export const buttonOpenMenu = document.querySelector(".btn_seta-menu");
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
