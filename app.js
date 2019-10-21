const min = 0;
const max = 600;


let data = $('<p></p>')
let shapeContainer = $('#shape-container');
let dataContainer = $('#data-container');
let rectangleButton = $('#create-rectangle-btn');
let squareButton = $('#create-square-btn');
let circleButton = $('#create-circle-btn');
let triangleButton = $('#create-triangle-btn');
let rectangleWidth = $('#rectangle-width');
let rectangleHeight = $('#rectangle-height');
let squareHeight = $('#square-height');
let circleRadius = $('#circle-radius');
let triangleHeight = $('#triangle-height');


$(rectangleButton).click(() => {
    if ((rectangleWidth.val() >= 1 && rectangleWidth.val() <= 600) && (rectangleHeight.val() >= 1 && rectangleHeight.val() <= 600)) {
        let rectangle = new Rectangle(rectangleWidth.val(), rectangleHeight.val());
    }
    else {
        alert('Please enter a width and height between 1 and 600 for the rectangle.');
    }
});
$(squareButton).click(() => {
    if (squareHeight.val() >= 1 && squareHeight.val() <= 600) {
        let square = new Square(squareHeight.val());
    }
    else {
        alert('Please enter a height between 1 and 600 for the square.');
    }
});
$(circleButton).click(() => {
    if (circleRadius.val() >= 1 && circleRadius.val() <= 300) {
        let circle = new Circle(circleRadius.val());
    }
    else {
        alert('Please enter a radius between 1 an 300 for the circle.');
    }
});
$(triangleButton).click(() => {
    if (triangleHeight.val() >= 1 && triangleHeight.val() <= 600) {
        let triangle = new Triangle(triangleHeight.val());
    }
    else {
        alert('Please enter a height between 1 and 600 for the triangle.');
    }
});

class Shape {
    constructor() {
        this.div = $('<div></div');
        $(this.div).click(this.describeShape.bind(this));
        $(this.div).dblclick(this.deleteShape);
    }
    setCoordinate() {
        this.x = Math.floor(Math.random() * (max - min) + min);
        this.y = Math.floor(Math.random() * (max - min) + min);
    }
    style() {
        $(this.div).css({
            'position': 'absolute',
            'background-color': this.color,
            'width': this.width + 'px',
            'height': this.height + 'px',
            'left': this.x,
            'top': this.y,
        });
    }
    drawShape() {
        $(this.div).appendTo('#shape-container');
    }
    describeShape() {
        this.infoText = `<b>Shape Name: </b>${this.name}<br/>
        <b>Shape Width: </b>${this.width}<br/>
        <b>Shape Height: </b>${this.height}<br/>
        <b>Shape Radius: </b>${this.radius}<br/>
        <b>Shape Area: </b>${this.area}<br/>
        <b>Shape Perimeter: </b>${this.perimeter}<br/><br/>`;

        $(data).append(this.infoText);
        $(dataContainer).append(data);
    }
    deleteShape() {
        this.remove();
        $(data).html('');
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.name = 'Rectangle';
        this.color = 'green';
        this.width = width;
        this.height = height;
        this.radius = '';
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoordinate();
        this.style();
        this.drawShape();
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * this.width + 2 * this.height;
    }
}
class Square extends Shape {
    constructor(height) {
        super();
        this.name = 'Square';
        this.color = 'red';
        this.height = height;
        this.width = this.height;
        this.radius = '';
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoordinate();
        this.style();
        this.drawShape();
    }
    getArea() {
        return Math.pow(this.height, 2);
    }
    getPerimeter() {
        return (4 * this.height);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.name = 'Circle';
        this.color = 'purple';
        this.width = radius * 2;
        this.height = radius * 2;
        this.radius = radius;
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoordinate();
        this.style();
        this.drawShape();
    }
    getArea() {
        return Math.PI * this.radius * this.radius
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    style() {
        $(this.div).css({
            'position': 'absolute',
            'background-color': 'purple',
            'width': this.width + 'px',
            'height': this.height + 'px',
            'left': this.x,
            'top': this.y,
            '-moz-border-radius': this.radius + 'px',
            '-webkit-border-radius': this.radius + 'px',
        });
    }
}
class Triangle extends Shape {
    constructor(height) {
        super();
        this.name = 'Triangle';
        this.color = 'yellow';
        this.width = height;
        this.height = height;
        this.radius = '';
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoordinate();
        this.style();
        this.drawShape();
    }
    getArea() {
        return 0.5 * this.height * this.height;
    }
    getPerimeter() {
        return 2 * this.height + Math.pow(Math.pow(this.height, 2) + Math.pow(this.height, 2), 0.5)
    }
    style() {
        $(this.div).css({
            'position': 'absolute',
            'width': 0 + 'px',
            'height': 0 + 'px',
            'left': this.x,
            'top': this.y,
            'border-bottom': this.width + 'px solid yellow',
            'border-right': this.width + 'px solid transparent',
        });
    }
}