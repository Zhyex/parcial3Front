// Obtén los elementos del DOM
const inputMinutes1 = document.getElementById('inputMinutes1');
const inputMinutes2 = document.getElementById('inputMinutes2');
const inputMinutes3 = document.getElementById('inputMinutes3');
const timerDisplay1 = document.getElementById('timerDisplay1');
const timerDisplay2 = document.getElementById('timerDisplay2');
const timerDisplay3 = document.getElementById('timerDisplay3');
const startAllTimers = document.getElementById('startAllTimers');

// Función para iniciar la cuenta regresiva
function startTimer(minutes, display, callback) {
    let totalTime = minutes * 60; // Convertir minutos a segundos

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
    const minutes1 = parseInt(inputMinutes1.value, 10) || 0;
    const minutes2 = parseInt(inputMinutes2.value, 10) || 0;
    const minutes3 = parseInt(inputMinutes3.value, 10) || 0;

    if (minutes1 === 0 && minutes2 === 0 && minutes3 === 0) {
        alert("Por favor, ingresa tiempos para los cronómetros.");
        return;
    }

    // Iniciar el primer cronómetro
    startTimer(minutes1, timerDisplay1, () => {
        // Cuando el primer cronómetro termina, inicia el segundo
        startTimer(minutes2, timerDisplay2, () => {
            // Cuando el segundo cronómetro termina, inicia el tercero
            startTimer(minutes3, timerDisplay3);
        });
    });
}

// Evento para el botón de inicio
startAllTimers.addEventListener('click', startSequentialTimers);
