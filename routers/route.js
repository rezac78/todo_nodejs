const { Router } = require("express");
const router = Router();
const indexcontroller = require('../controllers/index');

router.get("/",indexcontroller.gethome)

router.get("/delete/todo/:_id",indexcontroller.getDeleted);

router.get("/edit/:_id",indexcontroller.getEdit);

router.put("/edit/:_id",indexcontroller.putEdit);

module.exports = router;
