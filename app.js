var PI = Math.PI;

function calculateArea(radius){
    this.radius = radius;
}
calculateArea.prototype.circumference = function(){
    return this.radius * 2 * PI;
};
calculateArea.prototype.area = function(){
    return this.radius * this.radius * PI;
};

var calculateArea154 = new calculateArea(7);
console.log(calculateArea154.area()); // 153.93804002589985