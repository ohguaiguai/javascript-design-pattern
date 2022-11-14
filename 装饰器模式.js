class Circle {
  draw() {
    console.log('画一个图形');
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle;
  }
  draw() {
    this.circle.draw();
    this.setRedBorder(this.circle);
  }
  setRedBorder(circle) {
    console.log('设置红色边框');
  }
}

let circle = new Circle();
circle.draw();

let dec = new Decorator(circle);
dec.draw();

// ES7装饰器
// core-decorators封装了常用的修饰器
// @readonly
import { readonly } from 'core-decorators';

class Person {
  @readonly
  name() {
    return 'zhang';
  }
}
let p = new Person();
alert(p.name());
p.name = function () {}; // 报错

import { deprecate } from 'core-decorators';

class Person {
  @deprecate
  name() {
    return 'zhang';
  }
}
let p = new Person();
alert(p.name()); // 会提示name方法将会在以后的版本废弃
