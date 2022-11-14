// selector 可传可不传
function bindEvent(elem, type, selector?, fn) {
  if (fn == null) {
    fn = selector;
    selector = null;
  }
  // ***
}

bindEvent(elem, 'click', '#div1', fn);
bindEvent(elem, 'click', fn); // 第四个参数为 null， 说明没有传 selector，所以需要把形参中的selector 置为 null , 把形参中的 fn 的值置为实参selector
