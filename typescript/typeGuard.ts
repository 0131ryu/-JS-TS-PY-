function numberOrNumArray(a: number | number[]) {
    if(Array.isArray(a)) {
        a.concat(4);
    } else {
        a.toFixed(3)
    }
}
numberOrNumArray(123)
numberOrNumArray([1,2,3])

function numOrStr(a: number | string) {
    if (typeof a === 'string') {
      a.split(',');  
    } else {
      a.toFixed(1);
    }
  }

class A6 {
    aaa() {}
}
class B6 {
    bbb() {}
}
function aOrB(param: A6 | B6) {
    if(param instanceof A6) {
        param.aaa();
    }
}
aOrB(new A6())
aOrB(new B6())