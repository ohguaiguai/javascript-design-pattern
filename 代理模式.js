class RealImg {
  constructor(fileName) {
    this.fileName = fileName;
    this.loadFromDisk();
  }
  display() {
    console.log('display...' + this.fileName);
  }
  loadFromDisk() {
    console.log('loading...' + this.fileName);
  }
}

class ProxyImg {
  constructor(fileName) {
    this.RealImg = new RealImg(fileName);
  }
  display() {
    this.RealImg.display();
  }
}

let proxyImg = new ProxyImg('1.png');
proxyImg.display();

// 2. jQuey $.proxy
$('div').click(function () {
  setTimeout(
    $.proxy(function () {
      // this 符合期望
      $(this).addClass('red');
    }, this),
    1000
  );
});

// 3. ES6
let star = {
  name: 'zhangxxx',
  age: 25,
  phone: '123123123'
};

let agent = new Proxy(star, {
  get: function (target, key) {
    if (key === 'phone') {
      // 返回经纪人的电话
      return 'agent: 1232132111';
    }
    if (key === 'price') {
      // 明星不报价，经纪人报价
      return '120000';
    }
    return target[key];
  },
  set: function (target, key, val) {
    if (key === 'customPrice') {
      if (val < 100000) {
        // 最低100000
        throw new Error('价格太低');
      } else {
        target[key] = val;
        return value;
      }
    }
  }
});
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

agent.customPrice = 150000;
console.log(agent.customPrice);
