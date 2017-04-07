(function(){
	class Timer{
		constructor(){
			this.time = 180;
			this.startTime = Date.now();
			this.interval;
		}

		startCountsown(){
			this.interval = setInterval(function(){
				this.time--;
				if(this.time == 0) clearInterval(this.interval);
			}.bind(this), 1000);
		}

		drawTimer(){

			let min = parseInt(this.time / 60);
			let sec = this.time % 60;

			if(sec < 10) {
				sec = "0" + sec;
			} 

			brush.drawTextS({
				text: min + ":" + sec,
				x: window.screen.width/2-100,
				y: 20,
				size: 50,
				color: "black",
				font: 'pixel'
			});
		}
	}
	
	window.Timer = Timer;
})();

var timer = new Timer();
timer.startCountsown();

