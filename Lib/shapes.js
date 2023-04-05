// Parent class for all shapes
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    // Renders the text into a string to be used in child classes
    render() { 
        const shapeInfo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        const shapeText = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        return [shapeInfo, shapeText];
    } 
}

// Circle class that uses parent class info and adds circle data
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    // Renders all circle info and makes it one string
    render() {
        const shapeInfo = super.render();
        const shapeText = super.render();
        return `${shapeInfo[0]}<circle cx="150" cy="110" r="80" fill="${this.shapeColor}"/>${shapeText[1]}</svg>`;
    }
}

// Triangle class that uses parent class info and adds triangle data
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    // Renders all triangle info and makes it one string
    render() {
        const shapeInfo = super.render();
        return `${shapeInfo[0]}<polygon points="150, 18 282, 283 18, 283" fill="${this.shapeColor}"/><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

// Square class that uses parent class info and adds square data
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    // Renders all square info and makes it one string
    render() {
        const shapeInfo = super.render();
        return `${shapeInfo[0]}<rect width="200" height="200" fill="${this.shapeColor}"/><text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}
// Exports classes to be used in generateLogo.js
module.exports = {Circle, Triangle, Square};