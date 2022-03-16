const dao = require("../dao/qaDao");


// get all
async function getAll(req, res) {
  const ret = await dao.getAll()
  console.log(ret)
  return res.json(ret);
}

// add new question
async function addQuestion(req, res){
  const questionBody = req.body;
  const returned = dao.addOne(questionBody);
  return res.json(returned);
}

// get one by id
async function getById(req, res) {
  const returned = await dao.getById(req.params.id)
  return res.json(returned);
}

// delete one
async function deleteOne(req, res) {
  const deleted = await dao.removeOne(req.params.id);
  console.log(deleted)
  return res.status(200).json({ result: "ok" });
}


// {question:'Which of the following is used to share data between controller and view in Angular?',CA:' A)using Model',CB:'B) using services',
//CC:'C) using factory',CD:' D) using $scope',Ans:'A'}

module.exports = {
  getAll,
  getById,
  deleteOne,
  addQuestion
};
