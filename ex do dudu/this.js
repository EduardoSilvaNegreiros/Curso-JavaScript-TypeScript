"use strict"
console.log(this);


function fnExpression() {
    console.log("this dentro de function expression");
    console.log(this);
}
fnExpression();

const fnArrow = () => {
    console.log("This dentro de arrow function");
    console.log(this);
}
fnArrow();


