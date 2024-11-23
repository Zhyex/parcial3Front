// Entradas de tiempo
const inputminsDec1 = document.getElementById('minsDec1');
const inputminsUni1 = document.getElementById('minsUni1');
const inputsecsDec1 = document.getElementById('secsDec1');
const inputsecsUni1 = document.getElementById('secsUni1');

const inputminsDec2 = document.getElementById('minsDec2');
const inputminsUni2 = document.getElementById('minsUni2');
const inputsecsDec2 = document.getElementById('secsDec2');
const inputsecsUni2 = document.getElementById('secsUni2');

// Timers para mostrar el tiempo
const timerDisplay1 = document.getElementById('timerDisplay1');
const timerDisplay2 = document.getElementById('timerDisplay2');
const estadoTimer1 = document.getElementById('estadoTimer1');
const estadoTimer2 = document.getElementById('estadoTimer2');
// Botón para iniciar proceso
const startAllTimers = document.getElementById('startAllTimers');

// Función para iniciar la cuenta regresiva
function startTimer(totalTime, display, estadoDisplay, callback) {
    estadoDisplay.textContent = 'Ejecutando...';
    const interval = setInterval(() => {
        const mins = Math.floor(totalTime / 60);
        const secs = totalTime % 60;
        display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        totalTime--;

        // Cuando llega a 0, detener el cronómetro
        if (totalTime < 0) {
            clearInterval(interval);
            estadoDisplay.textContent = 'Detenido';
            if (callback) callback(); // Ejecutar el callback si existe
        }
    }, 1000);
}

// Función para iniciar los cronómetros en secuencia
function startSequentialTimers() {
    const minsDec1 = parseInt(inputminsDec1.value, 10) * 10 || 0;
    const minsUni1 = parseInt(inputminsUni1.value, 10) || 0;
    const secsDec1 = parseInt(inputsecsDec1.value, 10) * 10 || 0;
    const secsUni1 = parseInt(inputsecsUni1.value, 10) || 0;

    const minsDec2 = parseInt(inputminsDec2.value, 10) * 10 || 0;
    const minsUni2 = parseInt(inputminsUni2.value, 10) || 0;
    const secsDec2 = parseInt(inputsecsDec2.value, 10) * 10 || 0;
    const secsUni2 = parseInt(inputsecsUni2.value, 10) || 0;

    const totalMinutes1 = minsDec1 + minsUni1;
    const totalSeconds1 = secsDec1 + secsUni1;
    const totalTime1 = totalMinutes1 * 60 + totalSeconds1;

    const totalMinutes2 = minsDec2 + minsUni2;
    const totalSeconds2 = secsDec2 + secsUni2;
    const totalTime2 = totalMinutes2 * 60 + totalSeconds2;

    if (isNaN(totalTime1) || totalTime1 <= 0 || isNaN(totalTime2) || totalTime2 <= 0) {
        alert("Por favor, ingresa un tiempo válido.");
        return;
    }

    // Iniciar el primer cronómetro
    startTimer(totalTime1, timerDisplay1, estadoTimer1, () => {
        // Cuando el primer cronómetro termine, iniciar el segundo cronómetro
        startTimer(totalTime2, timerDisplay2, estadoTimer2);
    });
}

// Agregar evento al botón para iniciar los cronómetros
startAllTimers.addEventListener('click', startSequentialTimers);