(function () {
    class Profile {
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
                return `<p class="${field.class}">
							<input id="${field.id}" name="${field.id}" type="${field.type}" required="${field.required}"  placeholder="${field.placeholder}" value="${field.value}" /> </p>`
            }).join(' ');
        }

        _updateHtml() {
            this.el.innerHTML = `
				<div id="menu" class="mainmenu">
			<h1>${this.data.title || 'default'}</h1>
			<div id="wrapper">
				<div id="login" class="animate form">
					<form action="" autocomplete="on">
						<h4><img src="resources/jc.jpg" class="prfimg"><br>TeeNik<br>Score: 3315<br><br><br></h4>
						${this._getFields()}
					</form>
				</div>
			</div>
		    <p class="title" onclick="showInd();">Back</p>
		</div>
			`;
        }

    }
    window.Profile = Profile;
})();