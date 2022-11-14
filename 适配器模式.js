class Adaptee {
  specificRequest() {
    return '德国标准插头';
  }
}

class Target {
  constructor() {
    this.Adaptee = new Adaptee();
  }
  request() {
    let info = this.Adaptee.specificRequest();
    return `${info} -> 转换器 -> 中国标准插头`;
  }
}

let target = new Target();
console.log(target.request());

// 1. 封装旧接口
var $ = { ajax: function() { return ajax(options) } // 自己封装的ajax取代$.ajax