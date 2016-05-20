

if (typeof Windows !== 'undefined' && Windows.Media.SystemMediaTransportControls) {
    
    //set up SMTC
  var systemMediaControls = Windows.Media.SystemMediaTransportControls.getForCurrentView();
  systemMediaControls.addEventListener("buttonpressed", systemMediaControlsButtonPressed, false);
  systemMediaControls.isPlayEnabled = true;
  systemMediaControls.isPauseEnabled = true;
  systemMediaControls.isNextEnabled  = true;
  systemMediaControls.isPreviousEnabled  = true;
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
  
  if(eventIn.button === 6){
      $.fn.fullpage.moveSectionUp();
      return
      
  }
  
    if(eventIn.button === 7){
      
      $.fn.fullpage.moveSectionDown();
      return
  }
  
  
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
  
  
Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar.backgroundColor = {a:255, r:28, g:28, b:35};
Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar.buttonBackgroundColor = {a:255, r:28, g:28, b:35 };
Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar.buttonForegroundColor = Windows.UI.Colors.white;
Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar.foregroundColor = Windows.UI.Colors.white;

  
  
  
  
  /**here we are generating a back button in the title bar of the app.  it doesn't change the page at all as it is above (or below on phone) the app itself.  This is a Windows API ***/
//here we show how we add a listener that goes back through the history stack when the button is hit	  
				  
				  
		//this is the windows apis for the back button as well as an event handleere for it
    var systemNavigationManager = Windows.UI.Core.SystemNavigationManager.getForCurrentView();
		var systemNavigation = Windows.UI.Core.SystemNavigationManager.getForCurrentView();
        
        if(history.length < 1) systemNavigation.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.collapsed;
        systemNavigationManager.addEventListener("backrequested", handleSystemNavigationEvent.bind(this));
				  
		// function to handle the system Navigation Event
		// function handleSystemNavigationEvent(args) {
		// 	history.back()
		//    args.handled = true;
		// }
	
  
  
  
}


if(typeof Windows !== 'undefined'){
 
 
 
 
    

    
    setTimeout(function(){ $('#romeControl').addClass('fadeIn')}, 4000)
    
}