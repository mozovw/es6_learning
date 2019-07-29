let handler = {
    construct: function(target, args, newTarget){
        console.log("handle construct");
        return Reflect.construct(target, args, newTarget);
    } };


class exam {
    constructor(name){
        this.name = name;
    }
}
let proxy = new Proxy(exam,handler)
new proxy("Tom")
// handle construct
// exam {name: "Tom"}