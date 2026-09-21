// Hace aparecer el rollo después de que las flores hayan crecido.
window.addEventListener("load", () => {
  window.setTimeout(() => {
    document.querySelector(".filmstrip")?.classList.add("filmstrip--visible");
  }, 6000);
});
