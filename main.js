// Entradas de tiempo
const inputminsDec = document.getElementById('minsDec');
const inputminsUni = document.getElementById('minsUni');
const inputsecsDec = document.getElementById('secsDec');
const inputsecsUni = document.getElementById('secsUni');
// Timers para mostrar el tiempo
const timerDisplay1 = document.getElementById('timerDisplay1');
const timerDisplay2 = document.getElementById('timerDisplay2');
// Botón para iniciar proceso
const startAllTimers = document.getElementById('startAllTimers');

// Función para iniciar la cuenta regresiva
function startTimer(totalTime, display, callback) {
    const interval = setInterval(() => {
        const mins = Math.floor(totalTime / 60);
        const secs = totalTime % 60;
        display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        totalTime--;

        // Cuando llega a 0, detener el cronómetro
        if (totalTime < 0) {
            clearInterval(interval);
            if (callback) callback(); // Ejecutar el callback si existe
        }
    }, 1000);
}

// Función para iniciar los cronómetros en secuencia
function startSequentialTimers() {
    const minsDec = parseInt(inputminsDec.value, 10) * 10;
    const minsUni = parseInt(inputminsUni.value, 10);
    const secsDec = parseInt(inputsecsDec.value, 10) * 10;
    const secsUni = parseInt(inputsecsUni.value, 10);

    const totalMinutes = minsDec + minsUni;
    const totalSeconds = secsDec + secsUni;
    const totalTime = totalMinutes * 60 + totalSeconds;

    if (isNaN(totalTime) || totalTime <= 0) {
        alert("Por favor, ingresa un tiempo válido.");
        return;
    }

    // Iniciar el primer cronómetro
    startTimer(totalTime, timerDisplay1, () => {
        // Cuando el primer cronómetro termine, iniciar el segundo cronómetro
        startTimer(totalTime, timerDisplay2);
    });
}

// Agregar evento al botón para iniciar los cronómetros
startAllTimers.addEventListener('click', startSequentialTimers);