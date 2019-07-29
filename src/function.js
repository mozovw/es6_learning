function fn(name, age = 17) {
    console.log(name + "," + age);
}
fn("Amy", 18);  // Amy,18
fn("Amy", "");  // Amy,
fn("Amy");     // Amy,17

function f(...values) {
    console.log(values.length);
}
f(1, 2);      //2
f(1, 2, 3, 4);  //4

var f = (a,b) => a+b;
console.log(f(6,2));  //8