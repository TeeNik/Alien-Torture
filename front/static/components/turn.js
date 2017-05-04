(function () {
    class Turn{
        constructor (options = { data: {} }) {
            this.data = options.data;
            this.el = options.el;

            this.render();
        }

        render () {
            this._updateHtml();
        }

        _updateHtml () {
            this.el.innerHTML = `
				<div class="mainmenu" style="
					padding-top: 40%;
">

        
Please, turn turn your device/
        

        
</div>
			`;
        }
    }
    window.Turn = Turn;

})();
