var drawName = function () {
	brush.drawText({
		x: this.x + 13,
		y: this.y - 13,
		text: this.name,
		color: "black",
		size: 14
	});
};

var img = pjs.tiles.newImage("assets/p1.png");
var anim = img.getAnimation(0,0,72,97,11);
var img = pjs.tiles.newImage("assets/p1f.png");
var animS = img.getAnimation(0,0,72,97,1);

var obj = game.newAnimationObject({
	x: 0,
	y: 0,
	animation: anim,
	w: 72,
	h: 97
});

obj.name = "Player1";
obj.drawName = drawName;
obj.setDelay(5);

var health = 10;

obj.control = function(){
		let speed = 5;
		this.dx = this.dy = 0;
        if(key.isDown("A"))
        {
            this.dx = -speed;
			this.setFlip(1,0);
        }
        else if(key.isDown("D"))
        {
            this.dx = speed;
			this.setFlip(0,0);
        }  
        if(key.isDown("W"))
        {
            this.dy = -speed;
        }  
        else if(key.isDown("S"))
        {
            this.dy  = speed;
        }
		
		if(!(key.isDown("A") || key.isDown("D") || key.isDown("W") || key.isDown("S")))
		{
			this.setAnimation(animS);		
		}
		else
		{
			this.setAnimation(anim);	
		}

        if(mouse.getPosition().x - this.getPositionC().x >= 0)
        {
			this.setFlip(0,0);
        }
		else
		{
			this.setFlip(1,0);
		}
	
		
}

obj.collision = function(){
	if(obj.isIntersect(wall))
	{
		if(obj.dx > 0 && obj.x+10 < wall.x)
		{
			obj.dx = 0;
		}
		if(obj.dx < 0 && obj.x > wall.x)
		{
			obj.dx = 0;
		}
		if(obj.dy > 0 && obj.y < wall.y)
		{
			obj.dy = 0;
		}
		if(obj.dy < 0 && obj.y > wall.y)
		{
			obj.dy = 0;
		}
	}
};

obj.do = function(){   
    obj.control();
    obj.drawName();
    obj.move(point(obj.dx,obj.dy));
    obj.collision();
    obj.draw();
}