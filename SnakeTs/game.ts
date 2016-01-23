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
            var that = this;
            window.onkeydown = e => {
                Game.handleKeyPressed(that, e);
            }
            this._board = new Board(canvas, size, cellSize);
        }
            
        private static handleKeyPressed(context:Game, e: KeyboardEvent) {
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
            context._board.Snake.move(direction);
        }
        
        private animate(context: Game): void {
            context._board.draw();
            window.requestAnimationFrame(() => {
                context.animate(context);
            });
        }
        
        public start(): void {
            var that = this;
            window.requestAnimationFrame(() => {
                that.animate(that);
            });
        }
    }
}