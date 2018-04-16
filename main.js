//click the button 	
var button = document.getElementsByClassName('start');	
var time = document.querySelector('h2');
var countTime = new Date().getTime();


button[0].addEventListener('click', function(){	    
    
    var counter = setInterval(function(){
        var now = new Date().getTime();
        var diff = now - countTime;
        var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((diff % (1000 * 60)) / (1000));
        document.querySelector('h2').innerHTML = min + sec;

    },1000);
    
});	
 //start coundown 25:00	
     //time decreases	
     //becomes 00:00