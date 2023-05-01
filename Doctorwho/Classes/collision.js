
function Collision()
{
    Collision.prototype.Overlapping = function (Tardis, SpaceJunk)
    {
        var L_Overlap,
            R_Overlap,
            T_Overlap,
            B_Overlap;
			
		L_Overlap = (Tardis.Left >= SpaceJunk.Left) & (Tardis.Left <= SpaceJunk.Right);
		R_Overlap = (Tardis.Right >= SpaceJunk.Left) & (Tardis.Right <= SpaceJunk.Right);
		T_Overlap = (Tardis.Top >= SpaceJunk.Top) & (Tardis.Top <= SpaceJunk.Bottom);
		B_Overlap = (Tardis.Bottom >= SpaceJunk.Top) & (Tardis.Bottom <= SpaceJunk.Bottom);
       
		if ((L_Overlap | R_Overlap) & (T_Overlap | B_Overlap)) 
			{
				return true;
			}
		else 
			{       
				return false;
			}
    }
}