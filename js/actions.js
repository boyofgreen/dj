  var record = document.getElementById('record');
         var angle = 0;
         var saveY = 0; 
   
         
         var spinAction = function(){
            
             record.style.transform = 'rotate('+angle+'deg)';
             angle++
             
             if(angle >= 360) angle = 0;
         };
    
         var spin = setInterval(spinAction, 1000/60)
         
         
         record.addEventListener('pointerdown', function(){
    
             clearInterval(spin)
             
         })
          record.addEventListener('pointercancel', function(){

             clearInterval(spin)
             
         })
         
         record.addEventListener('pointermove', function(e){
                if (e.buttons === 0) {
                return;
                }
            
             var offsetY = -(e.offsetY - saveY)/5;
             
             angle +=offsetY;
            record.style.transform = 'rotate('+angle+'deg)';
             
             
             if(angle >= 360) angle = 0;
             
             
              saveY = e.offsetY;
         })
         
         record.addEventListener('pointerup', function(){
             
           spin = setInterval(spinAction, 1000/60)
             
             console.log('fire pointer up event and set a spin off')
         })
         
         
         ///button to start the music
         var start = document.getElementById('start');
         var isRunning = false;
         start.addEventListener('pointerdown', function(){
             if(isRunning === false){
                 playSound(0)
                 isRunning = true;
                 sounds[0].source.loop = true;
                 playSound(3);
                 sounds[3].source.loop = true;
                 
             }else{
                 sounds[0].source.stop();
                 sounds[3].source.stop();
                 isRunning = false;
             }
             
         })
         
         //spin on record
         var isScratching = false;
         var currentPlay = false;
         var currentScrtchTime = 0;
        
         record.addEventListener('pointermove', function(){
             isScratching = true;
           //  currentScratchTime = sounds[2].source.currentTime;
         });
         
         var playScratch = setInterval(function(){
             
         if(isScratching === true && currentPlay === false) {
             playSound(2);
             sounds[2].source.loop = true;
             currentPlay = true   
             //drop volume of singer
          if(sounds[3].gainNode){
         sounds[3].gainNode.gain.value = -1;
         sounds[3].saveVolume = -1;
     }  
            
         }
         if(isScratching === false){
             
             if(sounds[2].source) sounds[2].source.stop();
             currentPlay = false;
             
            if(sounds[3].gainNode){
                sounds[3].gainNode.gain.value = tableVol.value;
                sounds[3].saveVolume = tableVol.value;
            }  
             
         }
         isScratching = false;

         },1000/60);
                  record.addEventListener('pointerdown', function(){
    
            // playSound(2)
             
         })
         
                           record.addEventListener('pointerup', function(){
    
          //  sounds[2].source.stop();
             
         })
         
         
         
         