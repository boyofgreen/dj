  var currentInstrument = 2; //sets the inst to volumne control
 
 
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
        //   record.addEventListener('pointercancel', function(){

        //      clearInterval(spin)
             
        //  })
         
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
           clearInterval(spin)
           spin = setInterval(spinAction, 1000/60)
             
             console.log('fire pointer up event and set a spin off')
         })
         
            record.addEventListener('pointerleave', function(){
           clearInterval(spin)
           spin = setInterval(spinAction, 1000/60)
             
             console.log('fire pointer up event and set a spin off')
         })   
      
      
         
         ///button to start the music
         var start = document.getElementById('start');
         var isRunning = false;
         //set the vol for 2 and 3
         sounds[2].saveVolume = document.querySelector("#tableVol").value;
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
             
           //  if(!sounds[3]) return
         if(isScratching === true && currentPlay === false) {
             playSound(2);
             sounds[2].source.loop = true;
             currentPlay = true   
             //drop volume of singer
          if(sounds[3].gainNode){
         sounds[3].gainNode.gain.value = -1;
         sounds[3].saveVolume = sounds[2].saveVolume;
     }  
            
         }
         if(isScratching === false){
             
             if(sounds[2].source) sounds[2].source.stop();
             currentPlay = false;
             
            if(sounds[3].gainNode && sounds[3].saveVolume){
                sounds[3].gainNode.gain.value = sounds[3].saveVolume;
               // sounds[3].saveVolume = sounds[2].saveVolume;
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
         
         
         
         
         
         document.getElementById('cowBell').addEventListener('pointerdown', function(){
             
             
             
             playSound(4)
             
         });         
         document.getElementById('sBell').addEventListener('pointerdown', function(){
             
             
             
             playSound(5)
             
         });
         
         
         
         //When each section is in view the mixer should be labeled for and play that insturment.
         
         var insLabel = document.getElementById('lText');
         
         var switchFun = function(index ,  nextIndex ,  direction ){
             var insName = '';
             
             switch(nextIndex) {
                case 1:
                    insName = "Scratch";
                    currentInstrument = 2;
                    break;
                case 2:
                    insName = 'Beats'
                    currentInstrument = 2;
                    break;
                case 3:
                    insName = 'Jingles'
                    currentInstrument = 5;
                    break;
                case 4:
                    insName = "Cow Bell";
                    currentInstrument = 4;
                    break;
                default:
                     insName = 'Scratch'
                     currentInstrument = 2;
 } 
 

   $('#lText').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        insLabel.innerHTML = insName;
                        
                        $('#lText').removeClass('fadeOutDown ')
                        $('#lText').addClass('animated fadeInDown')
                    });
                     $('#lText').removeClass('fadeInDown')
                    $('#lText').addClass('animated fadeOutDown ')
             
         };
         
         
         var pastZ = 0;
         
         window.addEventListener('devicemotion', function(e){
             if(!window.location.hash.match('third')) return
             if(pastZ - e.accelerationIncludingGravity.z > 4){
                 
                 playSound(5)
                 console.log('shaking')
             }  
             
            pastZ = e.accelerationIncludingGravity.z;
        
    }, false);