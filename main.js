//click the button 	
var button = document.getElementsByClassName('start');	
var display = document.getElementsByTagName('h2');	

var timer = new Date().getMinutes();
console.log(timer);


button[0].addEventListener('click', function(){	    
    var counter = setInterval(function(){
        var now = new Date().getTime()
    },1000);
});	
 //start coundown 25:00	
     //time decreases	
     //becomes 00:00