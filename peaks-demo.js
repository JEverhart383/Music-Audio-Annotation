  
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

    ]

  });

  p.on('segments.ready', function(){


    console.log(p.segments.getSegments())
    console.log(p.segments.add({startTime: 120, endTime: 240})) 
    console.log(p.segments.getSegments())
  
  })


})(peaks)