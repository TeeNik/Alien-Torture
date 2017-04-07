(function(){
    class GUI{
        constructor(){
            this.back = game.newRoundRectObject({
                x: 10,
                y: 10,
                w: 200,
                h:40,
                radius: 5,
                fillColor: "gray",
                strokeColor: "darkred",
                strokeWidth: 3
            });
            
            this.hpBar = game.newRoundRectObject({
                x: 10,
                y: 10,
                w: player.health * 19.4,
                h: 35,
                radius: 5,
                fillColor: "red"
            });
			
			this.backS = game.newRoundRectObject({
                x: 10,
                y: 10,
                w: 200,
                h:40,
                radius: 5,
                fillColor: "gray",
                strokeColor: "blue",
                strokeWidth: 3
            });
            
            this.sBar = game.newRoundRectObject({
                x: 10,
                y: 10,
                w: player.health * 19.4,
                h: 35,
                radius: 5,
                fillColor: "#8ecdf6",
            });
        }
        
        static drawHP(obj){
            brush.drawRoundRect({
                w: 62,
                h: 9,
                x: oPos.x + 5,
                y: oPos.y - 8,
                radius: 5,
                fillColor: "gray",
                strokeColor: "darkred",
                strokeWidth: 2
            });
            brush.drawRoundRect({
                w: player.health*6,
                h: 7,
                x: oPos.x + 7,
                y: oPos.y - 6,
                radius: 5,
                fillColor: "red"
            });          
        }
        
        draw(){
            this.back.setPositionS(point(30,30));
            this.back.draw();

            this.hpBar.w = player.health * 19.4;
            this.hpBar.setPositionS(point(34,34));
            this.hpBar.draw();
			
			this.backS.setPositionS(point(30,80));
            this.backS.draw();

            this.sBar.w = player.health * 19.4;
            this.sBar.setPositionS(point(34,84));
            this.sBar.draw();
        }       
    }
    
    window.GUI = GUI;
})();

var gui = new GUI();

