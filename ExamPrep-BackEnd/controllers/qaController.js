const dao = require("../dao/qaDao");


// get all
function getAll(req, res) {
  const ret = dao.getAll()
  // console.log(typeOf(ret))
  return res.send({data: ret});
}

// add new question
function addQuestion(req, res){
  const questionBody = req.body;
  return res.json(dao.addOne(questionBody));
}

// get one by id
function getById(req, res) {
  const id = parseInt(req.params.id);
  return res.json(dao.getById(id));
}

// delete one
function deleteOne(req, res) {
  const id = parseInt(req.params.id);
  dao.removeOne(id);
  return res.status(200).json({ result: "ok" });
}

module.exports = {
  getAll,
  getById,
  deleteOne,
  addQuestion 
};
