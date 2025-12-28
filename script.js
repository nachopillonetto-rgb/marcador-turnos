"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let turno = 0;
const turnoActual = document.getElementById("turno-actual");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");
const formatearTurno = (n) => n.toString().padStart(2, "0");
const pintar = () => {
    turnoActual.textContent = formatearTurno(turno);
};
btnSiguiente.addEventListener("click", () => {
    turno++;
    pintar();
});
btnAnterior.addEventListener("click", () => {
    if (turno > 0)
        turno--;
    pintar();
});
pintar();
//# sourceMappingURL=script.js.map