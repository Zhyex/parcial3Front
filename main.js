//Entradas de tiempo

const inputminsDec = document.getElementById('minsDec');
const inputminsUni = document.getElementById('minsUni');
const inputsecsDec = document.getElementById('secsDec');
const inputsecsUni = document.getElementById('secsUni');
//Timers para mostrar el tiempo
const timerDisplay1 = document.getElementById('timerDisplay1');
const timerDisplay2 = document.getElementById('timerDisplay2');
//Botón para iniciar proceso
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
    let inputminsDec = inputminsDec.value*10
    let inputminsUni = inputminsUni.value
    let inputsecsDec = inputsecsDec.value*10
    let inputsecsUni = inputsecsUni.value
/* 
    if (minutes1 === 0 && minutes2 === 0 && minutes3 === 0) {
        alert("Por favor, ingresa tiempos para los cronómetros.");
        return;
    } */
   let mins = inputminsDec+inputminsUni;
   let secs = inputsecsDec +inputsecsDec;

   let timeCrono = mins+ secs/60

    // Iniciar el primer cronómetro
    startTimer(timeCrono, timerDisplay1, () => {
        // Cuando el primer cronómetro termina, inicia el segundo
        startTimer(timeCrono, timerDisplay2);
    });
}

// Evento para el botón de inicio
startAllTimers.addEventListener('click', startSequentialTimers);
