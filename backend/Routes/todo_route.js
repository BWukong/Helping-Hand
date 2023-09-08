const {Router} = require("express");
const { getInfo } = require("../Controllers/todo_controller");
const { saveInfo } = require("../Controllers/todo_controller");
const { updateInfo } = require("../Controllers/todo_controller");
const { deleteInfo } = require("../Controllers/todo_controller");
const router = Router()
router.get('/', getInfo)
router.post('/save', saveInfo)
router.post('/update', updateInfo)
router.post('/delete', deleteInfo)

module.exports = router;