let string = "apple,banana,orange";
string.includes("banana");     // true
string.startsWith("apple");    // true
string.endsWith("apple");      // false
string.startsWith("banana", 6)  // true

console.log("Hello,".repeat(2));  // "Hello,Hello,"
console.log("h".padStart(5, "o"));  // "ooooh"
console.log("h".padEnd(5, "o"));    // "hoooo"
console.log("h".padStart(5));      // "    h"

let name = "Mike";
let age = 27;
let info = `My Name is ${name},I am ${age + 1} years old next year.`
console.log(info);

function f() {
    return "have fun!";
}
let string2 = `Game start,${f()}`;
console.log(string2);  // Game start,have fun!

innerHtml = `<ul>
  <li>menu</li>
  <li>mine</li>
</ul>
`;
console.log(innerHtml);
// 输出
{/* <ul>
 <li>menu</li>
 <li>mine</li>
</ul> */}