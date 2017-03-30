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
				<script src="/game/point.js"></script>  
				<script src="/game/start.js"></script>    
				<script src="/game/obj.js"></script> 
				<script src="/game/items.js"></script>    
				<script src="/game/weapon.js"></script>
				<script src="/game/gui.js"></script>
				<script src="/game/enemy.js"></script>
				<script src="/game/specials.js"></script>
				<script src="/game/map.js"></script>
				<script src="/game/audio.js"></script>
				<script src="/game/timer.js"></script>
				<script src="/game/pause.js"></script>
				<script src="/game/tutorial.js"></script>
				<script src="/game/main.js"></script>
				<script>game.startLoop("l1");</script>
			`;
        }
    }
    window.Game = Game;
})();

