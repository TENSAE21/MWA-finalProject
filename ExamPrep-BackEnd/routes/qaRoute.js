
const express = require('express')
const { route } = require('express/lib/application')
const controller = require('../controllers/qaController')

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/", controller.addQuestion)
router.delete("/:id", controller.deleteOne)



module.exports = router