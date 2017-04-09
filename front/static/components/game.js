(function(){
    class Game {
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
				<div id="menu" class="mainmenu">
                    <h1>${this.data.title || 'default'}</h1>
                    <br>
                    <br>
					There will soon be game!!!
					<br>
					<p class="title" onclick="showInd();">Back</p>
                </div>
			`;
        }
    }
    window.Game = Game;
})();

