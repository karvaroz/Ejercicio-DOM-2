import { registerImage } from "./lazy.js";
import { createImageNodes } from "./utils.js";

// Cargue las imagenes existentes cuando cargue la página
const allImages = document.querySelectorAll("img[data-src]");
allImages.forEach(registerImage);

// Agregar nuevas imagenes
const imageContainer = document.querySelector("#images");
const button = document.querySelector("button[type='submit']");
button.addEventListener("click", () => {
  const [node, image] = createImageNodes();
  registerImage(image);
  imageContainer.append(node);
});

// Limpiar
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
  imageContainer.innerHTML = "";
});
