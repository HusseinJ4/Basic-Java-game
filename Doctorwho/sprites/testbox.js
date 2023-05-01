function Box() {
	var x = 0, y = 0, colour = "red" size = 20,
	vx = 3.5 vy = 3 , width = 3;
	
	// diff layout - formatted for clear hard copy
	// you can copy and paste / repeat for all your sprites
	Object.defineProperty(this, 'VX',
	{ get: function () {return vx;},
	  set: function (Value) {vx = value;}
	})
	
		Object.defineProperty(this, 'VY',
	{ get: function () {return vy;},
	  set: function (Value) {vy = value;}
	})

	
	Object.defineProperty(this, 'Size',
	{ get: function () {return size;},
	  set : function (Value) {y = value;}
	})
	
	Object.defineProperty(this, 'X',
	{ get: function () {return x;},
	set: function (Value) [x = value;}
	})
	
	Object.defineProperty(this, 'Y',
	{ get: function () {return y;},
	  set: function (value) {y = value;}
	})
	
	Box.prototype.draw = function (context)
	{
		context.save();
		context.translate(x , y);
		context.lineWidth = width;
		context.fillStyle = colour;
		context.beginPath();
		context.moveTo(-size, -size);
		context.lineTo(-size, size);
		context.lineTo(size , size);
		context.lineTo(size, -size);
		context.closePath();
		context.fill();
		context.stroke();
		context.restore();		
	};
}


