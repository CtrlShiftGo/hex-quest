//test function
function hello()
{
	alert("hello world");
}



function draw() 
{
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext('2d');
	
	// set size of canvas to entire page
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	
	// Fill color = grey
	ctx.fillStyle = '#404040';
	
	// Scale
	var size = 160;
	var scaling_factor = 1;
	
	// Initial point
	var x = -size*8;
	var y = 0;
	
	// First Layer
	diagonal(x, y, size, canvas, scaling_factor);
	
	// Second layer
	size = size/4;
	scaling_factor = scaling_factor*4;
	diagonal(x, y, size, canvas, scaling_factor);
}


function single_hex(x, y, size, canvas)
{
	var ctx = canvas.getContext('2d');	
	var w = Math.sqrt(3)*size;
	var h = 2*size;
	
	ctx.beginPath();
	// move to initial point
	ctx.moveTo(x, y);
	// draw entire hexagon
	ctx.lineTo((x+(w/2)), (y-(h/4)));
	ctx.lineTo((x+w), y);
	ctx.lineTo((x+w), (y+(h/2)));
	ctx.lineTo((x+(w/2)), (y+(h/2)+(h/4)));
	ctx.lineTo(x, (y+(h/2)));
	ctx.lineTo(x, y);
	ctx.stroke();
}


function diagonal(x, y, size, canvas, scaling_factor)
{
	var w = Math.sqrt(3)*size;
	var h = 2*size;
	//store x and y
	var xtemp = x;
	var ytemp = y;
	
	// Smaller layers = fill entire space of first layer 
	var grid_y = 8*scaling_factor;
	var grid_x = 8*scaling_factor;
	
	// Match up number of lines; offset because of first hexagon
	if(scaling_factor > 1)
	{
		grid_x = grid_x + scaling_factor-1;
	}
	
	// Loop through to create grid of size grid_x by grid_y
	for(j = 1; j <= grid_y; j++)
	{	
		// call first hex
		single_hex(x, y, size, canvas);
		// Diagonal grid		
		for(i = 0; i < grid_x; i++)
		{
			x = x + (w/2);
			y = y + (0.75*h);
			single_hex(x, y, size, canvas);
		}		
		x = xtemp+(w*j);
		y = ytemp;
	}
}



