module SnakeTs {
    export class Board {
        public constructor(private _canvas: HTMLCanvasElement,
            private _size: ISize, private _cellSize: number) {
                this._canvas.width = this._size.width;
                this._canvas.height = this._size.height;
                this._canvas.style.width = this._size.width + "px";
                this._canvas.style.height = this._size.height + "px";
             }
    }
}