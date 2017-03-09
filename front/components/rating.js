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
			//noinspection ProblematicWhitespace
            this.el.innerHTML = `
				<div id="rating" class="mainmenu">
					<h1 style="font-size: 100px">Rating</h1>
					<br>
					<br>
					<br>
					<br>`
					+ temp() + 
					`<br>
					<p class="title" onclick="showInd();">Back</p>
				</div>
			`;
		}
    }
 	window.Rating = Rating;
})();

