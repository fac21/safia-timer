//get the element with the specified ID
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const pauseBtn= document.getElementById("pause");

const intervalMins = document.getElementById("interval-mins");
const intervalSecs = document.getElementById("interval- secs");

const roundCounter= document.getElementById("count");

const shortBreakMins = document.getElementById("short-break-min");
const shortBreakSecs = document.getElementById("short-break-sec");

const longBreakMins = document.getElementById("long-break-min")
const longBreakSecs = document.getElementById("long-break-sec")

const intervalTime = document.getElementById("interval-input");
const shortBreakTime = document.getElementById("short-break-input");
const longBreakTime = document.getElementById("long-break-input");


let startTimer;

// start countdown timer
function startInterval(){

    //interval timer
    if (intervalSecs != 0){         // secs 59-
        intervalSecs.innerHTML--;   // countdown secs
    }
    else if (intervalMins !=0 && intervalSecs === 0){  // secs 0 min 60-
        intervalSecs.innerText = 59;  // reset secs
        intervalMins.innerHTML--;     // countdown mins
    }

    // break timer
    if(intervalMins === 0 && intervalSecs === 0 ){
        if(shortBreakSecs != 0){
            shortBreakSecs.innerHTML--;
        } 
        else if ( shortBreakMins !=0 && shortBreakSecs === 0){
            shortBreakSecs.innerText = 59;
            shortBreakMins.innerHTML--;
        }
    }

    // update round count & reset interval/short break time
    if(intervalMins === 0 && intervalSecs === 0 && shortBreakMins === 0 && shortBreakSecs === 0){
        intervalMins.innerText = intervalTime;
        intervalSecs.innerText = '00';

        shortBreakMins.innerText = shortBreakTime;
        shortBreakSecs.innerText = '00';
        
        roundCounter.innerHTML++;
    }
}

// event listener for start button 
startBtn.addEventListener('click', function(){
    if (startTimer = undefined){
        startTimer = setInterval( startInterval , 1000);
    }
    else {
        alert('Timer is already running')
    }
})


// stop countdown timer
function stopInterval(){

}


// event listener for pause button 
pauseBtn.addEventListener('click', function(){

})

// event listener for reset button 
resetBtn.addEventListener('click', function(){

})