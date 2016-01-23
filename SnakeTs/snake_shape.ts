module SnakeTs {
    export const enum Direction {
        Up,
        Down,
        Left,
        Right
    }
    
    export class SnakeShape implements IShape {
        private _body: Point[] = [];
        
        public constructor(location: IPoint, private _board: Board) {
            this._body.push(Point.clone(location));
        }
        
        public isInside(point: IPoint) : boolean {
            var l = this._body.length;
            for (var i = 0; i < l; ++i) {
                var p = this._body[i];
                if (p.equals(point)) {
                    return true;
                }
            }
            return false;
        }
        
        private drawLink(p: IPoint, context: CanvasRenderingContext2D, board:Board): void {
            var actualLocation = board.convertPoint({x: p.x + 0.1, y: p.y + 0.1});
            var actualSize = board.convertLength(0.8);
            context.beginPath();
            context.rect(actualLocation.x, actualLocation.y, actualSize, actualSize);
            context.closePath();
            context.fill();
            context.stroke();
        }
        
        public draw(board: Board): void {
            var context = board.DrawingContect;
            
            context.save();

            context.fillStyle = "purple";
            context.strokeStyle = "black";
            
            this.drawLink(this._body[0], context, board);            

            context.fillStyle = "green";
            var l = this._body.length;
            for (var i = 1; i < l; ++i) {
                var p = this._body[i];
                this.drawLink(p, context, board);                
            }
            
            context.restore();
        }
        
        public getNextHeadLocation(direction: Direction): Point {
            var head = this._body[0];
            var potentialLocation =  new Point(head.x, head.y);

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
                return null;
            }
            return potentialLocation;
        }
        
        public move(direction: Direction): void {
            var newHead = this.getNextHeadLocation(direction);
            if (newHead === null) {
                return;
            }

            // move the body
            this._body.unshift(newHead);
            this._body.pop();
        }
        
        public grow(direction: Direction): void {
            var newHead = this.getNextHeadLocation(direction);
            if (newHead === null) {
                return;
            }

            // grow in the given direction
            this._body.unshift(newHead);
        }
    }
}