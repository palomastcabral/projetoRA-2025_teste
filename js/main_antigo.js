window.addEventListener("DOMContentLoaded", () => {
  const marker = document.querySelector("#meu-marker");
  marker.addEventListener("markerFound", () => {
    console.log("Marcador encontrado!");
  });
});
