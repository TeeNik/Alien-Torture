var back = game.newRoundRectObject({
	x: 10,
	y: 10,
	w: 200,
	h:40,
	radius: 5,
	fillColor: "gray",
	strokeColor: "darkred",
	strokeWidth: 3
});

var hpBar = game.newRoundRectObject({
	x: 10,
	y: 10,
	w: obj.health * 19.4,
	h: 35,
	radius: 5,
	fillColor: "red"
});

var drawHP = function(obj){
	brush.drawRoundRect({
        w: 62,
        h: 9,
		x: obj.x + 5,
		y: obj.y - 8,
        radius: 5,
		fillColor: "gray",
        strokeColor: "darkred",
        strokeWidth: 2
	});
    brush.drawRoundRect({
        w: obj.health*6,
        h: 7,
		x: obj.x + 7,
		y: obj.y - 6,
        radius: 5,
		fillColor: "red"
	});
	
	back.setPositionS(point(30,30));
	back.draw();
	
	hpBar.w = obj.health * 19.4;
	hpBar.setPositionS(point(34,34));
	hpBar.draw();
}