// Imports shapes.js file
const shapes = require("./shapes");
// Generates logo based off of user input by grabbing the shape class and adding user's choices
function generateLogo({shape, text, textColor, shapeColor}) {
    let logo = '';

    if (shape === "Circle") {
        logo = new shapes.Circle(text, textColor, shapeColor).render();
    } else if (shape === "Triangle") {
        logo = new shapes.Triangle(text, textColor, shapeColor).render();
    } else {
        logo = new shapes.Square(text, textColor, shapeColor).render();
    }

    // Returns the logo to be displayed
    return logo;
}
// Exports function to be used in index.js
module.exports = generateLogo;