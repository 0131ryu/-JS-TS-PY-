const heaven = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = 1;
    resolve(num);
  }, 500);
});

heaven
  .then((num) => {
    console.log(num);
    return num + 1;
  })
  .then((num) => {
    console.log(num);
    return num + 10;
  })
  .then((num) => {
    console.log(num);
    return num + 100;
  })
  .then((num) => {
    console.log(num);
  });
