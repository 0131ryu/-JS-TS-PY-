const apple = (iphone, airpods) =>
  console.log(
    `새로 나온 iphone과 airpods은 각각 ${iphone}, ${airpods}입니다. `
  );

function koreaNew(func, iphone, airpods) {
  return func(iphone, airpods);
}

apple("iphone14", "airpots pro"); //새로 나온 iphone과 airpods은 각각 iphone14, airpots pro입니다.
koreaNew(apple(), "iphone14", "airpots pro"); //새로 나온 iphone과 airpods은 각각 undefined, undefined입니다.
koreaNew(apple, "iphone14", "airpots pro"); //새로 나온 iphone과 airpods은 각각 iphone14, airpots pro입니다.
