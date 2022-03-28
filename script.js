class Circle {
    constructor(radius) {
        this.radius = radius;

    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2*Math.PI*this.radius;
    }
}

const circle = new Circle(11);

console.log(circle.getPerimeter());