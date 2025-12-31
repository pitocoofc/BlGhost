
function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!user) {
    alert("Digite seu nome");
    return;
  }

  if (!/^\d{6}$/.test(pass)) {
    alert("A senha deve ter exatamente 6 dígitos numéricos");
    return;
  }

  // temporário (depois vira API)
  localStorage.setItem("user", user);
  localStorage.setItem("token", "mock-token");

  // redirecionar
  window.location.href = "app.html";
}
