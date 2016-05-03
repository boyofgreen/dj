
            //set up web audio context //
            var context, winSound, wrongSound, inSound, outSound, rightSound;

                window.AudioContext = window.AudioContext || window.webkitAudioContext;
                context = new AudioContext();

                var sounds = [
                       {sound:'sounds/loop3.mp3', name:'houseLoop'},
                       {sound:'sounds/crackel.mp3', name:'crackel'},
                       {sound:'sounds/scratch_2.mp3', name:'scratch'},
                       {sound:'sounds/vocal2.mp3', name:'vocal'},
                      {sound:'sounds/cowbell.WAV', name:'vocal'},
                       {sound:'sounds/sBellShort.mp3', name:'vocal'}
                ];



                function loadSounds(index) {
                    var request = new XMLHttpRequest();
                    request.open('GET', sounds[index].sound, true);
                    request.responseType = 'arraybuffer';

                    // Decode asynchronously
                    request.onload = function (e) {
                        context.decodeAudioData(request.response, function (buffer) {
                            sounds[index].buffer = buffer;
                        }, function(er) { console.log(er) });
                    }
                    request.send();
                };

                  for(var i=0;i < sounds.length;i++){
                      
                      loadSounds(i)
                  }
                   


                function playSound(index, start) {

                    buffer = sounds[index].buffer;
                    if(!start) start = 0;
                        
                        sounds[index].source = context.createBufferSource(); // creates a sound source
                        sounds[index].gainNode =  context.createGain();

                        sounds[index].source.buffer = buffer;                    // tell the source which sound to play
                        sounds[index].source.connect(context.destination);       // connect the source to the context's destination (the speakers)
                        sounds[index].source.connect(sounds[index].gainNode);
                        sounds[index].gainNode.connect(context.destination);
    
                   if(sounds[index].saveVolume) sounds[index].gainNode.gain.value = sounds[index].saveVolume;
                    sounds[index].source.start(start);                           // play the source now
                    // note: on older systems, may have to use deprecated noteOn(time);
                }

