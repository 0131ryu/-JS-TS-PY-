interface Cat { meow: number }
interface Dog { bow: number }
function catOrDog(a: Cat | Dog): a is Dog {
  //타입 판별을 여러분이 직접 만듦
  if ((a as Cat).meow) { return false }
  return true;
}

//타입을 구분해주는 커스텀함수(if문)를 직접 만들 수 있음
function pet(a: Cat | Dog) {
    if(catOrDog(a)) {
        console.log(a.bow)
    }
    if("meow" in a) {
        console.log(a.meow)
    }
}

const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => 
{
    return input.status === 'rejected';
}
const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => 
{
    return input.status === 'fulfilled';
}

//Promise => Pending => Settled(Resolved, Rejected)
//성공이든 실패든 Settled 성공시 Resolved, 실패 시 Rejected

const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
const errors = promises.filter(isFulfilled);

export{};