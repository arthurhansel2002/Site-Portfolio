// Aplica o tema salvo (ou o do sistema) antes da página aparecer
(function () {
  var tema = "light";
  try {
    tema = localStorage.getItem("tema") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  } catch (e) {}
  document.documentElement.setAttribute("data-theme", tema);
})();

document.addEventListener("DOMContentLoaded", function () {
  var botao = document.getElementById("tema");
  var raiz = document.documentElement;

  botao.addEventListener("click", function () {
    var novo = raiz.getAttribute("data-theme") === "dark" ? "light" : "dark";
    raiz.setAttribute("data-theme", novo);
    try { localStorage.setItem("tema", novo); } catch (e) {}
  });

  document.getElementById("ano").textContent = new Date().getFullYear();
});
