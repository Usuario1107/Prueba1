import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";
import { app } from './firebase.js';
import { showMessage } from './showMessage.js'; // Tu sistema de notificación personalizado

const db = getDatabase(app);

document.getElementById('btguardar').addEventListener('click', () => {
  const horaRiego = document.getElementById('horaRiego').value;
  const duracionMinuto = document.getElementById('tiempoMinuto').value;
  const humedadActivacion = document.getElementById('humedadActivacion').value;
  const minimaFoco = document.getElementById('minimaFoco').value;
  const maximaVentilador = document.getElementById('maximaVentilador').value;

  const configuracionActualizada = {};

  // ✅ Guardar la hora en formato 24h si hay valor
  if (horaRiego) {
    configuracionActualizada.hora_programada = horaRiego; // Ej: 13:00
  }

  // ✅ Validar enteros y agregar solo los válidos
  function validarEntero(id, nombreCampo, min, max, claveFirebase) {
    const valor = document.getElementById(id).value;
    if (valor !== '') {
      const numero = Number(valor);
      if (!Number.isInteger(numero) || numero < min || numero > max) {
        showMessage(`${nombreCampo} debe ser un número entero entre ${min} y ${max}`, "error");
        throw new Error(`${nombreCampo} inválido`);
      } else {
        configuracionActualizada[claveFirebase] = numero;
      }
    }
  }

  try {
    validarEntero('tiempoMinuto', 'Duración (minutos)', 1, 59, 'duracion_minutos');
    validarEntero('humedadActivacion', 'Humedad de activación (%)', 0, 100, 'humedad_umbral_activacion');
    validarEntero('minimaFoco', 'Temperatura mínima para foco (°C)', 0, 40, 'minima_encender_luz');
    validarEntero('maximaVentilador', 'Temperatura máxima para ventilador (°C)', 10, 50, 'maxima_encender_ventilador');
  } catch (error) {
    console.error(error.message);
    return; // Detener si algún valor es inválido
  }

  if (Object.keys(configuracionActualizada).length === 0) {
    showMessage("No hay datos para actualizar. Completa al menos un campo.", "error");
    return;
  }

  // ✅ Guardar en Firebase solo lo válido
  update(ref(db, 'invernadero/configuracion'), configuracionActualizada)
    .then(() => {
      showMessage("Configuración actualizada", "success");

      // Limpiar los inputs
      document.getElementById('horaRiego').value = '';
      document.getElementById('tiempoMinuto').value = '';
      document.getElementById('humedadActivacion').value = '';
      document.getElementById('minimaFoco').value = '';
      document.getElementById('maximaVentilador').value = '';
    })
    .catch((error) => {
      console.error("Error al guardar en Firebase:", error);
      showMessage("Error al guardar configuración ❌", "error");
    });
});
