var timer = document.querySelector('#timer');
var trackTime = 0;
var timerRunning = false;
var timeInterval;


var startTimer = function(){
    
    
    trackTime ++
    var tempTime =Number((trackTime*5.355)/100).toFixed(2);
    
    if(tempTime < 10) tempTime = '0'+tempTime;
    
    tempTime = '00:'+ tempTime;
    
    timer.innerHTML = tempTime.replace(".", ":"); 
    
    
};


start.addEventListener('pointerdown', function(){
    
    
    if(timerRunning == false){
        timerRunning = true;
        
       timeInterval = setInterval(startTimer, 1000/15)
        
    }
    else{
        clearInterval(timeInterval);
        trackTime = 0;
        
        timerRunning = false;
    }
})