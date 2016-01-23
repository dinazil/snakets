module SnakeTs {
    export class FoodShape implements IShape {
        public constructor(private _location: Point, private _board: Board) { }
        
        public isInside(point: IPoint): boolean {
            return this._location.equals(point);
        }
        
        public draw(board: Board) {
            var context = board.DrawingContect;
            
            var actualLocation = board.convertPoint(this._location);
            var actualSize = board.convertLength(1);
            
            context.save();
            context.fillStyle = "red";
            context.fillRect(actualLocation.x, actualLocation.y, actualSize, actualSize);
            context.restore();
        }
    }
}