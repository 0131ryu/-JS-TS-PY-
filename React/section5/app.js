const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use((req, res, next) => {
  res.status(200).send("404지롱");
});

app.use((err, req, res, next) => {
  console.err(err);
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
