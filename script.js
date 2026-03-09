const stage = document.getElementById("stage");
const envelope = document.getElementById("envelope");

let opened = false;

envelope.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  stage.classList.add("open");

  setTimeout(() => {
    stage.classList.add("hide-envelope");
  }, 700);

  setTimeout(() => {
    stage.classList.add("show-letter");
  }, 1050);
});