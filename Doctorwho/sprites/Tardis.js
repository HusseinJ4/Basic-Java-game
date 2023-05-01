function Tardis()
{	
	//create private variables for x and y coordinates 
	var x = 150;
	var y = 150;
	var blueBox = 1;
	// new below for keyboard movement
	var vx = 0;
	var vy = 0;
	//*****test for window****
	var RedWindow = 1;
	//this is for the circle
	var Bluecircle = 1 ;

	
	
	rotationAngle = 0,
	//create the draw function to give us the draw method
	Tardis.prototype.draw = function (context)
		{	
			context.save();
			context.translate(x, y);
			
			context.rotate(rotationAngle*Math.PI/180);// rotation the sprite by rotationAngle
			//body
			context.beginPath();
			context.fillStyle = "#003b6f";
			context.moveTo(-65, -90);
			context.lineTo(65,-90);
			context.lineTo(65,90);
			context.lineTo(-65,90);
			context.closePath();
			context.fill()
			context.stroke();
			
			//top pannel 1
			context.beginPath();
			context.fillStyle = "#003b6f";
			context.moveTo(-85, -90);
			context.lineTo(-85,-105);
			context.lineTo(85,-105);
			context.lineTo(85,-90);
			context.closePath();
			context.fill()
			context.stroke();
			
			//top pannel 2
			context.beginPath();
			context.fillStyle = "#003b6f";
			context.moveTo(-65, -100);// left bottom corner
			context.lineTo(-65,-120);//
			context.lineTo(65,-120);
			context.lineTo(65,-100);
			context.closePath();
			context.fill()
			context.stroke();
			
			//bottom pannel
			context.beginPath();
			context.fillStyle = "#003b6f";
			context.moveTo(85, 90);
			context.lineTo(85,105);
			context.lineTo(-85,105);
			context.lineTo(-85,90);
			context.closePath();
			context.fill()
			context.stroke();
			
			//window
			context.beginPath();
			context.fillStyle = "#ffffff";
			context.moveTo(-22, -22);
			context.lineTo(22,-22);
			context.lineTo(22,22);
			context.lineTo(-22,22);
			context.closePath();
			context.fill()
			context.stroke();
			
			//light box
			context.beginPath();
			context.fillStyle = "#FFFF00";
			context.moveTo(-15,-120);
			context.lineTo(-15,-150);
			context.lineTo(15,-150);
			context.lineTo(15,-120);
			context.closePath();
			context.fill()
			context.stroke();
			
			
			// function calls
			DrawLight(context);
			DrawTopBar(context);
			DrawWindows(context);
			
			 //restore the state of the context to what it was before our drawing
			context.restore();
		}
		
		function DrawLight(Context)
		{ 
			//LightBox(Context,10,10,10,10,"#ADD8E6");
		}
		
		function DrawTopBar(context)
		{
		
		}
		
		 function DrawWindows(context) {
        var colour = "";
		
		if (Bluecircle < 50) { 
			colour = "#335BFF" ;
		}
		else {
			colour = "#E3FF33" ; 
		}
		Window(context, -10 , 0 , colour);
		Window(context, 0 , 0 , colour);
		Window(context, 10 , 0 , colour);
		
		Bluecircle += 1;
		
		if ( Bluecircle > 100) {
			 Bluecircle = 1;
		}
		
		
    }
		//code for window 
		function Window(context, xposn, yposn, colour) {
        context.beginPath();
        context.fillStyle = colour;
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(xposn, yposn, 3, 0, (Math.PI * 2));
        context.fill();
        context.stroke();
		}
		//end code for window 
		Tardis.prototype.move = function()
		{
			y +=vy;
		// loop round at L and R Canvas edges
		if (x <0)
		{x = 600;}
		//else
		{x = x + vx;}
		
		if (x > 600)
		{ x = 0;}
		//else
		{ x = + vx;}
		
		}
		
		
		Tardis.prototype.accelerate = function (acceleration)
		{
			vx += acceleration.AX;
			vy += acceleration.AY;
		}
		
		Tardis.prototype.halt = function()
		{	
			var temp = vy;
			vx = 0;
			vy = 0;
		}
		
		// more code
		 //create a public property called Top
    Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the value of y less height
            return y - 200;
        }
    }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the value of y plus height
            return y + 20;
        }
    }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the value of x less width
            return x - 20;
        }
    }
    )

    //create a public property called Rightx
    Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the value of x plus width
            return x + 20;
        }
    }
    )
	
	//create a public rotationAngle
	Object.defineProperty(this, 'rotationAngle',
	{
		
		//getter
		get:function (){
			//return the value of rotationAngle
			return rotationAngle;
	},
	
	//setter
	set: function (value) {
		//set the value of rotationAngle
		rotationAngle=value;
	}
})

}
	