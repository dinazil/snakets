module SnakeTs {
    export class Point implements IPoint {
        public constructor(public x: number, public y: number) {
        }
        
        public static clone(other: IPoint): Point {
            return new Point(other.x, other.y);
        }
        
        public equals(other: IPoint): boolean {
            return this.x === other.x && this.y === other.y;
        }
    }
}