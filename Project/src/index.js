const compression = require("compression");
const cors = require("cors");
const { indexRouter } = require("./router/indexRouter");
const { userRouter } = require("./router/userRouter");

const express = require("express");
const app = express();
const port = 3000;

/* express 미들웨어 설정 */
//cors 설정
app.use(cors());

//정적 파일 제공
app.use(express.static("front"));

//body json 파싱
app.use(express.json());

//HTTP 요청 압축
app.use(compression());

//라우터
indexRouter(app);
userRouter(app);

app.listen(port, () => {
  console.log(`Express app listening at port: ${port}`);
});
