const items = ["zero", "one", "two"];
const it = items[Symbol.iterator]();
 
console.log(it.next());
console.log(it.next());