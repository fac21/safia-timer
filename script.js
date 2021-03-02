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


let roundTimer;
let shortBreakTimer;
let longBreakTimer;

function startRoundTimer() {
    roundTimer = setInterval(function beginRound(){
        
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
    }, 1000);
}

function stopRoundTimer() {
    clearInterval(roundTimer);
    intervalMins.innerText = 00 ; //intervalTime;
    intervalSecs.innerText = '05';
    
}

function startShortTimer() {
    shortBreakTimer = setInterval(function beginShort(){
    
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
    } ,1000);
}

function stopShortTimer() {
    clearInterval(shortBreakTimer);
    shortBreakMins.innerText = 0; //shortBreakTime;
    shortBreakSecs.innerText = '05';
}

function startLongTimer() {
    longBreakTimer = setInterval(function beginLong(){
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

    } , 1000)   
}

function stopLongTimer() {
    roundCounter.innerText = 0;
    clearInterval(longBreakTimer);
    longBreakMins.innerText = 30; //longBreakTime;
    longBreakSecs.innerText = '00';
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
    clearInterval(roundTimer);
    roundTimer = false;
    
    if(roundTimer){
        clearInterval(roundTimer);
        roundTimer = false;
    }
    else if(shortBreakTimer){
        clearInterval(shortBreakTimer);
        shortBreakTimer = false;
    }
    else if(longBreakTimer){
        clearInterval(longBreakTimer);
        longBreakTimer = false ;
    }
});

// event listener for reset button 
resetBtn.addEventListener('click', function(){

})








// // start countdown timer
// function startInterval() {

//     //interval timer
//     if (intervalSecs.innerText != 0){        
//         intervalSecs.innerText--;   
//     } else if (intervalMins.innerText != 0 && intervalSecs.innerText == 0){  
//         intervalSecs.innerText = 59;  
//         intervalMins.innerText--; 
//     }


// }
//     // break timer
//     if(intervalMins.innerText == 0 && intervalSecs.innerText == 0 ){
//         if(shortBreakSecs.innerText != 0){
//             shortBreakSecs.innerText--
//         } else if ( shortBreakMins.innerText != 0 && shortBreakSecs.innerText == 0){
//             shortBreakSecs.innerText = 59;
//             shortBreakMins.innerText--;
//         }
//     }

//     // update round count & reset interval/short break time
//     if(intervalMins.innerText == 0 && intervalSecs.innerText == 0 && shortBreakMins.innerText == 0 && shortBreakSecs.innerText == 0){
//         intervalMins.innerText = 00; // intervalTime;
//         intervalSecs.innerText = '05';

//         shortBreakMins.innerText = 00; // shortBreakTime;
//         shortBreakSecs.innerText = '05';
        
//         roundCounter.innerText++;

//     }

//         // //if round 4 go to long break, else add to round count
//     //     if (roundCounter.innerText == 4){
           
//     //              if(longBreakSecs.innerText != 0){
//     //                 longBreakSecs.innerText--;
//     //             } else if (longBreakMins.innerText != 0 && longBreakSecs.innerText == 0){
//     //                 longBreakSecs.innerText = 59;
//     //                 longBreakMins.innerText--;
//     //             }

//     //             roundCounter.innerText = 0;
            
//     //     } else {
//     //         roundCounter.innerText++;
//     //     }
//     // }
    
//     if (roundCounter.innerText == 4){
        
//         if(longBreakSecs.innerText != 0){
//             longBreakSecs.innerText--;
//         } else if (longBreakMins.innerText != 0 && longBreakSecs.innerText == 0){
//             longBreakSecs.innerText = 59;
//             longBreakMins.innerText--;
//         }else if (longBreakMins.innerText == 0 && longBreakSecs.innerText == 0){
//             roundCounter.innerText = 0;
//         }
//     }







    // if (startTimer === undefined){
    //     startTimer = setInterval( startInterval, 1000);
    //     shortBreakTimer = setInterval( , 1000);
    //     longBreakTimer = setInterval( , 1000);
    // } else {
    //     alert('Timer is already running. ≧◠‿◠≦ ')
    // }
// })

// // stop countdown timer
// function stopInterval(){
//     clearInterval(startTimer);
// }



// function resetInterval(){
//     intervalMins.innerText = 25; //intervalTime;
//     intervalSecs.innerText = '00';

//     shortBreakMins.innerText = 05; //shortBreakTime;
//     shortBreakSecs.innerText = '00';

//     longBreakMins.innerText = 30; //longBreakTime;
//     longBreakSecs.innerText = '00';

//     roundCounter.innerText = 0;
//     stopInterval();
//     startTimer = undefined;
// }



