document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio automático do formulário

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  alert("Mensagem enviada com sucesso!");

  // Limpa os campos do formulário
  this.reset();
});
