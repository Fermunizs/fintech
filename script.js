const toggleSenha = document.getElementById("toggleSenha");
const senha = document.getElementById("senha");

toggleSenha.addEventListener("click", () => {
  if (senha.type === "password") {
    senha.type = "text";
    toggleSenha.textContent = "🙈";
  } else {
    senha.type = "password";
    toggleSenha.textContent = "👁️";
  }
});
