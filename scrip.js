// java.js (script principal)
// Reemplaza o centraliza la lógica que antes estaba en app.js.

document.addEventListener('DOMContentLoaded', () => {
  // Hora actual
  const horaEl = document.getElementById('hora-actual');
  if (horaEl) {
    const actualizarHora = () => {
      const ahora = new Date();
      horaEl.textContent = ahora.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
    };
    actualizarHora();
    setInterval(actualizarHora, 60_000);
  }

  // Fecha actual
  const fechaEl = document.getElementById('fecha-actual');
  if (fechaEl) {
    const actualizarFecha = () => {
      const ahora = new Date();
      fechaEl.textContent = `Hoy: ${ahora.toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
    };
    actualizarFecha();
  }

  // Quiz (si existe)
  window.responder = function (opcion) {
    const resultado = document.getElementById('resultado');
    if (!resultado) return;

    // Ejemplo simple (puedes cambiar lógica/BD)
    const correcta = 'A';
    if (opcion === correcta) {
      resultado.textContent = '¡Correcto!';
    } else {
      resultado.textContent = 'Incorrecto. Intenta de nuevo.';
    }
  };

  // Modo nocturno (si existe el botón)
  const btnModo = document.getElementById('btn-modo-nocturno');
  if (btnModo) {
    btnModo.addEventListener('click', () => {
      document.body.classList.toggle('modo-nocturno');
    });
  }

  // Popup bienvenida (si existe)
  const bienvenida = document.getElementById('bienvenida');
  if (bienvenida) {
    bienvenida.classList.add('mostrar');
    setTimeout(() => bienvenida.classList.add('ocultar'), 5000);
    setTimeout(() => bienvenida.remove(), 6500);
  }

  // Frase del día (si existe)
  const fraseEl = document.getElementById('frase');
  if (fraseEl) {
    const frases = [
      'La educación es el arma más poderosa para cambiar el mundo.',
      'Aprender hoy es construir tu futuro.',
      'Constancia y disciplina: esa es la clave.'
    ];
    const idx = new Date().getDate() % frases.length;
    fraseEl.textContent = frases[idx];
  }
});

// Calendario: cambiar mes (si existen los contenedores)
window.mostrarMes = function (mes) {
  const ids = ['abril', 'mayo', 'junio', 'julio'];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = id === mes ? 'block' : 'none';
  });
};

