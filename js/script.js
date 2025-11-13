const inicioVal = document.getElementById("campo-inicio");
const fimVal = document.getElementById("campo-fim");
const passosVal = document.getElementById("campo-passos");
const campoRes = document.getElementById("campo-res");
const form = document.querySelector("form");

function showRes(event) {
  event.preventDefault();
  campoRes.innerHTML = "";
  let inicio = Number(inicioVal.value);
  let fim = Number(fimVal.value);
  let passos = Number(passosVal.value);

  if (passos != 0) {
    if (inicio < fim) {
      for (let i = inicio; i <= fim; i += passos) {
        campoRes.innerHTML += `${i} > `;
      }
    } else {
      for (let i = inicio; i >= fim; i -= passos) {
        campoRes.innerHTML += `${i} > `;
      }
    }
    campoRes.innerHTML += `🏁`;
  } else {
    alert("[ERRO] Digite um número maior que 0");
  }
  inicioVal.value = "";
  fimVal.value = "";
  passosVal.value = "";
}

form.addEventListener("submit", showRes);
