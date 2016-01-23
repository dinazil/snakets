$(document).ready(function () {
	console.log("Starting SnakeTs...");
    var canvas = <HTMLCanvasElement>document.getElementById("canvas");
    
    var image = new Image();
    var game = new SnakeTs.Game(canvas, {width: 10, height: 7}, 100, 5000, image);
    
    image.onload = () => {
        game.start();
    }
    
    image.src = "resources/mouse-47518.png";
});
