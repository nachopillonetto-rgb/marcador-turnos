// Valor inicial del turno
let turnoActual = 0;

// Referencias a elementos del DOM
const spanTurno = document.getElementById("turno-actual");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");

// Función para actualizar el display del turno
function actualizarDisplay() {
  // Siempre mostrar con 2 dígitos
  spanTurno.textContent = String(turnoActual).padStart(2, "0");
}

// Evento para el botón "Anterior"
btnAnterior.addEventListener("click", function () {
  if (turnoActual > 0) {        // No permitimos números negativos
    turnoActual--;
    actualizarDisplay();
  }
});

// Evento para el botón "Siguiente"
btnSiguiente.addEventListener("click", function () {
  turnoActual++;
  actualizarDisplay();
});

// Mostrar el 00 inicial al cargar
actualizarDisplay();