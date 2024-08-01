const express = require("express")
const app =  express()
const path = require("node:path");
const indexRouter = require("./routes/indexRouter")


// Setting ejs as tempelate engine and notifying our views directory
app.set("views" , path.join(__dirname, "views"))
app.set("view engine" , "ejs");

// Serving static files like css. Public means root directory
const assetsPath = path.join(__dirname , "public");
app.use(express.static(assetsPath));

// To parse form data into  req.body
app.use(express.urlencoded({ extended: true }));

app.use('/',indexRouter);

const PORT = process.env.port || 3000;

app.listen(PORT, ()=>console.log("LISTENING....."));