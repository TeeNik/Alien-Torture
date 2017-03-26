(function () {

    var siteService = new SiteService();

    class Menu {

        constructor(options = {data: {}}) {
            this.data = options.data;
            this.el = options.el;

            this.render();
        }

        render() {
            this._updateHtml();
        }

        _getFields() {
            let {fields = []} = this.data;

            return fields.map(field => {
                 return `<p class="title" id="${field.name}" onclick="${field.fun}">${field.name}</p>`
            }).join(' ');
        }

        _updateHtml() {
            this.el.innerHTML = `
				<div id="menu" class="mainmenu">
                    <h1>${this.data.title || 'default'}</h1>					
                    <br>
                    <br>
                    <br>
                    <br>
                    ${this._getFields()}
                </div>
			`;
        }

    }
    window.Menu = Menu;
})();
