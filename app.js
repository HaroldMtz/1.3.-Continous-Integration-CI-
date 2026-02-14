const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
const fecha = document.getElementById("fecha");

fecha.textContent = new Date().toLocaleString();

btn.addEventListener("click", () => {
  msg.textContent = "Funciona el JS. CI probado con Webapp.io.";
});
