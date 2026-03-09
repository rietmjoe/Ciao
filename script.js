const container = document.getElementById("container");
const envelope = document.getElementById("envelope");

let opened = false;

envelope.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  // 1. Deckel öffnen
  container.classList.add("open");

  // 2. Couvert ausblenden
  setTimeout(() => {
    container.classList.add("hide-envelope");
  }, 700);

  // 3. Brief einblenden
  setTimeout(() => {
    container.classList.add("show-letter");
  }, 1100);
});