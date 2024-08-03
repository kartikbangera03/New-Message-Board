const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

exports.getAllMessages = asyncHandler(async(req,res)=>{
    const allMessages = await db.getAllMessages();
    // console.log("RESPONSE FROM SERVER.....");
    // console.log(allMessages);
    res.render("index",{
        title:"Mini Message Board",
        messages : allMessages
    })

});

exports.addNewMessage =  asyncHandler(async(req,res)=>{
    await db.addNewMessage(req.body.userMessage ,  req.body.userName);
    res.redirect("/");
});
