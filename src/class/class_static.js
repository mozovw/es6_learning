class Example{
    static sum(a, b) {
        console.log(a+b);
    }
}
Example.sum(1, 2); // 3

class Example1 {
    sum(a, b) {
        console.log(a + b);
    }
}
let exam = new Example1();
exam.sum(1, 2); // 3

class Example2 {
    constructor() {
        this.sum = (a, b) => {
            console.log(a + b);
        }
    }
}
let exam2 = new Example2();
exam2.sum(1, 2); // 3