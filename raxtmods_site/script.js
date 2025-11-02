document.addEventListener("DOMContentLoaded", () => {
  const loginSection = document.getElementById("login-section");
  const mainContent = document.getElementById("main-content");
  const loginForm = document.getElementById("login-form");
  const logoutBtn = document.getElementById("logout-btn");

  // Revisar si ya hay sesión guardada
  const loggedUser = localStorage.getItem("raxtmods_user");

  if (loggedUser) {
    loginSection.style.display = "none";
    mainContent.style.display = "block";
  } else {
    loginSection.style.display = "flex";
    mainContent.style.display = "none";
  }

  // Manejar envío del formulario
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (name && email && password) {
        localStorage.setItem("raxtmods_user", JSON.stringify({ name, email }));
        loginSection.style.display = "none";
        mainContent.style.display = "block";
        alert("✅ Bienvenido a Raxt Mods, " + name + "!");
      } else {
        alert("Por favor completa todos los campos.");
      }
    });
  }

  // Botón de cerrar sesión
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("raxtmods_user");
      loginSection.style.display = "flex";
      mainContent.style.display = "none";
    });
  }
});
