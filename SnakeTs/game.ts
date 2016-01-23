module SnakeTs {
    const enum ArrowKey {
            Left = 37,
            Up = 38,
            Right = 39,
            Down = 40
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
                    direction = Direction.Right;
                    break;
                case ArrowKey.Left:
                    direction = Direction.Left;
                    break;
                default:
                    return;    
            }
            var nextLocation = context._board.Snake.getNextHeadLocation(direction);
            if (nextLocation !== null) {
                if (context._board.Food != null && context._board.Food.isInside(nextLocation)) {
                    context._board.Snake.grow(direction);
                    context._board.Food = null;
                } else {
                    context._board.Snake.move(direction);
                }
            }
        }
        
        private animate(context: Game): void {
            context._board.draw();
            window.requestAnimationFrame(() => {
                context.animate(context);
            });
        }
        
        private static getRandomLocation(size: ISize): Point {
            var x = Math.floor(size.width * Math.random());
            var y = Math.floor(size.width * Math.random());
            return new Point(x, y);
        }
        
        public start(): void {
            var that = this;
            window.setInterval(() => {
               var p = Game.getRandomLocation(that._board.Size);
               while (!that._board.isFree(p)) {
                   p = Game.getRandomLocation(that._board.Size);
               }
               that._board.Food = new FoodShape(p, that._board); 
            }, 5000);
            window.requestAnimationFrame(() => {
                that.animate(that);
            });
        }
    }
}