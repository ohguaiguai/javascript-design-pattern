let arr = [1, 2, 3];
let nodeList = document.getElementsByTagName('a');
let $a = $('a');

arr.forEach((item) => {
  console.log(item);
});

// nodeList是伪数组没有forEach方法
let i;
let length = nodeList.length;
for (i = 0; i < length; i++) {
  console.log(nodeList[i]);
}
// 如果想用forEach方法
let list = [].slice.call(nodeList);
list.forEach((item) => {
  console.log(item);
});

$a.each(function (key, elem) {
  console.log(key, elem);
});

// 提供一个方法可以遍历以上三种数据格式
function each(data) {
  // 生成迭代器
  let $data = $(data);
  $data.each((key, val) => {
    console.log(key, val);
  });
}
each(arr);
each(nodeList);
each($a);

class Iterator {
  constructor(container) {
    this.list = container.list;
    this.index = 0;
  }
  next() {
    if (this.hasNext()) {
      return this.list[this.index++];
    }
    return null;
  }
  hasNext() {
    if (this.index >= this.list.length) {
      return false;
    }
    return true;
  }
}

class Container {
  constructor(list) {
    this.list = list;
  }
  // 生成遍历器
  getIterator() {
    return new Iterator(this);
  }
}

let arr = [1, 2, 3, 45];
let container = new Container(arr);
let iterator = container.getIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}

function each(data) {
  // 生成遍历器
  let iterator = data[Symbol.iterator]();
  // console.log(iterator.next())
  // console.log(iterator.next())
  // console.log(iterator.next())
  // console.log(iterator.next())
  // console.log(iterator.next())
  // console.log(iterator.next())
  let item = { done: false };
  while (!item.done) {
    item = iterator.next();
    if (!item.done) {
      console.log(item.value);
    }
  }
}

let arr = [1, 3, 4, 45];
let nodeList = document.getElementsByTagName('a');
let m = new Map();
m.set('a', 100);
m.set('b', 100);

each(arr);
each(nodeList);
each(m);

function each(data) {
  for (let item of data) {
    console.log(item);
  }
}
