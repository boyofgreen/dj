


var masterSlider = document.querySelector("#masterVol");
var loopVol = document.querySelector("#loopVol");
var tableVol = document.querySelector("#tableVol");






masterSlider.addEventListener('change', function(e){
    
    var volsetting = e.srcElement.value;
    
    for(var i = 0; i < sounds.length; i++){
     if(sounds[i].gainNode){
         sounds[i].gainNode.gain.value = volsetting;
         sounds[i].saveVolume = volsetting;
     }  
        
    }
    
    loopVol.value = volsetting;
    tableVol.value = volsetting;

})

loopVol.addEventListener('change', function(e){
    var volsetting = e.srcElement.value;
         if(sounds[0].gainNode){
         sounds[0].gainNode.gain.value = volsetting;
         sounds[0].saveVolume = volsetting;
     }  
        
})

tableVol.addEventListener('change', function(e){
    var volsetting = e.srcElement.value;
         if(sounds[2].gainNode){
         sounds[2].gainNode.gain.value = volsetting;
         sounds[2].saveVolume = volsetting;
     }  
        
    
})