import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";
import { app } from './firebase.js';

const db = getDatabase(app);
const sensoresRef = ref(db, 'invernadero/sensores');

// Función para formatear fecha tipo "YYYY-MM-DD HH:MM:SS" a "MM/DD HH:MM"
function formatearFechaPersonalizada(fechaStr) {
  if (!fechaStr || typeof fechaStr !== 'string') return '--:--';

  try {
    const [fecha, hora] = fechaStr.split(' ');
    const [anio, mes, dia] = fecha.split('-');
    const [horaStr, minuto] = hora.split(':');
    return `${mes}/${dia} ${horaStr}:${minuto}`;
  } catch (error) {
    console.error(' Error al formatear fecha:', error);
    return '--:--';
  }
}

onValue(sensoresRef, (snapshot) => {
  if (!snapshot.exists()) {
    console.warn(' No hay datos en invernadero/sensores');
    return;
  }

  const datos = snapshot.val();
  console.log('Datos sensores:', datos);

  document.getElementById('temperaturaActual').textContent = datos.temperatura_celsius ?? '--';
  document.getElementById('humedadActual').textContent = datos.humedad_porcentaje ?? '--';
  document.getElementById('ultimaLectura').textContent = formatearFechaPersonalizada(datos.fecha_ultima_lectura);
  document.getElementById('ultimoRiego').textContent = formatearFechaPersonalizada(datos.fecha_ultimo_riego);
}, (error) => {
  console.error(' Error en la lectura de datos:', error);
});
