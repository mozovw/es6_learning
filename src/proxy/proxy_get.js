let proxy = new Proxy({}, {
    get(target, propKey, receiver) {
        // 实现私有属性读取保护
        if(propKey[0] === '_'){
            throw new Erro(`Invalid attempt to get private     "${propKey}"`);
        }
        console.log('Getting ' + propKey);
        return target[propKey];
    }
  });
   
  let obj = Object.create(proxy);
  obj.name
  // Getting name