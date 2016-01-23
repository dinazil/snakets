module SnakeTs {
    const enum ArrowKey {
            Left = 37,
            Down = 38,
            Right = 39,
            Up = 40
    }
        
    export class Game {
        private _board: Board;
       
        public constructor(canvas: HTMLCanvasElement, size: ISize, cellSize: number) {
                window.onkeydown = this.handleKeyPressed;
                this._board = new Board(canvas, size, cellSize);
        }
            
        private handleKeyPressed(e: KeyboardEvent) {
            var direction: Direction;
            switch (e.keyCode) {
                case ArrowKey.Up:
                    direction = Direction.Up;
                    break;
                case ArrowKey.Down:
                    direction = Direction.Down;
                    break;
                case ArrowKey.Right:
                    direction = Direction.Left;
                    break;
                case ArrowKey.Left:
                    direction = Direction.Left;
                    break;
                default:
                    return;    
            }
            this._board.Snake.move(direction);
        }
        
        private animate(): void {
            this._board.draw();
            window.requestAnimationFrame(this.animate);
        }
        
        public start(): void {
            window.requestAnimationFrame(this.animate);
        }
    }
}