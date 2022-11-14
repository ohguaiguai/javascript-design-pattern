class State {
  constructor(color) {
    this.color = color;
  }
  handle(context) {
    console.log(`turn to ${this.color} light`);
    context.setState(this);
  }
}
class Context {
  constructor() {
    this.state = null;
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
  }
}
let context = new Context();

let green = new State('green');
let yellow = new State('yellow');
let red = new State('red');

green.handle(context);
console.log(context.getState());

yellow.handle(context);
console.log(context.getState());

red.handle(context);
console.log(context.getState());

// 状态机
import StateMachine from 'javascript-state-machine';
// 初始化状态机模型
let fsm = new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    // 监听执行收藏
    onDoStore: function () {
      alert('收藏成功'); // 可以做post请求
      updateText();
    },
    // 监听取消收藏
    onDeleteStore: function () {
      alert('已经取消收藏'); // post
      updateText();
    }
  }
});

let $btn = $('#btn1');
$btn.click(function () {
  if (fsm.is('收藏')) {
    fsm.doStore();
  } else {
    fsm.deleteStore();
  }
});
// 修改按钮文案
function updateText() {
  $btn.text(fsm.state);
}

// 初始化文案
$btn.text('收藏');

import StateMachine from 'javascript-state-machine';

// 状态机模型
let fsm = new StateMachine({
  init: 'pending', // 初始化状态
  transitions: [
    {
      name: 'resolve', // 事件名称
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject', // 事件名称
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    // 监听 resolve
    onResolve: function (state, data) {
      // state - 当前状态机实例; data - fsm.resolve(xxx) 传递的参数
      data.successList.forEach((fn) => fn(data.result));
    },
    // 监听 reject
    onReject: function (state, data) {
      // state - 当前状态机实例; data - fsm.resolve(xxx) 传递的参数
      data.failList.forEach((fn) => fn());
    }
  }
});

class MyPromise {
  constructor(fn) {
    this.successList = [];
    this.failList = [];
    this.result = null;

    fn(
      (img) => {
        this.result = img;
        // resolve 函数
        fsm.resolve(this);
      },
      () => {
        // reject 函数
        fsm.reject(this);
      }
    );
  }
  then(successFn, failFn) {
    this.successList.push(successFn);
    this.failList.push(failFn);
  }
}

// 测试代码
function loadImg(src) {
  const promise = new MyPromise(function (resolve, reject) {
    let img = document.createElement('img');
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function (err) {
      reject(err);
    };
    img.src = src;
  });
  return promise;
}

let src =
  'https://dws3.autoimg.cn/adar9/vr/2018/09/19/04f25c51b4d8044e4d0558715ff8ba16_new/thumb.jpg';
let result = loadImg(src);
// loadImg(src)是异步执行；then方法在img加载成功之前就已经执行
result.then(
  function (img) {
    console.log(img);
  },
  function () {
    console.log('fail1');
  }
);
// result.then(function () {
// console.log('ok2')
// }, function () {
// console.log('fail2')
// })
