// Imports Shapes.js to be tested
const Shapes = require('./shapes');

// Tests the Circle class for correct data
describe('Shapes', () => {
    describe('Circle', () => {
        it('should return a circle svg with the correct user input', () => {
            const circle = new Shapes.Circle("img", "red", "pink").render();
            expect(circle).toContain("<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"150\" cy=\"110\" r=\"80\" fill=\"pink\"/><text x=\"150\" y=\"150\" font-size=\"60\" text-anchor=\"middle\" fill=\"red\">img</text></svg>");
        });
    });
});

// Tests the Triangle class for correct data
describe('Shapes', () => {
    describe('Triangle', () => {
        it('should return a triangle svg with the correct user input', () => {
            const triangle = new Shapes.Triangle("img", "green", "yellow").render();
            expect(triangle).toContain('<polygon points="150, 18 282, 283 18, 283" fill="yellow"/>');
        });
    });
});

// Tests the Square class for correct data
describe('Shapes', () => {
    describe('Square', () => {
        it('should return a square svg with the correct user input', () => {
            const square = new Shapes.Square("img", "blue", "purple").render();
            expect(square).toContain("<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"200\" height=\"200\" fill=\"purple\"/><text x=\"100\" y=\"120\" font-size=\"60\" text-anchor=\"middle\" fill=\"blue\">img</text></svg>");
        });
    });
});