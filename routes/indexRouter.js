
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

  const {Router} = require("express");
  const router = Router();

  router.get("/",(req,res)=>{
    res.render("index",{ title:"Mini MessageBoard" , messages:messages});
  });



  router.get("/new",(req,res)=>{
    res.render("form",{title:"New Message Form"})
  });

  router.post("/new", (req,res)=>{
    // res.send(`Message : ${req.body.userMessage} , From : ${req.body.userName}`)
    messages.push({
        text : req.body.userMessage ,
        user : req.body.userName , 
        added : new Date()
    })

    res.redirect("/")
  })
 

 

  module.exports = router;