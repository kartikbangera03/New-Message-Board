
  const {Router} = require("express");
  const router = Router();
  const messagesController  = require("../contollers/messagesController")



  router.get("/", messagesController.getAllMessages);


  router.get("/new",(req,res)=>{
    res.render("form",{title:"New Message Form"})
  });

 
  router.post("/new" , messagesController.addNewMessage)
 

  module.exports = router;