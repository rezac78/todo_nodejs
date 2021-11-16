const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("hello word");
});

router.get("/p/:id", (req, res) => {
  res.send(`Id is ${req.params.id}`);
});

router.get("/home",(req,res)=>{
        res.render("index")
})

module.exports = router;
