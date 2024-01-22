const router = require("express").Router()
const {GET_HOME,POST_HOME} = require("../controller/controller")


router.get("/", GET_HOME)
router.post("/", POST_HOME)



module.exports = router