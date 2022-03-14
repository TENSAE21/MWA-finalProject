const dao = require("../dao/qaDao");
const path = require("path");
const formidable = require("formidable");
const { nextTick } = require("process");

// get all
function getAll(req, res) {
  return res.json(dao.getAll());
}

// get one by id
function getById(req, res) {
  const id = req.params.id;
  return res.json(dao.getById(id));
}

// delete one
function deleteOne(req, res) {
  const id = req.params.id;
  dao.removeOne(id);
  return res.status(200).json({ result: "ok" });
}

module.exports = {
  getAll,
  getById,
  deleteOne,
  // addOne,
  // replaceOne,
  // uploadImage,
};
