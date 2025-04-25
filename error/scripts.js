document.addEventListener('DOMContentLoaded', function () {
  const enlace = document.getElementById('texto');
  const container = document.getElementById('container');
  const imagen = document.getElementById('puerta');

  enlace.addEventListener('click', function (e) {
    e.preventDefault(); // Previene que siga el enlace

    if (enlace.textContent === "Maybe I'm not completely tired, but you'll never know if you don't click on me.") {
      container.style.display = "none";
      imagen.style.display = "block";
      imagen.style.animation = "abrirPuerta 3s ease-out forwards";
    } else if (enlace.textContent === "That's it, I'm angry, I'm not going back.") {
      enlace.textContent = "Maybe I'm not completely tired, but you'll never know if you don't click on me.";
    } else if (enlace.textContent === "Click me again and I'll kill you.") {
      enlace.textContent = "That's it, I'm angry, I'm not going back.";
    } else if (enlace.textContent === "You should stop wasting energy.") {
      enlace.textContent = "Click me again and I'll kill you.";
    } else if (enlace.textContent === "Why do you continue?") {
      enlace.textContent = 'You should stop wasting energy.';
    } else if (enlace.textContent === "JiJi") {
      enlace.textContent = 'Why do you continue?';
    } else if (enlace.textContent === "This page doesn't exist") {
      enlace.textContent = 'JiJi';
    }
  });
});