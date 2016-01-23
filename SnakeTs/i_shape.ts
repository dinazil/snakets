module SnakeTs {
    export interface IShape {
        draw(board: Board): void;

        isInside(point: IPoint) : boolean;
    }
}