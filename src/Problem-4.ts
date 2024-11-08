{
  // Problem-4 -->
  // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  function calculateShapeArea(shape: Circle | Rectangle) {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else {
      return shape.width * shape.height;
    }
  }

  // for Circle area
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea); 

  // for Rectangle area
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 20,
    height: 10,
  });
  console.log(rectangleArea);

  //
}
