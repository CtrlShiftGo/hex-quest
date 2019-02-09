//test function
function hello(){
	alert("hello world");
}

function draw() {
	var canvas = document.getElementById("myCanvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		
		ctx.beginPath();
		ctx.moveTo(75, 50);
		ctx.lineTo(100, 75);
		ctx.lineTo(100, 25);
		ctx.closePath();
		ctx.stroke();
	}
}