class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = $('<div class="shape"></div>');
        this.top = this.generateRandomPos(this.height);
        this.left = this.generateRandomPos(this.width);
        this.div = $('<div class="shape"></div>');
        this.render();
    }

    generateRandomPos(offset) {
        return Math.floor(Math.random() * (601 - offset));

    }

    render() {
        this.div.css({
            height: this.height,
            width: this.width,
            top: this.top,
            left: this.left
        });
        $('#shape-container').append(this.div);
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div.attr('id', 'rectangle');
        this.div.click(() => {
            $('#data-container').text("Rectangle"),
                $('#data-container').text(`
                Name: Square \n\
                Height: ${height}
                Width : ${width}
                Perimeter : ${height * 2 + width * 2} 
                Area : ${height * width}
                `)
        }) 
        this.div.addEventListener("dblclick", () => {
            this.remove();
        });

    }
}

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.div.attr('id', 'square');
        this.div.click(() => {
            $('#data-container').text(
                `Name: Square \n\
                Height: ${side}
                Width : ${side}
                Perimeter : ${side * 4} 
                Area : ${side * side}
                `
            )

        })
        this.div.addEventListener("dblclick", () => {
            this.remove();
        });
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.div.attr('id', 'circle');
        this.div.click(() => {
            $('#data-container').text(
                `Name : Circle
                Diameter: ${radius * 2}
                Radius: ${radius}
                Area: ${(radius * radius) * Math.PI}
                Circumfrence: ${2 * Math.PI * radius}
                `)
        })
        this.div.addEventListener("dblclick", () => {
            this.remove();
        });
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.div.attr('id', 'triangle');
        this.div.click(() => {
            $('data-container').text(
                `Name: Triangle
                Height: ${side}
                Width : ${side}
                Perimeter : ${2 * height + Math.sqrt(2) * height} 
                Area : Area: ${0.5 * height * height}
                `
            )
        })
        this.div.addEventListener("dblclick", () => {
            this.remove();
        });
    }
}


let btnRectangle = document.getElementById("create-rectangle-btn");
btnRectangle.addEventListener("click", function () {
    let rectHeight = document.getElementById('rectangle-height').value;
    let rectWidth = document.getElementById('rectangle-width').value;
    if (rectHeight >= 601 || rectWidth >= 601) {
        alert("Too big");
    } else {
        new Rectangle(rectHeight, rectWidth);
    }
});

let btnSquare = document.getElementById("create-square-btn");
btnSquare.addEventListener("click", function () {
    let sq = document.getElementById('square-height').value;
    if (sq >= 601) {
        alert("Too big!");
    } else {
        new Square(sq);
    }
});

let btnCircle = document.getElementById("create-circle-btn");
btnCircle.addEventListener("click", function () {
    let cir = document.getElementById('circle-radius').value;
    if (cir >= 601) {
        alert("Too big!");
    } else {
        new Circle(cir);
    }
});

let btnTriangle = document.getElementById("create-triangle-btn");
btnTriangle.addEventListener("click", function () {
    let tri = document.getElementById('triangle-height').value;
    if (tri >= 601) {
        alert("Too big!");
    } else {
        new Triangle(tri);
    }
});

