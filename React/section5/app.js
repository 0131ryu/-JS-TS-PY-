const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const dotenv = require("dotenv");
const nunjucks = require("nunjucks");

dotenv.config();
const app = express();
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

app.set("port", process.env.PORT || 3000);
app, set("view engine", "html");

nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use(morgan("dev"));
app.use("/", indexRouter);
app.use("/user", userRouter);

try {
  fs.readdirSync("upload");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 파일을 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "multipart.html"));
});

app.post(
  "/upload",
  upload.fields({ name: "image1" }, { name: "image2" }, { name: "image3" }),
  (req, res) => {
    console.log(req.file);
    res.send("ok");
  }
);

app.use("/", (req, res, next) => {
  if (req.session.id) {
    express.static(path.join(__dirname, "public"));
    req, res, next; //함수명이나 다름 없음, (req, res, next)를 넣어 함수를 호출
  } else {
    next();
  }
});
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUnitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use((req, res, next) => {
  res.status(200).send("404지롱");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(200).send("에러 발생 근데 이유는 모름!");
});

app.get("/category/:name", (req, res) => {
  res.send(`hello ${req.params.name}`);
});

app.post("/", (req, res) => {
  res.send("hello, express");
});

app.get("/about", (req, res) => {
  res.send("hello, about express");
});

app.listen(3000, () => {
  console.log("익스프레스 서버 실행");
});
