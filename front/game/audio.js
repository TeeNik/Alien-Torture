(function(){
	class Audio{
		constructor(){
			this.main_theme = audio.newAudio("/game/assets/main_theme.mp3");
		}
	
		play(){
			this.main_theme.play();
		}
	
		pause(){
			this.main_theme.pause();
		}
	};
 
 	window.Audio = Audio;
 
})();

var audio = new Audio();
//audio.play();