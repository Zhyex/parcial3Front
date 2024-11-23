// Entradas de tiempo
const inputminsDec1 = document.getElementById('minsDec1');
const inputminsUni1 = document.getElementById('minsUni1');
const inputsecsDec1 = document.getElementById('secsDec1');
const inputsecsUni1 = document.getElementById('secsUni1');

const inputminsDec2 = document.getElementById('minsDec2');
const inputminsUni2 = document.getElementById('minsUni2');
const inputsecsDec2 = document.getElementById('secsDec2');
const inputsecsUni2 = document.getElementById('secsUni2');

const inputminsDec3 = document.getElementById('minsDec3');
const inputminsUni3 = document.getElementById('minsUni3');
const inputsecsDec3 = document.getElementById('secsDec3');
const inputsecsUni3 = document.getElementById('secsUni3');

const inputminsDec4 = document.getElementById('minsDec4');
const inputminsUni4 = document.getElementById('minsUni4');
const inputsecsDec4 = document.getElementById('secsDec4');
const inputsecsUni4 = document.getElementById('secsUni4');

const inputminsDec5 = document.getElementById('minsDec5');
const inputminsUni5 = document.getElementById('minsUni5');
const inputsecsDec5 = document.getElementById('secsDec5');
const inputsecsUni5 = document.getElementById('secsUni5');

// Timers para mostrar el tiempo
const timerDisplay1 = document.getElementById('timerDisplay1');
const timerDisplay2 = document.getElementById('timerDisplay2');
const estadoTimer1 = document.getElementById('estadoTimer1');
const estadoTimer2 = document.getElementById('estadoTimer2');

const timerDisplay3 = document.getElementById('timerDisplay3');
const timerDisplay4 = document.getElementById('timerDisplay4');
const timerDisplay5 = document.getElementById('timerDisplay5');
const estadoTimer3 = document.getElementById('estadoTimer3');
const estadoTimer4 = document.getElementById('estadoTimer4');
const estadoTimer5 = document.getElementById('estadoTimer5');

// Botones para iniciar proceso
const startAllTimers = document.getElementById('startAllTimers');
const startAllSimultaneousTimers = document.getElementById('startAllSimultaneousTimers');

// Función para iniciar la cuenta regresiva
function startTimer(minutes, display, estado, callback) {
    //let totalTime = minutes * 60; // Convertir minutos a segundos
    estado.textContent = 'Ejecutando'
    const interval = setInterval(() => {
        const mins = Math.floor(minutes / 60);
        const secs = minutes % 60;
        display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        minutes--;

        // Cuando llega a 0, detener el cronómetro
        if (minutes < 0) {
            clearInterval(interval);
            estado.textContent = 'Detenido'
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

    const totalMinutes1 = minsDec1 + minsUni1;
    const totalSeconds1 = secsDec1 + secsUni1;
    const totalTime1 = totalMinutes1 * 60 + totalSeconds1;

    if (isNaN(totalTime1) || totalTime1 <= 0) {
        alert("Por favor, ingresa un tiempo válido.");
        return;
    }

    // Iniciar el primer cronómetro
    startTimer(totalTime1, timerDisplay1, estadoTimer1, () => {
        // Cuando el primer cronómetro termine, iniciar el segundo cronómetro
        startTimer(totalTime1, timerDisplay2, estadoTimer2);
    });
}

// Función para iniciar los temporizadores simultáneamente
function startSimultaneousTimers() {
    const minsDec3 = parseInt(inputminsDec3.value, 10) * 10 || 0;
    const minsUni3 = parseInt(inputminsUni3.value, 10);
    const secsDec3 = parseInt(inputsecsDec3.value, 10) * 10 || 0;
    const secsUni3 = parseInt(inputsecsUni3.value, 10);

    const minsDec4 = parseInt(inputminsDec4.value, 10) * 10 || 0;
    const minsUni4 = parseInt(inputminsUni4.value, 10) || 0;
    const secsDec4 = parseInt(inputsecsDec4.value, 10) * 10 || 0;
    const secsUni4 = parseInt(inputsecsUni4.value, 10) || 0;

    const minsDec5 = parseInt(inputminsDec5.value, 10) * 10 || 0;
    const minsUni5 = parseInt(inputminsUni5.value, 10) || 0;
    const secsDec5 = parseInt(inputsecsDec5.value, 10) * 10 || 0;
    const secsUni5 = parseInt(inputsecsUni5.value, 10) || 0;

    const totalMinutes3 = minsDec3 + minsUni3;
    const totalSeconds3 = secsDec3 + secsUni3;
    const totalTime3 = totalMinutes3 * 60 + totalSeconds3;

    const totalMinutes4 = minsDec4 + minsUni4;
    const totalSeconds4 = secsDec4 + secsUni4;
    const totalTime4 = totalMinutes4 * 60 + totalSeconds4;

    const totalMinutes5 = minsDec5 + minsUni5;
    const totalSeconds5 = secsDec5 + secsUni5;
    const totalTime5 = totalMinutes5 * 60 + totalSeconds5;

    if (isNaN(totalTime3) || totalTime3 <= 0 || isNaN(totalTime4) || totalTime4 <= 0 || isNaN(totalTime5) || totalTime5 <= 0) {
        alert("Por favor, ingresa un tiempo válido.");
        return;
    }

    // Iniciar los tres temporizadores simultáneamente
    startTimer(totalTime3, timerDisplay3, estadoTimer3);
    startTimer(totalTime4, timerDisplay4, estadoTimer4);
    startTimer(totalTime5, timerDisplay5, estadoTimer5);
}

// Agregar evento al botón para iniciar los cronómetros secuenciales
startAllTimers.addEventListener('click', startSequentialTimers);

// Agregar evento al botón para iniciar los temporizadores simultáneos
startAllSimultaneousTimers.addEventListener('click', startSimultaneousTimers);