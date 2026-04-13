// Seleciona elementos
const form = document.getElementById("form-conversor");
const entrada = document.getElementById("entrada");
const tipo = document.getElementById("tipo-conversao");
const resultado = document.getElementById("resultado");

// Evento do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(entrada.value);

  // Validação
  if (isNaN(valor) || entrada.value.trim() === "") {
    resultado.textContent = "Digite um número válido";
    return;
  }

  const milhasParaKm = tipo.value === "milhasParaKm";

  let valorConvertido;

  if (milhasParaKm) {
    valorConvertido = valor * 1.60934;
  } else {
    valorConvertido = valor / 1.60934;
  }

  const valorFormatado = valorConvertido.toFixed(2);

  let textoResultado;

  if (milhasParaKm) {
    textoResultado = `${valor} milhas são ${valorFormatado} km`;
  } else {
    textoResultado = `${valor} km são ${valorFormatado} milhas`;
  }

  resultado.textContent = textoResultado;
});