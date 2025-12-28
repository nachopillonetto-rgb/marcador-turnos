let turno: number = 0;

const turnoActual = document.getElementById("turno-actual") as HTMLSpanElement;
const btnAnterior = document.getElementById("btn-anterior") as HTMLButtonElement;
const btnSiguiente = document.getElementById("btn-siguiente") as HTMLButtonElement;

const formatearTurno = (n: number): string => n.toString().padStart(2, "0");

const pintar = (): void => {
  turnoActual.textContent = formatearTurno(turno);
};

btnSiguiente.addEventListener("click", () => {
  turno++;
  pintar();
});

btnAnterior.addEventListener("click", () => {
  if (turno > 0) turno--;
  pintar();
});
pintar();
