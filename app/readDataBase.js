import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";
import { app } from './firebase.js';

const db = getDatabase(app);

// Ruta completa a "invernadero"
const invernaderoRef = ref(db, 'invernadero/');

// Función para formatear fecha tipo "YYYY-MM-DD HH:MM:SS" a "MM/DD HH:MM"
function formatearFechaPersonalizada(fechaStr) {
  if (!fechaStr || typeof fechaStr !== 'string') return '--:--';
  try {
    const [fecha, hora] = fechaStr.split(' ');
    const [anio, mes, dia] = fecha.split('-');
    const [horaStr, minuto] = hora.split(':');
    return `${mes}/${dia} ${horaStr}:${minuto}`;
  } catch (error) {
    console.error('Error al formatear fecha:', error);
    return '--:--';
  }
}

// Escuchar todos los datos del invernadero
onValue(invernaderoRef, (snapshot) => {
  if (!snapshot.exists()) {
    console.warn('No hay datos en /invernadero');
    return;
  }

  const data = snapshot.val();
  const sensores = data.sensores || {};
  const config = data.configuracion || {};

  console.log(data);

  // --- Mostrar sensores ---
  document.getElementById('temperaturaActual').textContent = sensores.temperatura_celsius ?? '--';
  document.getElementById('humedadActual').textContent = sensores.humedad_porcentaje ?? '--';
  document.getElementById('ultimaLectura').textContent = sensores.nivel_agua ?? '--';
  document.getElementById('ultimoRiego').textContent = formatearFechaPersonalizada(sensores.fecha_ultimo_riego);

  // --- Mostrar configuración ---
  document.getElementById('hora_programada').textContent = config.hora_programada ?? '--';
  document.getElementById('duracion_minutos').textContent = config.duracion_minutos ?? '--';
  document.getElementById('humedad_umbral').textContent = config.humedad_umbral_activacion ?? '--';
  document.getElementById('minima_luz').textContent = config.minima_encender_luz ?? '--';
  document.getElementById('maxima_ventilador').textContent = config.maxima_encender_ventilador ?? '--';

}, (error) => {
  console.error('Error al leer datos:', error);
});


