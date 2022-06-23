// const dummy = new Object();

// dummy.attr = 1;
// console.log(dummy);

const Dummy = function (param) {
  this.attr = param;
};

Dummy.prototype.attr2 = 3;

const obj = new Dummy(1);
console.log(obj.attr, obj.attr2);
