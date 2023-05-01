function Accelerate(Gravity) 
{
	//Download from Blackboard, Week 8 onwards
	
    var ax = 0;
	var ay = 0;
	var gravity = Gravity;

    Object.defineProperty(this, 'AX',
    {
        get: function () {
            return ax;
        }
    })

    Object.defineProperty(this, 'AY',
    {
        get: function () {
            return ay + gravity;
        }
    })

    Accelerate.prototype.VThrust = function (Thrust) 
	{
        // below different from lab download
		// experimenting is key, figures here and HTML called from
		
		ay -= Thrust + 0.001;
		
		if (ay > 1.5) 
			{ ay = 0;}
    }

    Accelerate.prototype.HThrust = function (Thrust) 
	{
        ax -= Thrust + 0.001;
    }

	Accelerate.prototype.Halt = function () 
	{
        ay = 0;
        ax = 0;
    }

}