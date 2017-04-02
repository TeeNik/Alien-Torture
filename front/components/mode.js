(function(){
    class Mode {
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

            return fields.map(field => { return `<div class="grid-1-5 col-1">
					<h3><span class="uppercase">${field.mode}</span></h3>
					<img class = "msimg" src="resources/${field.img}">
					<p>${field.desc}</p>
				</div>` }).join(' ');
        }
    
        _updateHtml () {
            this.el.innerHTML = `
				<div id="menu" class="mainmenu">
			<h1>${this.data.title}</h1>
			<div class="container group">
				<div class="grid-1-5 col-1">
					<h3 class="h3mode"><span class="uppercase">Deathmatch</span></h3>
					<img class = "msimg" src="resources/deathMatch.png">
					<p>Select a hero and fight agains other players. Kill more than anybody to win.</p>
				</div>
				<div class="grid-1-5 col-1">
					<h3 class="h3mode"><span class="uppercase">Сatch Flag</span></h3>
					<img class = "msimg" src="resources/flagCapture.png">
					<p>Catch the flag and bring it to your base to earn a point. Team with 5 points wins.</p>
				</div>
				<div class="grid-1-5 col-1">
					<h3 class="h3mode"><span class="uppercase">Tutorial</span></h3>
					<img class = "msimg" src="resources/tutorial.png">
					<p>Learn the controls and test weapon and skills before joining muliplayer.</p>
				</div>
			</div>
						 

		</div>
		<br>
		<span><input type="button" class="backb" onclick="showInd();" value="Back"></span>
			`;
		}
    }
 	window.Mode = Mode;
})();