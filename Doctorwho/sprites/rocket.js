	function Rocket()
	{
		var x = 300;
		var y = 100;
		var RedEngine = 1;
		//
		var vx = 0;
		var vy = 0;
		
		Rocket.prototype.draw = function (context)
			{
				context.save();
				context.translate(x, y);
				
				//body
				context.beginPath();
				context.fillStyle="blue";
				context.moveTo(-20, -40);
				context.lineTo(20, -40);
				context.lineTo(20, 40);
				context.lineTo(-20,40);
				context.closePath();
				context.fill();
				context.stroke();
				
				//function calls
				DrawFins(context);
				DrawEngines(context);
				DrawPortholes(context);
				
				//restore
				context.restore();
			}
			
			function DrawFins(context)
			{
				Triangle(context,0,-80,20,-40,-20,-40,"00ff00");
				Triangle(context,20,0,32,40,20,40,"00ff00");
				Triangle(context,-20,0,-20,40,-32,40,"00ff00");		
			}
			
			function DrawEngines(context)
			{
				EngineNo = 1,
				Colour = "";
				
				while(EngineNo != 4) {
					if (EngineNo == RedEngine)
					{
						Colour = "#FF0000";
					}
					else
					{
						Colour = "#FFFF00";
					}
	
				Triangle(context,-14,40,-10,50,-18,50,Colour);
				Triangle(context,0,40,4,50,-4,50,Colour);
				Triangle(context, 14,40,18,50,10,50,Colour);
				
				EngineNo++;
				}
				
				RedEngine = RedEngine + .5;
				if(RedEngine ==8)
				{
					RedEngine=1;
				}
			}

	function DrawPortholes(context)
	{	
	Porthole(context, 0, -20, "#ffffff");
	Porthole(context, 0, 20, "#ffffff");
	}

	function Triangle(context, xposl, ypos1, xpos2, ypos2, xpos3,ypos3,	colour)
	{
	context.beginPath();
	context.fillStyle = colour;
	context.moveTo(xposl, ypos1);
	context.lineTo(xpos2, ypos2);
	context.lineTo(xpos3, ypos3);
	context.closePath();
	context.fill();
	context.stroke();
	}

	function Porthole(context, xposn, yposn, colour)
	{
	context.beginPath();
	context.fillStyle = colour;
	//x, y , radius
	context.arc(xposn , yposn , 6 , 0 , (Math.PI * 2));
	context.fill();
	context.stroke();
	}

	Rocket.prototype.move = function()
	{
		Y +=vy;
		// loop round at L and R Canvas edges
		if (x <0)
		{x = 600;}
		else
		{x = x + VX;}
		
		if (x > 600)
			{ x = 0;}
		else
			{ x = + vx;}
		
	}

	Rocket.prototype.accelerate = function (Acceleration)
	{
	vx += acceleration.AX;
	vy += acceleration.AY;
	}

	Rocket.prototype.halt = function ()
	{
	vx = 0;
	vy = 0;
	}
}
	
	