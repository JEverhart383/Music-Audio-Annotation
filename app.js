var app = new Vue({
	el: '#app', 
	data: {
		message: 'Hello Vue!'
	}
})


var audio = document.querySelector('#audio'); 

audio.addEventListener('play', function(event){
	console.log(this.currentTime); 
	console.log(event); 

})

audio.addEventListener('timeupdate', function(){
	console.log('playing' + this.currentTime); 
})

var button = document.querySelector('#annotation-button'); 

button.addEventListener('click', function(){

	var currentAnnotations; 
	//get current annotations 
	currentAnnotations = JSON.parse(localStorage.getItem('annotations')); 
	console.log(currentAnnotations); 

	if (!currentAnnotations){
		currentAnnotations = []; 
	}

	var textArea = document.querySelector('#annotation-text'); 


	var newAnnotation = {
		time: '', 
		text: ''
	}

	var currentAudioTime = audio.currentTime; 
	var annotationText = textArea.value;

	newAnnotation.time = currentAudioTime; 
	newAnnotation.text = annotationText; 

	currentAnnotations.push(newAnnotation); 

	localStorage.setItem('annotations', JSON.stringify(currentAnnotations));  

	textArea.value = ''; 

}); 