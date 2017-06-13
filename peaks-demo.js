  
(function(Peaks){
  var audiography = {
    addSegmentToWaveform: function(segmentID, segmentDescription){

      //this method will add the segment to the waveform with 
      //edit = true

    }, 
    saveSegmentToWaveform: function(segmentID){
      //this method will take the segmentID and update the startTime, endTime, and 
      //push all changes to the backend
    }
  }

  var p = Peaks.init({
  	container: document.querySelector('#waveform-container'), 
  	mediaElement: document.querySelector('#audio'), 
  	dataUri: {
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