module SnakeTs {
    export class Board {
        public constructor(private _canvas: HTMLCanvasElement,
            private _size: ISize, private _cellSize: number) {
                var actualWidth = _cellSize * _size.width;
                var actualHeight = _cellSize * _size.height;
                this._canvas.width = actualWidth;
                this._canvas.height = actualHeight;
                this._canvas.style.width = actualWidth + "px";
                this._canvas.style.height = actualHeight + "px";
             }
    }
}