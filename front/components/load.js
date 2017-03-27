(function () {

    var siteService = new SiteService();

    class Load {

        constructor(options = {data: {}}) {
            this.data = options.data;
            this.el = options.el;

            this.render();
        }

        render() {
            this._updateHtml();
        }

       _updateHtml() {
            this.el.innerHTML = `
				<div id="menu" class="mainmenu">
					<div class="spinner"></div>
			        <h2>${this.data.text}</h2>			
                </div>
			`;
        }

    }
    window.Load = Load;
})();