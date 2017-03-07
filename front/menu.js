(function(){
    class Menu {
        constructor (options = { data: {} }) {
			this.data = options.data;
			this.el = options.el;

			this.render();
		}

		render () {
			this._updateHtml()
			this._installControls();
		}
        
        @return {string}
    
        _updateHtml () {
			this.el.innerHTML = `
				<div id="menu" class="mainmenu">
                    <h1>Game Title</h1>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <p class="title"><a class="ref" href="game/index.html">Start</a></p>
                    <p class="title" onclick="showRating();">Rating</p>
                    <p class="title" onclick="showAbout();">About</p>
                    <p class="title" onclick="showLogin();">Exit</p>
                </div>
			`;
		}
        
    }
})();