"use strict";
{
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;
        }
        else {
            return shape.width * shape.height;
        }
    }
    // for Circle area
    const area1 = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(area1);
    // for Rectangle area
    const area2 = calculateShapeArea({
        shape: "rectangle",
        width: 20,
        height: 10,
    });
    console.log(area2);
    //
}
