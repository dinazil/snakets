$(document).ready(function () {
	console.log("Starting SnakeTs...");
    var canvas = <HTMLCanvasElement>document.getElementById("canvas");
    
    var game = new SnakeTs.Board(canvas, {width: 100, height: 70}, 5);
});
