class Point {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const vertices: Point[] = [
    new Point(0, 0, 1),
    new Point(0, -Math.sqrt(3)/2, 0),
    new Point(0, 0, Math.sqrt(3)/2),
    new Point(1, 0, 0),
    new Point(),
    new Point(),
]
const faces: Point[][] = [
    [vertices[0], vertices[1], vertices[2]],
    [vertices[0], vertices[2], vertices[3]],
    [vertices[0], vertices[1], vertices[3]],
    [vertices[1], vertices[2], vertices[3]],
    [vertices[0], vertices[1], vertices[3]],
    [vertices[1], vertices[2], vertices[3]],
]