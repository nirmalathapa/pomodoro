//start stop reset 

var countNum = 25 * 60;
var countDownTimer;
var sound = new Audio('398194__inspectorj__cuckoo-clock-single-a.wav');


document.querySelector('.start').addEventListener('click', start);
document.querySelector('.stop').addEventListener('click', stop);
document.querySelector('.reset').addEventListener('click', reset);


//when countDownTimer is 00:00 play sound



function start(){
    if(countDownTimer){
        stop();
    }

    countDownTimer = setInterval(function(){
    countNum = countNum - 1;
    
    if(countNum <= 0){
        stop();
        countNum = 0;
    }
    if(countNum === 0){
        sound.play();
    }   

    display(countNum);

    }, 1000);    
    
}
function stop(){
    clearInterval(countDownTimer);
}

function reset(){
    countNum = 25 * 60;
    display(countNum);
    stop();    
}

function addZero(digit){
    if(digit < 10){
        return '0' + digit;
    }
    return digit;
}


function display(num){
    var min = Math.floor(num / 60);
    var sec = num % 60;
    return document.getElementsByClassName('display')[0].innerHTML = addZero(min) + ":" + addZero(sec);
}

