
const obj = {
    ["he" + "llo"]() {
        return "Hi";
    }
}
obj.hello();  //"Hi"

const hello = "Hello";
const obj2 = {
    [hello + "2"]: "world"
};
obj2  //{Hello2: "world"}

let age = {age: 15};
let name = {name: "Amy"};
let person = {...age, ...name};
person;  //{age: 15, name: "Amy"}

let target = {a: 1};
let object2 = {b: 2};
let object3 = {c: 3};
Object.assign(target,object2,object3);  
// 第一个参数是目标对象，后面的参数是源对象
target;  // {a: 1, b: 2, c: 3}