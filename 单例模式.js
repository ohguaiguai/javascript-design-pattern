class SingleObject {
  login() {
    console.log('login...');
  }
}
// 静态方法
SingleObject.getInstance = (function () {
  let instance;
  return function () {
    if (!instance) {
      instance = new SingleObject();
    }
    return instance;
  };
})();
let obj1 = SingleObject.getInstance();
obj1.login();
let obj2 = SingleObject.getInstance();
obj2.login();

console.log('obj1 === obj2', obj1 === obj2);

if (window.jQuery != null) {
  return window.jQuery;
} else {
  // 初始化
}

// 2. 模拟登录框
class LoginForm {
  constructor() {
    this.state = 'hide';
  }
  show() {
    if (this.state === 'show') {
      alert('已经显示');
      return;
    }
    this.state = 'show';
  }
  hide() {
    if (this.state === 'hide') {
      alert('已经隐藏');
      return;
    }
    this.state = 'hide';
  }
}

// 使用闭包
LoginForm.getInstance = (function () {
  let instance;
  return function () {
    if (!instance) {
      instance = new LoginForm();
    }
    return instance;
  };
})();

let login1 = LoginForm.getInstance();
login1.show();

let login2 = LoginForm.getInstance();
login2.show();
