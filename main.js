// Activa la escena al cargar y reemplaza la cabeza simple por pétalos de girasol.
onload = () => {
  document.body.classList.remove("container");
};

const PETAL_COUNT = 14;

document.querySelectorAll(".flower__leafs").forEach((head) => {
  // Los cuatro pétalos originales se conservan en el HTML como referencia,
  // pero se sustituyen visualmente por una corona regular de 14 pétalos.
  head.querySelectorAll(".flower__leaf").forEach((petal) => petal.remove());

  const center = head.querySelector(".flower__white-circle");
  for (let index = 0; index < PETAL_COUNT; index += 1) {
    const petal = document.createElement("span");
    petal.className = "sunflower-petal";
    petal.style.setProperty("--petal-angle", `${(360 / PETAL_COUNT) * index}deg`);
    head.insertBefore(petal, center);
  }
});
