const math = require("./Math")
console.log("Local Module");
console.log(math.add(25,10));
console.log(math.sub(25,10));

const circle = require("./Circle")

console.log("Area of a Circle is ",circle.area(5));