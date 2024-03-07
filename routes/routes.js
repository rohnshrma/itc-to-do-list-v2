const router = require("express").Router()
const {GET_HOME,POST_HOME,GET_DELETE} = require("../controller/controller")


router.get("/", GET_HOME)
router.post("/", POST_HOME)

// delete
router.get("/delete/:id", GET_DELETE)



module.exports = router