class Observer {
  constructor(fns) {
    this.fns = fns || [];
  }
  //订阅
  subscribe(fn) {
    this.fns.push(fn);
  }
  // 取消订阅
  unsubscribe(fn) {
    this.fns = this.fns.filter((el) => {
      return el !== fn;
    });
  }
  // 发射
  update(o) {
    this.fns.forEach((fn) => {
      fn(o);
    })
  }
}
//测试
var o = new Observer;
var f1 = function (data) {
  console.log('Robbin: ' + data + ', 赶紧干活了！');
};

var f2 = function (data) {
  console.log('Randall: ' + data + ', 找他加点工资去！');
};

o.subscribe(f1);
o.subscribe(f2);

o.update("Tom回来了！", '666');
//Robbin: Tom回来了！, 赶紧干活了！ 
//Randall: Tom回来了！, 找他加点工资去！

//退订f1
o.unsubscribe(f1);
//再来验证
o.update("Tom回来了！"); // Randall: Tom回来了！, 找他加点工资去！
o.unsubscribe(f2);
o.update("Tom回来了！"); // 无打印，因为取消了所有的订阅