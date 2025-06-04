let botao = document.getElementById("add");
let lista = document.querySelector("#lista");

botao.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Foi");
  let campo = document.querySelector("input");
  let item = document.createElement("li");
  lista.appendChild(item);
  item.innerHTML =
    "<span class='texto'>" +
    campo.value +
    "</span> <span class='remover'>Delete</span> <span class='editar'>Edit</span>";
  campo.value = "";
});

lista.addEventListener("click", function (evt) {
  evt.preventDefault();
  let elemento = evt.target;
  console.log(elemento.className);
  if (elemento.className == "remover") {
    elemento.parentElement.remove();
  } else if (elemento.className == "editar") {
    elemento.parentElement.querySelector(".texto").contentEditable = true;
    elemento.parentElement.querySelector(".texto").focus();
  }
});
