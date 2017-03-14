var map = {
	width: 26,
	height: 18,
	tileSize: 128,
	image: pjs.tiles.newImage("assets/tile.png"),
	level: [6, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 7, 7, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 8, 14, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 14, 16, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 16, 14, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 14, 16, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 16, 14, 4, 5, 4, 5, 4, 32, 4, 5, 4, 5, 4, 22, 24, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 16, 14, 12, 13, 12, 13, 12, 38, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 6, 7, 8, 13, 12, 13, 12, 13, 16, 14, 4, 5, 4, 30, 37, 15, 37, 31, 4, 5, 4, 5, 4, 5, 4, 5, 14, 15, 16, 5, 4, 5, 4, 5, 16, 14, 12, 13, 12, 13, 12, 29, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 22, 23, 24, 13, 12, 13, 12, 13, 16, 14, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 16, 14, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 16, 14, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 16, 14, 12, 13, 12, 13, 12, 13, 12, 13, 30, 31, 12, 13, 12, 13, 12, 13, 6, 7, 8, 13, 12, 13, 12, 13, 16, 14, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 14, 15, 16, 5, 4, 5, 4, 5, 16, 14, 12, 13, 12, 13, 12, 30, 31, 13, 12, 13, 12, 13, 12, 13, 12, 13, 22, 23, 24, 13, 12, 13, 12, 13, 16, 14, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 30, 31, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 16, 14, 12, 13, 12, 13, 12, 13, 12, 32, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 16, 14, 4, 5, 4, 5, 4, 5, 4, 29, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 16, 14, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 16, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24],
};

var blocks = [];

let t = map.level;
OOP.forArr(t, function(el, i, t){ 
	blocks.push(game.newAnimationObject({
			x: (i%26) * map.tileSize,
			y: parseInt(i/26) * map.tileSize,
			w: map.tileSize,
			h: map.tileSize,
			animation: map.image.getAnimation(((el-1)%8) * map.tileSize, parseInt((el-1)/8) * map.tileSize, map.tileSize, map.tileSize, 1), 
	}));
});