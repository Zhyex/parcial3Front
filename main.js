//Entradas de tiempo

const inputminsDec = document.querySelector('#minsDec');
const inputminsUni = document.querySelector('#minsUni');
const inputsecsDec = document.querySelector('#secsDec');
const inputsecsUni = document.querySelector('#secsUni');
//Timers para mostrar el tiempo
const timerDisplay1 = document.querySelector('#timerDisplay1');
const timerDisplay2 = document.querySelector('#timerDisplay2');
//Botón para iniciar proceso
const startAllTimers = document.querySelector('#startAllTimers');
const estado1 = document.querySelector('#estado1')
const estado2 = document.querySelector('#estado2')

// Función para iniciar la cuenta regresiva
function startTimer(minutes, display,estado, callback) {
    //let totalTime = minutes * 60; // Convertir minutos a segundos
    estado.textContent='Ejecutando'
    const interval = setInterval(() => {
        const mins = Math.floor(minutes / 60);
        const secs = minutes % 60;
        display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        minutes--;

        // Cuando llega a 0, detener el cronómetro
        if (minutes < 0) {
            clearInterval(interval);
            estado.textContent='Detenido'
            if (callback) callback(); // Ejecutar el callback si existe
        }
    }, 1000);
}

// Función para iniciar los cronómetros en secuencia
function startSequentialTimers() {
    let minsDec = parseInt(inputminsDec.value,10)*10 || 0;
    let minsUni = parseInt(inputminsUni.value,10) || 0;
    let secsDec = parseInt(inputsecsDec.value,10)*10 || 0;
    let secsUni = parseInt(inputsecsUni.value,10) || 0;

   let mins = minsDec+minsUni;
   let secs = secsDec +secsUni;

   let timeCrono = mins*60 + secs

   
   if (timeCrono<=0 || isNaN(timeCrono)) {
    alert("Por favor, ingresa tiempos para los cronómetros.");
    return;
}

    // Iniciar el primer cronómetro
    startTimer(timeCrono, timerDisplay1,estado1, () => {
        // Cuando el primer cronómetro termine, iniciar el segundo cronómetro
        startTimer(timeCrono, timerDisplay2,estado2);
    });
}

// Agregar evento al botón para iniciar los cronómetros
startAllTimers.addEventListener('click', startSequentialTimers);