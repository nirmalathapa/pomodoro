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