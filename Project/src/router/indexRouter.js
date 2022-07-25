const indexController = require("../controller/indexController");

exports.indexRouter = function (app) {
  //CRUD
  //create
  app.post("/todo", indexController.createdTodo);
  app.get("/user/:userIdx/todos", indexController.readTodo); // //read
  app.patch("/todos", indexController.updateTodo);
  app.delete("/user/:userIdx/todo/:todoIdx", indexController.deleteTodo); //delete

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
