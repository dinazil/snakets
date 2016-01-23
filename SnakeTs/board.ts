module SnakeTs {
    export class Board {
        public Snake: SnakeShape;
        public DrawingContect: CanvasRenderingContext2D;
        
        public constructor(private _canvas: HTMLCanvasElement,
            private _size: ISize, private _cellSize: number) {
                var actualWidth = _cellSize * _size.width;
                var actualHeight = _cellSize * _size.height;
                this._canvas.width = actualWidth;
                this._canvas.height = actualHeight;
                this._canvas.style.width = actualWidth + "px";
                this._canvas.style.height = actualHeight + "px";
                
                this.Snake = new SnakeShape({ x: Math.floor(_size.width/2),
                                               y: Math.floor(_size.height/2) 
                                             }, this);
                                 
                this.DrawingContect = _canvas.getContext("2d");
        }
            
        public convertPoint(point: IPoint): IPoint {
            return { x: point.x * this._cellSize, y: point.y * this._cellSize };
        }
        
        public convertLength(length: number) : number {
            return length * this._cellSize;
        }
        
        public isFree(point: IPoint) : boolean {
            if (this.Snake.isInside(point)) {
                return false;
            }
            if (point.x < 0 || point.x >= this._size.width) {
                return false;
            }
            if (point.y < 0 || point.y >= this._size.height) {
                return false;
            }
            return true;
        } 
             
        public draw() : void {
            this._canvas.getContext("2d").clearRect(0, 0, this._canvas.width, this._canvas.height);
            this.Snake.draw(this);
        }
    }
}