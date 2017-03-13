<<<<<<< HEAD
(function(){
=======
(function () {

>>>>>>> f512665a54a90dd01e16e14c83f214acaeb4dd92
    class Menu {
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

<<<<<<< HEAD
			return fields.map(field => { return `<p class="title"  onclick="${field.fun};">${field.name}</p>` }).join(' ');
		}
    
        _updateHtml () {
			this.el.innerHTML = `
				<div id="menu" class="mainmenu">
                    <h1>${this.data.title || 'default'}</h1>
=======
        _getFields() {
            let {fields = []} = this.data;

            return fields.map(field => {
                return `<p class="title"  onclick="${field.fun}">${field.name}</p>`
            }).join(' ');
        }

        _updateHtml() {
            this.el.innerHTML = `
				<div id="menu" class="mainmenu">
                    <h1>${this.data.title || 'default'}</h1>					
>>>>>>> f512665a54a90dd01e16e14c83f214acaeb4dd92
                    <br>
                    <br>
                    <br>
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