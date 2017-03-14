(function(){
    class About {
        constructor (options = { data: {} }) {
            this.data = options.data;
            this.el = options.el;

            this.render();
        }

        render () {
            this._updateHtml()
        }

        _getFields () {
            let { fields = [] } = this.data;

            return fields.map(field => { return `<h2>${field.prof}</h2><h3>${field.name}</h3>` }).join(' ');
        }

        _updateHtml () {
            this.el.innerHTML = `
				<div id="menu" class="mainmenu">
                    <h1>${this.data.title || 'default'}</h1>
                    <br>
                    <br>
					${this._getFields()} 
					<br>
					<p class="title" onclick="showInd();">Back</p>
                </div>
			`;
        }
    }
    window.About = About;
})();
