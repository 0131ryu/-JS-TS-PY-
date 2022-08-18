setImmediate(() => {
  //4번째
  console.log("immediate");
});
process.nextTick(() => {
  //1번째
  console.log("nextTick");
});
setTimeout(() => {
  //3번째
  console.log("timeout");
}, 0);
//2번째
Promise.resolve().then(() => console.log("promise"));
