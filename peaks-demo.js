  
(function(Peaks){
  var myAudioContext = new AudioContext(); 

  var p = Peaks.init({
  	container: document.querySelector('#waveform-container'), 
  	mediaElement: document.querySelector('#audio'), 
  	// audioContext: myAudioContext
  	dataUri: {
  		// arrayBuffer: 'sonata.dat'
  		json: 'sonata.json'
  	}, 
    zoomLevels: [512, 1024, 2048, 4096],
    segments: [
      {
        startTime: 120, 
        endTime: 140, 
        editable: false, 
        color: '#ff0000', 
        labelText: 'First Segment'
      }, 
      {
        startTime: 220, 
        endTime: 240, 
        editable: false, 
        color: '#ff0000', 
        labelText: 'Second Segment'
      }, 


    ]

  });
})(peaks)