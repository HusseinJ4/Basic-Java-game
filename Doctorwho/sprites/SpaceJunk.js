//create the constructor for the class SpaceJunk
function SpaceJunk() 
{
    //initialisation code will go here
	var x= 390, y = 100, vx= 0, vy =0, size = 20, hole=1;
    
	Object.defineProperty(this, 'VX',
	{
		get: function () {return vx;},
		set: function (value) {vx = value;}
	})
	
	Object.defineProperty(this, 'VY',
	{
		get: function () {return vy;},
		set: function (value) {vy = value;}
	})
	
	Object.defineProperty(this, 'Size',
	{
		get: function () {return size;},
		set: function (value) {vx = value;}
	})
	
		Object.defineProperty(this, 'x',
	{
		get: function () {return x;},
		set: function (value) {x = value;}
	})
	
	Object.defineProperty(this, 'Y',
	{
		get: function () {return y;},
		set: function (value) {y = value;}
	})
	
	
	Object.defineProperty(this, 'Top',
	{
		get: function () {return y - 50;},
		
	})
	
	Object.defineProperty(this, 'Bottom',
	{
		get: function () {return y + 50;},
		
	})
	
	
	Object.defineProperty(this, 'Left',
	{
		get: function () {return x - 50;},
		
	})
	
	
	Object.defineProperty(this, 'Right',
	{
		get: function () {return x + 50;},
		
	})
	
    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    SpaceJunk.prototype.draw = function (context) 
	{
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#00ff00";
        context.moveTo(-200, -10);
        //context.lineTo(50, -10);
		context.quadraticCurveTo(20, -200, 200, 20);
        //close the path
        context.closePath();
        //go ahead and draw the line
        //context.stroke();
        //restore the state of the context to what it was before our drawing
        context.restore();
    }
	

  
}

