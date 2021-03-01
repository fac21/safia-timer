//get the element with the specified ID
const startBtn = document.getElementById("start");
const pauseBtn= document.getElementById("pause");
const resetBtn = document.getElementById("reset");

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


let startTimer;

// start countdown timer
function startInterval() {

    //interval timer
    if (intervalSecs.innerText != 0){        
        intervalSecs.innerText--;   
    } else if (intervalMins.innerText != 0 && intervalSecs.innerText == 0){  
        intervalSecs.innerText = 59;  
        intervalMins.innerText--; 
    }

    // break timer
    if(intervalMins.innerText == 0 && intervalSecs.innerText == 0 ){
        if(shortBreakSecs.innerText != 0){
            shortBreakSecs.innerText--
        } else if ( shortBreakMins.innerText != 0 && shortBreakSecs.innerText == 0){
            shortBreakSecs.innerText = 59;
            shortBreakMins.innerText--;
        }
    }

    // update round count & reset interval/short break time
    if(intervalMins.innerText == 0 && intervalSecs.innerText == 0 && shortBreakMins.innerText == 0 && shortBreakSecs.innerText == 0){
        intervalMins.innerText = 00; // intervalTime;
        intervalSecs.innerText = '05';

        shortBreakMins.innerText = 00; // shortBreakTime;
        shortBreakSecs.innerText = '05';
        
        roundCounter.innerText++;

    }

        // //if round 4 go to long break, else add to round count
    //     if (roundCounter.innerText == 4){
           
    //              if(longBreakSecs.innerText != 0){
    //                 longBreakSecs.innerText--;
    //             } else if (longBreakMins.innerText != 0 && longBreakSecs.innerText == 0){
    //                 longBreakSecs.innerText = 59;
    //                 longBreakMins.innerText--;
    //             }

    //             roundCounter.innerText = 0;
            
    //     } else {
    //         roundCounter.innerText++;
    //     }
    // }
    
    if (roundCounter.innerText == 4){
        
        if(longBreakSecs.innerText != 0){
            longBreakSecs.innerText--;
        } else if (longBreakMins.innerText != 0 && longBreakSecs.innerText == 0){
            longBreakSecs.innerText = 59;
            longBreakMins.innerText--;
        }else if (longBreakMins.innerText == 0 && longBreakSecs.innerText == 0){
            roundCounter.innerText = 0;
        }
    }

}

// event listener for start button 
startBtn.addEventListener('click', function(){
    if (startTimer === undefined){
        startTimer = setInterval( startInterval, 1000);
    } else {
        alert('Timer is already running. ≧◠‿◠≦ ')
    }
})

// stop countdown timer
function stopInterval(){
    clearInterval(startTimer);
}

// event listener for reset button 
resetBtn.addEventListener('click', resetInterval)

function resetInterval(){
    intervalMins.innerText = 25; //intervalTime;
    intervalSecs.innerText = '00';

    shortBreakMins.innerText = 05; //shortBreakTime;
    shortBreakSecs.innerText = '00';

    longBreakMins.innerText = 30; //longBreakTime;
    longBreakSecs.innerText = '00';

    roundCounter.innerText = 0;
    stopInterval();
    startTimer = undefined;
}

// event listener for pause button 
pauseBtn.addEventListener('click', function(){
    stopInterval();
    startTimer = undefined;
})

