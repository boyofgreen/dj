

if (typeof Windows !== 'undefined' && Windows.Media.SystemMediaTransportControls) {
    
    //set up SMTC
  var systemMediaControls = Windows.Media.SystemMediaTransportControls.getForCurrentView();
  systemMediaControls.addEventListener("buttonpressed", systemMediaControlsButtonPressed, false);
  systemMediaControls.isPlayEnabled = true;
  systemMediaControls.isPauseEnabled = true;
  systemMediaControls.isChannelUpEnabled = false;
  systemMediaControls.isChannelDownEnabled = false;
  systemMediaControls.playbackStatus = Windows.Media.MediaPlaybackStatus.closed;
  
  
  
  //make sure SMTC is reflected when you make changes to the content on page
   start.addEventListener('pointerdown', function(){
             if(isRunning === false){
                  systemMediaControls.playbackStatus = Windows.Media.MediaPlaybackStatus.paused;
                

                 
             }else{
                   systemMediaControls.playbackStatus = Windows.Media.MediaPlaybackStatus.playing;
             }
             
         })
  
  
 //make sure we reflect play or pause with the hardware controls
 function systemMediaControlsButtonPressed(eventIn) {
  var mediaButton = Windows.Media.SystemMediaTransportControlsButton;
 if(isRunning === false){
                 playSound(0)
                 isRunning = true;
                 sounds[0].source.loop = true;
                 playSound(3);
                 sounds[3].source.loop = true;
                 systemMediaControls.playbackStatus = Windows.Media.MediaPlaybackStatus.playing;
                 
             }else{
                 sounds[0].source.stop();
                 sounds[3].source.stop();
                 isRunning = false;
                 systemMediaControls.playbackStatus = Windows.Media.MediaPlaybackStatus.paused;
             }
             
             
             //do same for track timer
                 
    if(timerRunning == false){
        timerRunning = true;
        
       timeInterval = setInterval(startTimer, 1000/15)
        
    }
    else{
        clearInterval(timeInterval);
        trackTime = 0;
        
        timerRunning = false;
    }
             

 }         
  
  

  
  
  
  
  
}