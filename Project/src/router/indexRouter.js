const indexController = require("../controller/indexController");

exports.indexRouter = function (app) {
  //CRUD
  //create
  app.post("/todo", indexController.createdTodo);
  app.get("/user/:userIdx/todos", indexController.readTodo); // //read
  app.patch("/todos", indexController.updateTodo);
  app.delete("/user/:userIdx/todo/:todoIdx", indexController.deleteTodo); //delete
};
