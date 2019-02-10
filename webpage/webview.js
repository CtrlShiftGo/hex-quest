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
	
	ctx.fillStyle = '#404040';
	
	// Scale
	var size = 80;
	
	// Initial point
	var x = 50;
	var y = 50;
	
	// Initial hex
	//single_hex(x, y, size, canvas);
	
	diagonal(x, y, size, canvas);
	
	size = 20;
	diagonal(x, y, size, canvas);
}


function single_hex(x, y, size, canvas)
{
	var ctx = canvas.getContext('2d');	
	var w = Math.sqrt(3)*size;
	var h = 2*size;
	
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo((x+(w/2)), (y-(h/4)));
	ctx.lineTo((x+w), y);
	ctx.lineTo((x+w), (y+(h/2)));
	ctx.lineTo((x+(w/2)), (y+(h/2)+(h/4)));
	ctx.lineTo(x, (y+(h/2)));
	ctx.lineTo(x, y);
	
	ctx.stroke();

}


function diagonal(x, y, size, canvas)
{
	var w = Math.sqrt(3)*size;
	var h = 2*size;
	//store x and y
	var xtemp = x;
	var ytemp = y;
	
	for(j = 1; j < 6; j++)
	{	
		// call first hex
		single_hex(x, y, size, canvas);
		// Diagonal grid
		for(i = 0; i < 6; i++)
		{
			x = x + (w/2);
			y = y + (0.75*h);
			single_hex(x, y, size, canvas);
		}		
		x = xtemp+(w*j);
		y = ytemp;
	}
}



