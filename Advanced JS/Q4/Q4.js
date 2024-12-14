class Shape {
  draw() {
    return "Drawing a generic shape.";
  }
}

class Circle extends Shape {
  draw() {
    return "Drawing a circle.";
  }
}

class Rectangle extends Shape {
  draw() {
    return "Drawing a rectangle.";
  }
}

const shapes = [new Shape(), new Circle(), new Rectangle()];

shapes.forEach((shape) => console.log(shape.draw()));
