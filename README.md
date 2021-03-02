# Safia-timer

## FAC21 Pre-course - Week 4 - Mini Project : Pomodoro Timer
---
## Objective

Build a “[Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) timer”.

### *Features*
- [x] A “work” timer that counts down to zero (usually 25 minutes)
- [x] A second “break” timer that counts down to zero (usually 5 minutes)
- [x] Buttons to start a session, pause the timer, or cancel the session and restart

### *Stretch goals*
- [x] Customisable lengths of time for work/break
- [ ] Play an alarm sound to make it obvious the time is up

---
:confetti_ball: :tada: This is my [Pomodoro Timer](https://fac21.github.io/safia-timer/) made using HTML, CSS, vanilla JavaScript. :tada: :confetti_ball:


## Process
- I was aware of what a pomodoro timer was, but i did further research on the subject and got inspiration on my timers functionality from the [Apple Apps store](https://apps.apple.com/gb/app/be-focused-focus-timer/id973130201) 

- I decided on the what features I wanted my timer to have
  - [x] Set pomodoro interval (0-60minutes)- default set to 25minutes.
  - [x] Set short break (0-60minutes)- default set to 5 minutes.
  - [x] Set long break (0-60minutes)- default set to 30 minutes.
  - [-] A START button, which when pressed changes to STOP.
  - [x] A INTERVAL box which shows 0/4 at  the start and increases with each interval. At 4/4 , long break is activated after which the interval re-sets to 0/4.
  - [x] Bell at end of interval/break, 
  - [x] Border color changes with pomodoro interval/break
    - [-] Flashes red at 10second mark.
  
-  I created a new repo in github, with a README.md file. I used SSH to git clone the repo in my local terminal
-  I created a index.html and decided to add `style` and `script` tags instead of creating separate files. If the script code gets tolong I may create a separate `script.js` file.
  
---

## Things I Learnt

***Issue 1 -***
When i was cloning my github repo to my local terminal, i ran the SSH link but kept getting this error.

```zsh
zsh: no such file or directory: https://github.com/fac21/safia-timer.git
```

***Solution 1 -***
I forgot to add `git clone` before adding the SSH link. :see_no_evil: :joy:

---

***Issue 2 -*** I wanted to add a boiler HTML template using the Emmet abbreviation `!`. It wouldn't work. 

***Solution 2 -*** I was adding `!` to an untitled file so i was unable to access the boilerplate. Once is saved the file with html extension `index.html` it worked.:exclamation: 

---
***Issue 3 -*** VS code live server was opening a listing directory instead of running the code in the browser. ![Screenshot of listing directory](listing-directory.png)
(To take a screen shot on a *mac* press **Shift+Command+3** )

***Solution 3-*** The folder where i saved my project files (hml, css, js) did not have a workspace assigned to it. So my files were pointing to the wrong path. I created a new folder "pomodoro-timer" in my fac21 folder on my desktop and opened VS code and opened new folder ("pomodoro-timer). I then opened the index.html file and the live sever worked!!! :smile: :sparkles:

I was able to solve this issue using this [Stack Overflow](https://stackoverflow.com/questions/55073031/why-is-vs-code-live-server-opening-a-directory-instead-of-running-the-code-in-th) article and this [YouTube](https://www.youtube.com/watch?v=fpyzIDuK0wU) video. This YouTube video helped me learn more about [workspace](https://www.youtube.com/watch?v=W4xLtxLSm-o&t=26s).

---
***Issue 4 -*** I kept getting this error when i clicked the start button. 
```javaScript
Uncaught TypeError: Cannot read property 'innerText' of null
    at startInterval (script.js:28)
```

***Solution 4-*** I had a space bar when defining my id ('interval- sec)!!! Once i removed it countdown worked
```javaScript
const intervalSecs = document.getElementById("interval-secs");
```
***Issue 5-*** I had one function `startInterval` which was doing several things at once, and i was calling it in the start button event listener. These are the issues it caused
  - round counter was updating after the short break had happened
  - the long break was only decreasing by one second after which the interval timer started again. 
  
***Solution 5-*** There were too many things going on in that one function. So i split everything up into smaller functions, whereby in all the start functions i set a setInterval()and in all the stop functions i set a clearInterval():

  - startRoundTimer - setInterval( beginRound)
  - stopRoundTimer - clearInterval , reset round time
  - startShortTimer - setInterval( beginShort)
  - stopShortTimer - clearInterval , reset short break time
  - startLongTimer - setInterval( beginLong)
  - stopLongTimer - clearInterval , reset round counter long break time

***Issue 6-*** I wanted to display the timer in the browser tab. I didn't know where to put the code as i had different counters for minutes and seconds
```javascript
document.title = intervalMins.innerText + ":" + intervalSecs.innerText;
```
***Solution 6-*** I put the code in all three start functions - startRoundTimer, startShortTimer, startLongTimer.

***Unresolved Issues*** 

- When i tried to pause the short/long break timer it worked, as in it paused but then when you press the start button  
  - it starts to count from the interval timer and not continue with the short/long break timer.

- I was unable to pad the timer with `0` when it was less than 10 secs
  - i tried if/else statement, template literals, concatenate, padStart. Nothing worked! :sob: :sob: :sob: 
  


---

## Resources 

- [YouTube](https://www.youtube.com/watch?v=afFb_DcBBdA) - ***Markdown Inserting Images*** by Thomas Bradley
- [Medium](https://medium.com/markdown-monster-blog/getting-images-into-markdown-documents-and-weblog-posts-with-markdown-monster-9ec6f353d8ec)- ***Getting Images into Markdown Documents and Weblog Posts with Markdown Monster*** by Rick Strahi
- [codebase]() - ***Syntax highlighting in markdown*** by Dan Quinney
- [coolors](https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557) - *Generate colour palattes *
- [icons8](https://icons8.com/) - *Icons, illustrations, photos, music, and design tools*
- [Week 1](https://github.com/fac21/pre-course/tree/main/semantic-html/safia) [Week 2](https://github.com/fac21/pre-course/tree/main/css-layout/safia) [Week 3](https://github.com/fac21/pre-course/tree/main/functions-callbacks-async/safia%20) - *FAC21 Pre-course challenges*