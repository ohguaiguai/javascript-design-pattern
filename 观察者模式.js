class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }
  notifyAllObservers() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
  attach(observer) {
    this.observers.push(observer);
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log(`${this.name} updated, state: ${this.subject.getState()}`);
  }
}

let s = new Subject();
let o1 = new Observer('o1', s);
let o2 = new Observer('o2', s);
let o3 = new Observer('o3', s);
s.setState(1);

// 3. jQuery callbacks
var callbacks = $.Callbacks();
callbacks.add(function (info) {
  console.log('fn1', info);
});
callbacks.add(function (info) {
  console.log('fn2', info);
});
callbacks.fire('gogogo');
callbacks.fire('fire');

// 4. nodejs自定义事件
const EventEmitter = require('events');
const emitter1 = new EventEmitter();

emitter1.on('some', (info) => {
  console.log('fn1', info);
});
emitter1.on('some', (info) => {
  console.log('fn2', info);
});

emitter1.emit('some', 'xxxxx');
