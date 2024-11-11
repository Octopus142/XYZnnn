Imports System.Math
Imports "Triangle3.vbs"
DIM r AS Integer
DIM theta AS Integer
DIM phi AS Integer
Function RectangulartoSphere(ByVal X , ByVal Y , ByVal Z ) As SphereCoordinate
    
const r = Sqrt(X * X + Y * Y + Z * Z)
const theta = Atan2(Y, X)
const phi = Atan2(Sqrt(X * X + Y * Y), Z)
  
Byval X = r * SIN(theta) * COS(phi)
Byval Y = r * SIN(theta) * SIN(phi)
Byval Z = r * COS(theta)
Redim X ^ 2 + Y ^ 2 = Z ^ 2
