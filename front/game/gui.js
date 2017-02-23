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
}