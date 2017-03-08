(function(){
    class Rating {
        constructor (options = { data: {} }) {
			this.data = options.data;
			this.el = options.el;

			this.render();
		}

		render () {
			this._updateHtml()
		}
    
        _updateHtml () {
			this.el.innerHTML = `
				<div id="rating" class="mainmenu">
					<h1 style="font-size: 100px">Rating</h1>
					<br>
					<br>
					<br>
					<br>
					<ol>
						<li>DronVachevsky</li>
						<li>TeeNik</li>
						<li>Random3355</li>
						<li>Madonna</li>
						<li>AMarev</li>
						<li>ShinyLust</li>
						<li>Dinosor</li>
						<li>VladislavPG</li>
						<li>Gigson</li>
						<li>Fahrenheit</li>
					</ol>
					<br>
					<p class="title" onclick="showInd();">Back</p>
				</div>
			`;
		}
    }
 	window.Rating = Rating;
})();