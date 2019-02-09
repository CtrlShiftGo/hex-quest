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
	
	var size = 200;
	var x = 200;
	var y = 200;
	
	//call function
	single_hex(x, y, size, canvas);
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
