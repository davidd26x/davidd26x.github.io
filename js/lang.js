function cambiarIdioma(idioma) {
  const elementos = document.querySelectorAll("[data-es]");

  elementos.forEach(el => {
    el.textContent = el.getAttribute(`data-${idioma}`);
  });
}

document.getElementById("btn-es").addEventListener("click", () => cambiarIdioma("es"));
document.getElementById("btn-en").addEventListener("click", () => cambiarIdioma("en"));
