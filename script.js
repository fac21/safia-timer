//get the element with the specified ID
const startBtn = document.getElementById("start");
const pauseBtn= document.getElementById("pause");
const resetBtn = document.getElementById("reset");

const container = document.getElementById("container");

const intervalMins = document.getElementById("interval-mins");
const intervalSecs = document.getElementById("interval-secs");

const roundCounter = document.getElementById("count");

const shortBreakMins = document.getElementById("short-break-mins");
const shortBreakSecs = document.getElementById("short-break-secs");

const longBreakMins = document.getElementById("long-break-mins")
const longBreakSecs = document.getElementById("long-break-secs")

const intervalTime = document.getElementById("interval-input");
const shortBreakTime = document.getElementById("short-break-input");
const longBreakTime = document.getElementById("long-break-input");

const interval = document.getElementById("interval-timer");



document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    localStorage.setItem("interval-input", intervalTime.value);
    localStorage.setItem("short-break-input", shortBreakTime.value);
    localStorage.setItem("long-break-input", longBreakTime.value);
});



let roundTimer;
let shortBreakTimer;
let longBreakTimer;

function startRoundTimer() {
    roundTimer = setInterval( beginRound, 1000);
}

function beginRound(){
    document.title = intervalMins.innerText + ":" + intervalSecs.innerText;
    if (intervalSecs.innerText != 0){        
        intervalSecs.innerText--;
    }
    else if (intervalMins.innerText != 0 && intervalSecs.innerText == 0){  
        intervalSecs.innerText = 59;  
        intervalMins.innerText--; 
    }
    else if(intervalMins.innerText == 0 && intervalSecs.innerText == 0 ){
        roundCounter.innerText++;
        
        stopRoundTimer();
        if(roundCounter.innerText == 4){
            startLongTimer();
        }
        else {
            startShortTimer();
        }
    }
}

function stopRoundTimer() {
    clearInterval(roundTimer);
    intervalMins.innerText = 00 ; //intervalTime;
    intervalSecs.innerText = '05';
    
}

function startShortTimer() {
    shortBreakTimer = setInterval(beginShort,1000);
}

function beginShort(){
    document.title = shortBreakMins.innerText + ":" + shortBreakSecs.innerText;
    if(shortBreakSecs.innerText != 0){
        shortBreakSecs.innerText--
    } 
    else if (shortBreakMins.innerText != 0 && shortBreakSecs.innerText == 0){
        shortBreakSecs.innerText = 59;
        shortBreakMins.innerText--;
    } 
    else if (shortBreakMins.innerText == 0 && shortBreakSecs.innerText == 0){
        stopShortTimer();
        startRoundTimer();
    }
} 

function stopShortTimer() {
    clearInterval(shortBreakTimer);
    shortBreakMins.innerText = 0; //shortBreakTime;
    shortBreakSecs.innerText = '05';
}

function startLongTimer() {
    longBreakTimer = setInterval( beginLong, 1000)   
}

function beginLong(){
    document.title = longBreakMins.innerText + ":" + longBreakSecs.innerText;
    if(longBreakSecs.innerText != 0){
        longBreakSecs.innerText--;
    } 
    else if (longBreakMins.innerText != 0 && longBreakSecs.innerText == 0){
        longBreakSecs.innerText = 59;
        longBreakMins.innerText--;
    }
    else if (longBreakMins.innerText == 0 && longBreakSecs.innerText == 0){
        stopLongTimer();
        startRoundTimer();
    }
}

function stopLongTimer() {
    roundCounter.innerText = 0;
    clearInterval(longBreakTimer);
    longBreakMins.innerText = 00; //longBreakTime;
    longBreakSecs.innerText = '10';
}

// event listener for start button 
startBtn.addEventListener('click', function(){
    if (!roundTimer){
        startRoundTimer();
        
    } 
    else {
    alert('Timer is already running. ≧◠‿◠≦ ');
    }
});   

// event listener for pause button 
pauseBtn.addEventListener('click', function(){
    
    if(!roundTimer){
        alert('Cannot pause as timer is not running. ≧◠‿◠≦ ');
        return;
    }
    else if(roundTimer){
        clearInterval(roundTimer);
        roundTimer = false;
    }
});

// event listener for reset button 
resetBtn.addEventListener('click', function(){
    if(!roundTimer){
        alert('Cannot reset as timer is not running. ≧◠‿◠≦ ');
        return;
    }
    else if(roundTimer){
        let confirmQuestion = confirm("Are you sure you want to reset the Pomodoro Timer?")
        if(confirmQuestion == true){
            if (roundTimer){
                stopRoundTimer();
                stopShortTimer();
                stopLongTimer();
                roundTimer = false;
            }
        }
        else {
            return;
        }
    }
});


