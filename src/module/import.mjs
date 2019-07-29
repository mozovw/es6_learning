import { exportName,myfn } from "./export";
console.log(exportName);// Tom
console.log(myfn());
// node8不全支持es6，使用如下
// node --experimental-modules import.mjs 