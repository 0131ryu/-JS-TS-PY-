process.on("uncaughtException", (err) => {
  console.error("예기지 못한 에러", err);
});

setInterval(() => {
  console.log("시작");
  try {
    throw new Erorr("서버를 고장내주마!");
  } catch (err) {
    console.error(err);
  }
}, 1000);
