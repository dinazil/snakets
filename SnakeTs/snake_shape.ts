module SnakeTs {
    export const enum Direction {
        Up,
        Down,
        Left,
        Right
    }
    
    export class SnakeShape implements IShape {
        private _body: IPoint[] = [];
        
        public constructor(location: IPoint, private _board: Board) {
            this._body.push(location);
        }
        
        public isInside(point: IPoint) : boolean {
            for (var p in this._body) {
                if (p === point) {
                    return true;
                }
            }
            return false;
        }
        
        public draw(board: Board): void {
            var context = board.DrawingContect;
            
            for (var p in this._body) {
                var actualLocation = board.convertPoint(p);
                var actualSize = board.convertLength(1);
                context.fillRect(actualLocation.x, actualLocation.y, actualSize, actualSize);
            }
        }
        
        private canMove(direction: Direction): boolean {
            if (this._body.length == 1) {
                return true;
            }

            var potentialLocation = this._body[0];

            switch (direction) {
                case Direction.Up:
                    --potentialLocation.y;
                    break;
                case Direction.Down:
                    ++potentialLocation.y;
                    break;
                case Direction.Left:
                    --potentialLocation.x;
                    break;
                case Direction.Right:
                    ++potentialLocation.x;
                    break;
            }             
            
        }
        
        public move(direction: Direction): void {
            var potentialLocation = this._body[0];

            switch (direction) {
                case Direction.Up:
                    --potentialLocation.y;
                    break;
                case Direction.Down:
                    ++potentialLocation.y;
                    break;
                case Direction.Left:
                    --potentialLocation.x;
                    break;
                case Direction.Right:
                    ++potentialLocation.x;
                    break;
            }
            
            if (!this._board.isFree(potentialLocation)) {            
                return; // can't move
            }

            // move the body
            this._body.unshift(potentialLocation);
            this._body.pop();
        }
    }
}