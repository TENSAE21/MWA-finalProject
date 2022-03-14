
const express = require('express')
const { route } = require('express/lib/application')
const controller = require('../controllers/qaController')

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.delete("/:id", controller.deleteOne)

// router.post("/", validStudent, controller.addOne)
// router.put("/", validStudent, controller.replaceOne)
// router.post("/:id/image", controller.uploadImage)

module.exports = router