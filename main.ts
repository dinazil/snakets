$(document).ready(function () {
	console.log("Starting SnakeTs...");
    var canvas = <HTMLCanvasElement>document.getElementById("canvas");
    
    var game = new SnakeTs.Game(canvas, {width: 50, height: 35}, 10);
    game.start();
});
