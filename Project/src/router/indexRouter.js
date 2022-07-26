const indexController = require("../controller/indexController");
const { jwtMiddleware } = require("../../js/jwtMiddleware");

exports.indexRouter = function (app) {
  //CRUD
  //create
  app.post("/todos", jwtMiddleware, indexController.createdTodo);
  app.get("/user/:userIdx/todos", jwtMiddleware, indexController.readTodo); // //read
  app.patch("/todo", jwtMiddleware, indexController.updateTodo);
  app.delete("/todo/:todoIdx", jwtMiddleware, indexController.deleteTodo); //delete

  app.get(
    "/dummy",
    function (req, res, next) {
      console.log(1);
      next(); //다음 함수를 불러주는 역할
    },
    function (req, res, next) {
      console.log(2);
      //next();
    },
    function (req, res, next) {
      console.log(3);
      return;
    }
  );
};
