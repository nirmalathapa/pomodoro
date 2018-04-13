// - start the timer
// - timer should run for 25 minutes
// - as soon as it hits 25 ring the timer
// - put a checkmark  & congratulate for spending interrupt-less time
// - take a 5 min break 
// - When 4 pomodoro is done take 30 minutes break

//start
    // start timer at 25
    // display minutes, seconds
    // ends timer at 00

var timeInt, minutes, seconds;
//click the button 
var button = document.getElementsByClassName('start');
button[0].addEventListener('click', function(){
    var display = document.getElementsByTagName('h2');
    display[0].textContent = new Date();
});
 //start coundown 25:00
     //time decreases
     //becomes 00:00
