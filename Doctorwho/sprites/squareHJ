
function Square(){

	var x = 0;
	var y = 0;
	
	//create a public property called x (note caps!)
	Object.defineProperty(this, 'X',
	{
		get: function () {
			//return - note lower case
			return x;
		},
		set: function (value) {
		//set - again, lower case
		x = value;}
	}
	)

	Square.prototype.draw = function (context) {
	context.beginPath();
	context.moveTo(x,y);
	context.lineTo(x + 50, y);
	context.lineTo(x + 50, y + 50);
	context.lineTo(x, y + 50);
	context.closePath();
	context.fillStyle="blue";
	context.fill();
	context.strokeStyle="red";
	context.stroke();
	}


	Square.prototype.move = function () {
	x++;
	}
}		