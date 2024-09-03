import "../Coordinate/RectangularCoordinate.ts"
interface Point{
    x:number,
    y:number,
    z:number
}
function vertices(){
     return [
         {x: 1,  y: 0,  z: 0},
         {x: 0,  y: 1,  z: 0},
         {x: -1, y: 0,  z: 0},
         {x: 0,  y: -1, z: 0},
         {x: 0,  y: 0,  z: 1},
         {x: 0,  y: 0,  z:-1},
     ]
 }
